// Test/build tooling only: use the repository's compiler without a new runner dependency.
const fs = require("node:fs");
const ts = require("typescript");
require.extensions[".ts"] = (loaded, filename) => {
  loaded._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true, resolveJsonModule: true }
  }).outputText, filename);
};
