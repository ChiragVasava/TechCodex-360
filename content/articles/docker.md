# Docker

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 28646–29097](/research?document=interview&start=28646&end=29097). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Docker and Containerization

### Q16.18. What is Docker?

Docker is a platform for building, distributing and running applications inside containers.

A container packages an application with its dependencies and configuration needed to run it.

Without containers:

```text
Developer machine:
  Node 22
  Package versions A
  Configuration X

Server:
  Node 20
  Package versions B
  Configuration Y

Possible environment mismatch
```

With Docker:

```text
Application
    +
Runtime
    +
Dependencies
    +
Configuration
    ↓
Docker image
    ↓
Container
    ↓
Consistent execution environment
```

### Q16.19. Docker image vs container

| Docker image                | Docker container                  |
| --------------------------- | --------------------------------- |
| Read-only packaged template | Running or stopped instance       |
| Built from Dockerfile       | Created from an image             |
| Can be shared               | Has its own writable layer        |
| Can create many containers  | Represents one container instance |

Think of a class and object:

- Image = class/template.
- Container = running instance.

[Source image reference: Docker Image vs Container — Explained in Simple Terms | by Moinul Hossain | Feb, 2026 | Medium](https://images.openai.com/static-rsc-4/1oo3nIv-RbVLwtK55Yl4_7fuEwXSAZCuZwYaJyyXqUKvQ7pBBQcXLCDAy49e2j-a8G21TD62CMPpJHJNuSzFOP30lm_ID080Nk4vacLRkjgZGgDjhdslShXTG8FPr_yu3k6EY7zk6RCP8ruRVq4BUqrXs3ZAznTl8llC3ImACas?purpose=inline)

[medium.com](https://medium.com/%40moinulhossainmahim/docker-image-vs-container-explained-in-simple-terms-a69b4f05eb52?utm_source=chatgpt.com)

### Q16.20. What is a Dockerfile?

A Dockerfile contains instructions for building a Docker image.

We'll create a small FastAPI service.

Project:

```text
fastapi-docker/
├── main.py
├── requirements.txt
└── Dockerfile
```

`main.py`:

```python
from fastapi import FastAPIapp = FastAPI()@app.get("/")def home():    return {"message": "Hello from Docker"}@app.get("/health")def health():    return {"status": "ok"}
```

`requirements.txt`:

```text
fastapi
uvicorn[standard]
```

`Dockerfile`:

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Understand every instruction:

| Instruction | Meaning                               |
| ----------- | ------------------------------------- |
| `FROM`      | Base image                            |
| `WORKDIR`   | Working directory                     |
| `COPY`      | Copy files into image                 |
| `RUN`       | Execute a build-time command          |
| `EXPOSE`    | Document intended container port      |
| `CMD`       | Default command when container starts |

`EXPOSE` does not publish the port to the host by itself.

### Q16.21. How do you build and run a Docker container?

Build:

```bash
docker build -t fastapi-demo .
```

List images:

```bash
docker images
```

Run:

```bash
docker run -d \
  --name fastapi-app \
  -p 8000:8000 \
  fastapi-demo
```

Meaning:

```text
Host port 8000
      |
      v
Container port 8000
      |
      v
FastAPI application
```

Check running containers:

```bash
docker ps
```

Test:

```bash
curl http://localhost:8000/health
```

Expected response:

```json
{"status":"ok"}
```

View logs:

```bash
docker logs fastapi-app
```

Follow logs:

```bash
docker logs -f fastapi-app
```

Stop:

```bash
docker stop fastapi-app
```

Remove:

```bash
docker rm fastapi-app
```

Remove image:

```bash
docker rmi fastapi-demo
```

### Q16.22. What is Docker port mapping?

The `-p` option maps a host port to a container port.

```bash
docker run -p 8080:8000 fastapi-demo
```

```text
Host machine:       8080
                       |
                       v
Container:          8000
                       |
                       v
FastAPI
```

You access:

```text
http://localhost:8080
```

This is different from the port on which the application listens inside the container.

### Q16.23. What are Docker layers and build caching?

Docker images are built from layers.

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .
```

If only `main.py` changes, Docker may reuse the dependency installation layer.

This makes builds faster.

That is why copying dependency manifests before application source code is a common optimization.

### Q16.24. What is a multi-stage Docker build?

A multi-stage build uses multiple build stages so that build-time dependencies do not need to be included in the final image.

Example for a Next.js application:

```dockerfile
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/.next ./.next

COPY --from=builder /app/public ./public

USER node

EXPOSE 3000

CMD ["npm", "start"]
```

The exact build must match the Next.js application's dependencies and deployment requirements; some Next.js deployments need additional runtime files or standalone output.

Benefits:

- Smaller runtime image.
- Less unnecessary build tooling.
- Smaller attack surface.
- Cleaner production packaging.

Your GramSaarthi documentation describes a multi-stage Docker build, a non-root runtime user and an image of approximately 180 MB.

### Q16.25. What is a Docker volume?

A volume stores data independently of a container's writable filesystem.

Create a volume:

```bash
docker volume create app-data
```

Run a PostgreSQL container:

```bash
docker run -d \
  --name database \
  -v app-data:/var/lib/postgresql/data \
  postgres
```

If the container is removed and recreated using the same volume, database data can persist.

Without persistent storage, data stored only in the container's writable layer can be lost when the container is removed.

### Q16.26. What is Docker networking?

Docker networking enables containers to communicate with one another.

```text
Docker network: app-network

Next.js container
        |
        | HTTP
        |
FastAPI container
        |
        | PostgreSQL protocol
        |
PostgreSQL container
```

Create a network:

```bash
docker network create app-network
```

Connect a container:

```bash
docker run -d \
  --name backend \
  --network app-network \
  fastapi-demo
```

Containers on the same user-defined bridge network can generally communicate using container names as DNS hostnames.

### Q16.27. What is Docker Compose?

Docker Compose lets you define and run multiple containers using a YAML file.

Example `compose.yaml`:

```yaml
services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      PORT: "8000"
    depends_on:
      - redis

  redis:
    image: redis:7-alpine
```

Start:

```bash
docker compose up -d --build
```

Check:

```bash
docker compose ps
```

Logs:

```bash
docker compose logs -f
```

Stop:

```bash
docker compose down
```

`depends_on` controls startup ordering, but it does not automatically guarantee that a dependency is ready to accept connections. Health checks and application retry logic may still be needed.

### Q16.28. Docker vs virtual machine

| Docker container                 | Virtual machine                                   |
| -------------------------------- | ------------------------------------------------- |
| Shares host kernel               | Has its own guest OS kernel                       |
| Usually lighter                  | Usually heavier                                   |
| Faster startup in many workloads | Typically slower startup                          |
| Isolates processes               | Provides a separate virtual machine environment   |
| Good for application packaging   | Useful for full OS isolation and legacy workloads |

[Source image reference: 10 Things to Know About Docker\<!-- --> | Spantree](https://images.openai.com/static-rsc-4/wWD0FUKj2dX3dPPKkHNCzWMYYVAPb0kAw8gWHDBZorFisARVJiYMO1GKNuUKLqPJoOw-a1goCq3D5GVEnSS1YNxDb2z_mIB1EnMtOmo4R2Mou9Uqlvx9OyfCHa752c7DWTOm_gu6YjUjxEy4QZ6sWhX1B7KcRsVfDxaykVluR-k?purpose=inline)

[spantree.net](https://spantree.net/blog/2015/04/29/10-things-to-know-about-docker.html?utm_source=chatgpt.com)

Containers still need security boundaries and proper configuration. They should not be assumed to provide the same isolation properties as a separate physical machine.

### Q16.29. Important Docker commands

```bash
docker images
docker ps
docker ps -a

docker build -t app .
docker run -d -p 3000:3000 app

docker logs -f container-name
docker exec -it container-name sh

docker stop container-name
docker start container-name
docker restart container-name

docker rm container-name
docker rmi image-name

docker system df
docker image prune -f
docker builder prune
```

Production caution: Before pruning images, volumes or build cache, verify what resources are in use. Avoid destructive cleanup commands on production servers without understanding their impact.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
