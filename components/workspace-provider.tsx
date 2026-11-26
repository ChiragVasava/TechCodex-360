"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { addActivity, blankLearning, conceptIdPattern, emptyWorkspace, parseWorkspaceBackup, type LearningEntry, type RecordKind, type WorkspaceData, type WorkspaceRecord } from "../lib/workspace";
import { readWorkspace, updateWorkspace } from "../lib/workspace-storage";

type WorkspaceContextValue = {
  data: WorkspaceData; ready: boolean; error: string | null;
  retry: () => Promise<void>;
  saveLearning: (id: string, changes: Partial<Omit<LearningEntry, "updatedAt">>) => Promise<void>;
  visit: (id: string, position?: number) => Promise<void>;
  saveRecord: (kind: RecordKind, record: WorkspaceRecord) => Promise<void>;
  deleteRecord: (kind: RecordKind, id: string) => Promise<void>;
  saveRoadmap: (selection: WorkspaceData["roadmap"]) => Promise<void>;
  importBackup: (text: string) => Promise<void>;
  exportBackup: () => Promise<void>;
};
const WorkspaceContext = createContext<WorkspaceContextValue | null>(null);

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<WorkspaceData>(emptyWorkspace);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const channel = useRef<BroadcastChannel | null>(null);
  const retry = useCallback(async () => {
    try { setData(await readWorkspace()); setReady(true); setError(null); }
    catch (problem) { setError(problem instanceof Error ? problem.message : "Unable to load workspace."); }
  }, []);
  useEffect(() => {
    void retry();
    if (typeof BroadcastChannel !== "undefined") {
      channel.current = new BroadcastChannel("techcodex-workspace-updates");
      channel.current.onmessage = () => { void retry(); };
    }
    const onFocus = () => { void retry(); };
    window.addEventListener("focus", onFocus);
    return () => { channel.current?.close(); channel.current = null; window.removeEventListener("focus", onFocus); };
  }, [retry]);
  const mutate = useCallback(async (update: (current: WorkspaceData) => WorkspaceData, replace = false) => {
    try {
      const saved = await updateWorkspace(update, replace);
      setData(saved); setReady(true); setError(null); channel.current?.postMessage("changed");
    } catch (problem) { const message = problem instanceof Error ? problem.message : "Unable to save workspace."; setError(message); throw new Error(message); }
  }, []);
  const saveLearning = useCallback(async (id: string, changes: Partial<Omit<LearningEntry, "updatedAt">>) => {
    if (!conceptIdPattern.test(id)) throw new Error("Invalid concept ID.");
    await mutate((current) => {
      current.learning[id] = { ...(Object.hasOwn(current.learning, id) ? current.learning[id] : blankLearning()), ...changes, updatedAt: new Date().toISOString() };
      addActivity(current, `Updated learning: ${id}`, id); return current;
    });
  }, [mutate]);
  const visit = useCallback(async (id: string, position?: number) => {
    if (!conceptIdPattern.test(id)) throw new Error("Invalid concept ID.");
    await mutate((current) => { current.visits[id] = { at: new Date().toISOString(), position: position ?? current.visits[id]?.position ?? 0 }; return current; });
  }, [mutate]);
  const saveRecord = useCallback(async (kind: RecordKind, record: WorkspaceRecord) => {
    await mutate((current) => {
      const existing = current.records[kind].findIndex((entry) => entry.id === record.id);
      const saved = { ...record, updatedAt: new Date().toISOString() };
      if (existing === -1) current.records[kind].unshift(saved); else current.records[kind][existing] = saved;
      addActivity(current, `${existing === -1 ? "Created" : "Updated"} ${kind}: ${record.fields.name.slice(0, 350)}`); return current;
    });
  }, [mutate]);
  const deleteRecord = useCallback(async (kind: RecordKind, id: string) => {
    await mutate((current) => { current.records[kind] = current.records[kind].filter((record) => record.id !== id); addActivity(current, `Deleted ${kind} record: ${id}`); return current; });
  }, [mutate]);
  const saveRoadmap = useCallback(async (selection: WorkspaceData["roadmap"]) => {
    await mutate((current) => { current.roadmap = selection; addActivity(current, `Saved roadmap: ${selection.selectedRole}`); return current; });
  }, [mutate]);
  const importBackup = useCallback(async (text: string) => {
    const imported = parseWorkspaceBackup(text);
    await mutate(() => { addActivity(imported, "Restored workspace from validated backup"); return imported; }, true);
  }, [mutate]);
  const exportBackup = useCallback(async () => {
    try {
      const latest = await readWorkspace();
      const url = URL.createObjectURL(new Blob([JSON.stringify(latest, null, 2)], { type: "application/json" }));
      const anchor = document.createElement("a"); anchor.href = url; anchor.download = `techcodex-workspace-${new Date().toISOString().slice(0, 10)}.json`; anchor.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (problem) { const message = problem instanceof Error ? problem.message : "Export failed."; setError(message); throw new Error(message); }
  }, []);
  const value = useMemo(() => ({ data, ready, error, retry, saveLearning, visit, saveRecord, deleteRecord, saveRoadmap, importBackup, exportBackup }), [data, ready, error, retry, saveLearning, visit, saveRecord, deleteRecord, saveRoadmap, importBackup, exportBackup]);
  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (!context) throw new Error("WorkspaceProvider is required.");
  return context;
}

export function WorkspaceStorageNotice() {
  const { ready, error, retry } = useWorkspace();
  if (error) return <div role="alert" className="my-4 rounded border border-red-300 p-4 text-sm"><p>{error}</p><button className="btn mt-2" onClick={() => void retry()}>Retry storage</button></div>;
  if (!ready) return <p role="status" className="muted py-4">Loading your saved workspace…</p>;
  return null;
}
