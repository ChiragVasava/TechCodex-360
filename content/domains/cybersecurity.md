# Cybersecurity & Ethical Hacking

Defensive concepts and authorized security assessment references.

```text
cybersecurity/
├── networking/
├── linux/
├── threat-modeling/
├── hardening/
└── labs/
```

## Safe lab checklist

- Obtain explicit authorization
- Isolate lab hosts and networks
- Preserve evidence and timestamps
- Document every test and cleanup action

```bash
nmap -sV --top-ports 1000 192.168.56.0/24
```
