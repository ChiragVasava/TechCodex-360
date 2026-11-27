# Rate limiting

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 23600–23672](/research?document=interview&start=23600&end=23672). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Rate limiting and brute-force protection

### Q13.52. What is a brute-force login attack?

A brute-force attack attempts many password combinations until the correct password is discovered.

Example:

```text
admin@example.com / password1
admin@example.com / password2
admin@example.com / password3
...
```

Defenses:

- Rate limiting.
- Strong password hashing.
- MFA.
- Suspicious login detection.
- Account-level throttling.
- Monitoring and alerts.
- Secure recovery processes.

### Q13.53. How do you rate-limit login requests?

Using Redis-backed rate limiting allows multiple API instances to share counters.

Example using the limiter setup from Phase 9:

```javascript
app.use(
  "/api/auth/login",
  loginLimiter,
  loginRouter
);
```

For login protection, consider both IP-based and account-identifier-based limits. Avoid permanent account lockouts that attackers can use to deny service to legitimate users.

### Q13.54. What is account enumeration?

Account enumeration occurs when an attacker discovers whether an email address or username exists.

Bad responses:

```text
Email does not exist
```

versus:

```text
Incorrect password
```

These responses reveal whether the account exists.

Better response:

```text
Invalid email or password
```

For password-reset endpoints, use a similarly generic message such as:

```text
If an account exists, a reset link will be sent.
```

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
