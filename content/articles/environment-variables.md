# Environment variables

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 30470–30504](/research?document=interview&start=30470&end=30504). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Environment Variables and Configuration


**Q16.73. How do you use **`.env`** in Node.js?**

```bash
npm install dotenv
```

`.env`:

```dotenv
PORT=3000
JWT_SECRET=replace_with_a_long_random_secret
NODE_ENV=development
```

Load it early:

```javascript
import "dotenv/config";

const PORT = process.env.PORT || 3000;
```

Never commit real `.env` files. Use `.gitignore`, provide a secret-free `.env.example`, and use protected configuration or a secret manager in production.

**Q16.74. Difference between development and production environments?**

Answer: Development environments are designed for local coding, debugging, and testing. Production environments serve real users and require controlled deployments, managed secrets, operational logging, hardened configuration, and careful handling of errors. Never expose stack traces or confidential internal errors to production clients.

---

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
