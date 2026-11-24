# Software, Web & App Development

Practical notes for building maintainable applications.

## Starter areas

- Language fundamentals and type systems
- APIs, authentication, and data contracts
- Framework patterns and component architecture
- Testing, release workflows, and observability

```text
software-web-app/
├── software/
├── web/
├── mobile/
└── projects/
```

```typescript
type ServiceStatus = "healthy" | "degraded" | "down";

async function healthcheck(url: string): Promise<ServiceStatus> {
  const response = await fetch(url);
  return response.ok ? "healthy" : "degraded";
}
```
