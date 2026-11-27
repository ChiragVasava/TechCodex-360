# Deployment

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 28247–28334](/research?document=interview&start=28247&end=28334). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## How an Application Reaches Production

### Q16.7. What happens when you deploy a web application?

Imagine a user opens:

```text
https://gramsaarthi-ai.chiragvasava.me
```

A simplified request path:

1

**Browser**

User requests the website.

2

**DNS**

Domain resolves to the relevant public endpoint.

3

**Network / Load balancer / Reverse proxy**

HTTPS traffic reaches the server entry point.

4

**Application server**

Request is routed to the Next.js application.

5

**Backend / Database / External APIs**

Application performs business operations.

6

**Response**

HTML, JSON or other content returns to the browser.

The exact architecture varies by application. In GramSaarthi's documented architecture, Caddy handles reverse proxying and HTTPS in front of the Dockerized Next.js application; its separate infrastructure documentation also describes an Application Load Balancer.


### Q16.8. What is a reverse proxy?

A reverse proxy receives requests from clients and forwards them to backend application servers.

```text
Browser
   |
 HTTPS :443
   |
 Caddy
   |
 HTTP localhost:3000
   |
 Next.js application
```

Benefits:

- TLS termination.
- Routing.
- Request forwarding.
- Centralized entry point.
- Can support load balancing and security controls.

In GramSaarthi, Caddy is used as the reverse proxy and handles automatic HTTPS certificate management.

### Q16.9. Forward proxy vs reverse proxy

| Forward proxy                           | Reverse proxy                              |
| --------------------------------------- | ------------------------------------------ |
| Represents clients                      | Represents servers                         |
| Client traffic goes through it          | Server traffic comes through it            |
| Can control outbound requests           | Can route incoming requests                |
| Often used for outbound access controls | Often used for TLS termination and routing |

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
