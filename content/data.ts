export type Status = "experienced" | "learning" | "planned";

export const roadmap: { domain: string; items: { name: string; status: Status; progress: number; note: string }[] }[] = [
  { domain: "Core Computing Foundations", items: [
    { name: "Operating Systems", status: "experienced" as Status, progress: 78, note: "Process, memory, and filesystem fundamentals" },
    { name: "Computer Networks", status: "learning" as Status, progress: 52, note: "TCP/IP, routing, DNS, and packet analysis" },
    { name: "DBMS", status: "experienced" as Status, progress: 74, note: "Relational design and query optimization" },
    { name: "Data Structures & Algorithms", status: "learning" as Status, progress: 58, note: "Graphs, trees, dynamic programming" },
  ]},
  { domain: "Software Development", items: [
    { name: "TypeScript", status: "learning" as Status, progress: 68, note: "Strong types across application boundaries" },
    { name: "Python", status: "experienced" as Status, progress: 82, note: "Automation and backend services" },
  ]},
  { domain: "Web Development", items: [
    { name: "Next.js", status: "learning" as Status, progress: 64, note: "App Router, server components, and rendering" },
  ]},
  { domain: "App Development", items: [
    { name: "React Native", status: "planned" as Status, progress: 15, note: "Cross-platform mobile applications" },
  ]},
  { domain: "Cloud & DevOps", items: [
    { name: "Docker", status: "experienced" as Status, progress: 72, note: "Containerized workloads and Compose" },
    { name: "CI/CD", status: "learning" as Status, progress: 48, note: "GitHub Actions and deployment pipelines" },
  ]},
  { domain: "Debugging", items: [
    { name: "Systems Debugging", status: "experienced" as Status, progress: 76, note: "Logs, traces, profiling, and root-cause analysis" },
  ]},
  { domain: "IoT & Hardware", items: [
    { name: "ESP32", status: "learning" as Status, progress: 61, note: "Sensors, Wi-Fi, MQTT, and embedded C++" },
  ]},
  { domain: "AI & Machine Learning", items: [
    { name: "Machine Learning", status: "planned" as Status, progress: 22, note: "Model fundamentals and practical pipelines" },
  ]},
  { domain: "Data Analytics", items: [
    { name: "SQL Analytics", status: "experienced" as Status, progress: 80, note: "Reporting, joins, and window functions" },
  ]},
  { domain: "Ethical Hacking / Cybersecurity", items: [
    { name: "Network Security", status: "planned" as Status, progress: 20, note: "Threat models, hardening, and assessment" },
  ]},
];

export const devices = [
  { name: "ESP32 DevKit V1", type: "Board", icon: "ESP", specs: "240 MHz · 520 KB SRAM · Wi-Fi/BLE", status: "Active", location: "Home lab", notes: "MQTT sensor gateway" },
  { name: "Raspberry Pi 4", type: "Computer", icon: "PI", specs: "4 GB RAM · Quad-core ARM · Ethernet", status: "Active", location: "Server rack", notes: "Local services and log collector" },
  { name: "DHT22", type: "Sensor", icon: "DHT", specs: "Temperature · Humidity · 1-wire", status: "Active", location: "Workshop", notes: "Calibration checked monthly" },
  { name: "Arduino Uno R3", type: "Board", icon: "UNO", specs: "16 MHz · 2 KB SRAM · ATmega328P", status: "Storage", location: "Parts cabinet", notes: "Baseline prototyping board" },
];

export const software = [
  { name: "Visual Studio Code", category: "Development", use: "Primary source editor", commands: "code . · code --reuse-window", notes: "Remote SSH and Dev Containers" },
  { name: "Docker", category: "DevOps", use: "Containerize and run services", commands: "docker compose up -d · docker ps", notes: "Keep local volumes documented" },
  { name: "Git", category: "Development", use: "Version control", commands: "git status · git log --oneline", notes: "Conventional commits" },
  { name: "Wireshark", category: "Networking", use: "Packet and protocol analysis", commands: "tshark -i eth0 · -Y dns", notes: "Capture only authorized networks" },
  { name: "PostgreSQL", category: "Database", use: "Relational data and analytics", commands: "psql · \\d · EXPLAIN ANALYZE", notes: "Local development database" },
];

export const logs = [
  { date: "2026-11-18", category: "Networking", device: "Home router", issue: "Intermittent Wi-Fi drops", cause: "Channel congestion and weak 2.4 GHz placement", solution: "Moved AP and pinned a less congested channel" },
  { date: "2026-11-10", category: "IoT", device: "ESP32 Gateway", issue: "MQTT messages stopped publishing", cause: "Broker credentials had expired", solution: "Rotated credentials and added reconnect backoff" },
  { date: "2026-10-29", category: "Linux", device: "Raspberry Pi 4", issue: "Service failed after reboot", cause: "Dependency started before storage mount", solution: "Updated systemd unit ordering and mount target" },
];
