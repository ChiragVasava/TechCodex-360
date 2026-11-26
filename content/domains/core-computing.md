# Core Computing Foundations

A reference for the concepts beneath every engineering stack.

## Learning map

- Operating systems: processes, memory, scheduling, filesystems
- Networks: TCP/IP, routing, DNS, and packet analysis
- DBMS: schemas, transactions, indexing, and query plans
- DSA: arrays, graphs, trees, sorting, and dynamic programming

## Folder structure

```text
core-computing/
├── operating-systems/
├── networks/
├── dbms/
└── dsa/
```

## Example: initial connectivity and socket inspection

These commands inspect different layers: ping tests ICMP reachability, traceroute investigates paths, and ss lists sockets. None alone proves an application-level TCP exchange succeeded.

```bash
ping example.com
traceroute example.com
ss -tulpn
```
