# Cloud & DevOps

Notes for reliable infrastructure and repeatable delivery.

```text
cloud-devops/
├── linux/
├── docker/
├── ci-cd/
├── cloud/
└── monitoring/
```

## Container workflow

```bash
docker build -t my-service .
docker compose up -d
docker compose logs -f
```

Use infrastructure as code, least-privilege credentials, and health checks for every deployment.
