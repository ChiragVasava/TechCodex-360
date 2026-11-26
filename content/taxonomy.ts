/** A coverage map: listing a topic does not imply an article has been authored. */
export type Domain = { id: string; title: string; description: string; disciplines: { title: string; topics: string[] }[]; related: string[] };
const branch = (title: string, topics: string) => ({ title, topics: topics.split("|") });
export const taxonomy: Domain[] = [
  { id: "core-computing", title: "Core Computing Foundations", description: "The models behind programs, machines, and information.", related: ["networking", "hardware-electronics"], disciplines: [
    branch("Architecture & operating systems", "Computer Science|Computer Engineering|Computer Architecture|Digital Logic Design|Operating Systems|Processes|Threads|Memory Management|CPU Architecture|GPU Architecture|Computer Organization|File Systems|Virtualization|Concurrency|Parallelism|Hardware Threads|Scheduling"),
    branch("Algorithms & language theory", "Data Structures|Algorithms|Programming Fundamentals|Compiler Design|Programming Language Theory|Automata Theory|Theory of Computation|Garbage Collection|JIT Compilation"),
    branch("Mathematics & information", "Discrete Mathematics|Linear Algebra|Probability and Statistics|Information Theory|Cryptography Fundamentals|Distributed Systems|Database Fundamentals|Serialization") ] },
  { id: "software-engineering", title: "Software Engineering & Development", description: "Turn requirements into testable and maintainable systems.", related: ["web-development", "debugging-quality", "devops"], disciplines: [
    branch("Engineering practice", "Software Engineering|SDLC|Requirements Engineering|Code Review|Version Control|Git|GitHub|Documentation Engineering|Technical Debt|Software Maintenance|Refactoring|Release Engineering"),
    branch("Architecture & design", "Software Architecture|Design Patterns|Clean Code|SOLID Principles|Domain-Driven Design|API Design|Performance Engineering"),
    branch("Delivery systems", "Test-Driven Development|Behavior-Driven Development|Build Systems|Package Management|Dependency Management|CI/CD") ] },
  { id: "web-development", title: "Web Development", description: "Connect browsers, services, and data into accessible applications.", related: ["networking", "software-engineering", "cybersecurity"], disciplines: [
    branch("Frontend engineering", "HTML|CSS|JavaScript|TypeScript|DOM|CSSOM|Browser APIs|Web APIs|Accessibility|Responsive Design|Browser Rendering|Browser Internals|React|Vue|Angular|Next.js|State Management|Frontend Testing|Web Performance|Web Components|ECMAScript|JavaScript Engine|V8|Execution Context|Call Stack|Main Thread|Event Loop|Task Queue|Microtask Queue|Web Workers"),
    branch("Backend engineering", "Node.js|Worker Threads|libuv|HTTP|REST|GraphQL|WebSockets|Authentication|Authorization|Input Validation|Sessions|Databases|Caching|Queues|Background Jobs|Server Architecture|API Gateways|Rate Limiting|Backend Testing|Application Security|Express.js|Middleware"),
    branch("Full-stack engineering", "Full-Stack Engineering|API Integration|Deployment|Database Migrations|Server-Side Rendering|Client-Side Rendering") ] },
  { id: "mobile-development", title: "Mobile & Application Development", description: "Build around device capabilities and platform constraints.", related: ["web-development", "software-engineering"], disciplines: [
    branch("Mobile platforms", "Android Development|iOS Development|Kotlin|Swift|Mobile UI|Mobile Architecture|Mobile Databases|Push Notifications|App Security"),
    branch("Cross-platform & desktop", "Cross-platform Development|Flutter|React Native|Desktop Applications|Electron|.NET Desktop|Native Application Development") ] },
  { id: "cloud-computing", title: "Cloud Computing", description: "Balance availability, security, capacity, and cost.", related: ["networking", "devops", "cybersecurity"], disciplines: [
    branch("Service & deployment models", "Cloud Fundamentals|IaaS|PaaS|SaaS|Public Cloud|Private Cloud|Hybrid Cloud|Multi-cloud"),
    branch("Platforms & infrastructure", "AWS|Microsoft Azure|Google Cloud Platform|Compute|Storage|Cloud Networking|IAM|Serverless|Cloud Databases|Cloud Security|Cost Optimization|Infrastructure Architecture") ] },
  { id: "devops", title: "DevOps, Platform & Reliability", description: "Make delivery repeatable and production behavior observable.", related: ["cloud-computing", "software-engineering", "debugging-quality"], disciplines: [
    branch("Automation & platforms", "Linux Administration|Shell Scripting|CI/CD|GitHub Actions|Jenkins|Docker|Containers|Kubernetes|Infrastructure as Code|Terraform|Ansible|Configuration Management|Deployment Strategies|Platform Engineering"),
    branch("Reliability & operations", "Observability|Logging|Metrics|Distributed Tracing|Monitoring|Incident Management|Site Reliability Engineering|Capacity Planning|Disaster Recovery|Service-Level Objectives") ] },
  { id: "ai-ml", title: "AI & Machine Learning", description: "Learn from data, evaluate uncertainty, and build responsible models.", related: ["data-analytics", "core-computing", "cybersecurity"], disciplines: [
    branch("Learning foundations", "Artificial Intelligence|Machine Learning|Deep Learning|Neural Networks|Natural Language Processing|Computer Vision|Reinforcement Learning|Model Training|Model Evaluation"),
    branch("Generative systems", "Generative AI|Large Language Models|Transformers|Embeddings|Vector Databases|Vector Search|RAG|AI Agents|Fine-tuning"),
    branch("Applied ML engineering", "Model Deployment|MLOps|Responsible AI|AI Security|Recommendation Systems") ] },
  { id: "data-analytics", title: "Data & Analytics", description: "Collect, transform, and interpret data with traceable assumptions.", related: ["ai-ml", "software-engineering"], disciplines: [
    branch("Analytics & experimentation", "Data Analytics|Data Science|Business Intelligence|Statistics|Data Visualization|SQL|Predictive Analytics|Experimentation|A/B Testing"),
    branch("Data infrastructure", "Data Engineering|Data Warehousing|Data Lakes|ETL|ELT|Data Pipelines|Apache Spark|Apache Kafka|Stream Processing|Data Modeling|Data Governance|Data Quality") ] },
  { id: "cybersecurity", title: "Cybersecurity & Ethical Hacking", description: "Build defenses and validate controls in authorized environments.", related: ["networking", "iot-embedded", "hardware-electronics"], disciplines: [
    branch("Defensive foundations", "Cybersecurity Fundamentals|Network Security|Application Security|Web Security|API Security|Cloud Security|Endpoint Security|Identity and Access Management|Cryptography|Threat Modeling|Secure Development|Security Governance|Privacy Engineering"),
    branch("Assessment & response", "Penetration Testing|Vulnerability Assessment|Digital Forensics|Malware Analysis|Reverse Engineering|Incident Response|Security Operations|SIEM|SOC|Wireless Security"),
    branch("Device & firmware security", "Hardware Security|IoT Security|Firmware Security|Embedded Security|USB Security|BadUSB|HID Injection|USB Protocol Analysis") ] },
  { id: "iot-embedded", title: "IoT & Embedded Systems", description: "Connect software to physical signals and constrained devices.", related: ["hardware-electronics", "networking", "cybersecurity"], disciplines: [
    branch("Devices & firmware", "Embedded Systems|Microcontroller|Microprocessor|Firmware|Embedded C|Embedded C++|MicroPython|Arduino|ESP32|Raspberry Pi|Raspberry Pi Pico|Device Drivers|Embedded Linux"),
    branch("Interfaces & timing", "GPIO|Sensors|Actuators|ADC|DAC|PWM|Interrupts|Timers|UART|SPI|I²C|JTAG|SWD|USB|RTOS|FreeRTOS"),
    branch("Connected devices", "IoT Protocols|MQTT|CoAP|Zigbee|LoRaWAN|Bluetooth Low Energy|Device Management|OTA Updates|IoT Security") ] },
  { id: "hardware-electronics", title: "Hardware & Electronics", description: "Study circuits, silicon, physical interfaces, and measurement.", related: ["core-computing", "iot-embedded", "debugging-quality"], disciplines: [
    branch("Circuits & silicon", "Electrical Engineering Fundamentals|Electronics|Analog Electronics|Digital Electronics|Circuit Design|PCB Design|FPGA|ASIC|VLSI|Semiconductor Fundamentals|Logic Gates|Transistors|Power Electronics"),
    branch("Signals & measurement", "Signal Processing|Digital Signal Processing|RF Engineering|Antenna Design|Communication Systems|Hardware Debugging|Logic Analyzers|Oscilloscopes|Hardware Testing|Hardware Reverse Engineering"),
    branch("USB architecture", "USB|USB Host|USB Device|USB Controller|USB Enumeration|USB Descriptor|USB Endpoint|USB HID|HID Report|USB Mass Storage|Peripheral Devices|Serial Communication|Device Driver|Flipper Zero|USB Rubber Ducky|Bash Bunny") ] },
  { id: "networking", title: "Networking & Telecommunications", description: "Follow data from local links to routed application protocols.", related: ["core-computing", "cloud-computing", "cybersecurity"], disciplines: [
    branch("Network foundations", "Computer Networks|OSI Model|TCP/IP Model|Ethernet|MAC Address|IP Address|Subnetting|DNS|DHCP|ARP|TCP|UDP|HTTP|HTTPS|TLS|Ports|Sockets"),
    branch("Infrastructure & operations", "Routing|Switching|NAT|VLAN|VPN|Firewalls|Network Automation|Network Monitoring|Software-Defined Networking|Network Function Virtualization|Network Security|Network Troubleshooting"),
    branch("Wireless & telecom", "Wireless Networks|Wi-Fi|Bluetooth|Cellular Networks|4G|5G") ] },
  { id: "debugging-quality", title: "Debugging, Testing & Quality", description: "Observe failures, test hypotheses, and establish behavioral evidence.", related: ["software-engineering", "hardware-electronics", "devops"], disciplines: [
    branch("Investigation & profiling", "Debugging|Breakpoints|Call Stack|Stack Traces|Memory Debugging|Performance Profiling|CPU Profiling|Memory Profiling|Network Debugging|Browser DevTools|Log Analysis|Distributed Tracing|Root Cause Analysis"),
    branch("Testing & assurance", "Testing|Unit Testing|Integration Testing|End-to-End Testing|Regression Testing|Load Testing|Stress Testing|Security Testing|Fuzz Testing|Static Analysis|Dynamic Analysis|QA Automation|Test Strategy|Reliability Testing|Hardware Debugging") ] },
  { id: "additional-engineering", title: "Specialized & Interdisciplinary Engineering", description: "Connect computing to science, physical systems, design, and leadership.", related: ["core-computing", "hardware-electronics", "software-engineering"], disciplines: [
    branch("Interactive & autonomous systems", "Game Development|Graphics Programming|Computer Graphics|AR|VR|Robotics|Automation Engineering|Control Systems|Mechatronics|Autonomous Systems"),
    branch("Scientific & emerging computing", "Blockchain|Distributed Ledger Technology|Quantum Computing|High Performance Computing|Scientific Computing|Bioinformatics|Computational Engineering|Research Engineering"),
    branch("People & systems", "Human-Computer Interaction|UI/UX Engineering|Accessibility Engineering|Technical Writing|Engineering Management|Product Management|Systems Engineering") ] }
];
export const legacyDomainMap: Record<string, string[]> = { "software-web-app": ["software-engineering", "web-development", "mobile-development"], "cloud-devops": ["cloud-computing", "devops"], "iot-hardware": ["iot-embedded", "hardware-electronics"], "ai-ml-data": ["ai-ml", "data-analytics"] };
