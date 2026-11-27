# Hosting and process management

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 30140–30269](/research?document=interview&start=30140&end=30269). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Vercel, Render, Caddy and PM2

### Q16.68. What is Vercel?

Vercel is a platform for deploying frontend and supported full-stack applications.

Common capabilities:

- Git-based deployments.
- Preview deployments.
- Production deployments.
- Custom domains.
- HTTPS.
- Environment variables.
- Serverless and edge capabilities, depending on the application.

Your project experience includes deploying frontend applications using Vercel.

### Q16.69. What is Render?

Render provides managed hosting for web services, static sites, background workers, databases and related application services.

Typical workflow:

```text
GitHub repository
       |
       v
Render deployment
       |
       v
Build command
       |
       v
Start command
       |
       v
Live application
```

### Q16.70. What is Caddy?

Caddy is a web server and reverse proxy.

A simple Caddyfile:

```caddyfile
example.com {
    reverse_proxy localhost:3000
}
```

This configures Caddy to reverse-proxy requests for the domain to the application listening locally on port 3000.

Caddy can automatically obtain and renew HTTPS certificates when domain DNS, public connectivity and the required certificate validation conditions are satisfied.

In your GramSaarthi architecture, Caddy is used for reverse proxying and automatic HTTPS.

### Q16.71. What is PM2?

PM2 is a process manager commonly used for Node.js applications.

It can:

- Start applications.
- Restart crashed processes.
- Manage multiple processes.
- Collect application logs.
- Support startup configuration.
- Provide monitoring information.

Install:

```bash
npm install -g pm2
```

If your Express backend's `package.json` contains a `start` script:

```json
{
  "scripts": {
    "start": "node server.js"
  }
}
```

Start it with PM2:

```bash
pm2 start npm --name uninest-api -- start
```

Check status:

```bash
pm2 status
```

View logs:

```bash
pm2 logs uninest-api
```

Restart:

```bash
pm2 restart uninest-api
```

Save the process list:

```bash
pm2 save
```

Generate startup instructions:

```bash
pm2 startup
```

Follow the command printed by PM2 to configure startup on boot.

Project connection: Your UniNest deployment documentation describes running the Express backend on Ubuntu EC2 using PM2.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
