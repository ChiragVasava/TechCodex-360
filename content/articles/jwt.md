# JSON Web Tokens

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 22747–22875](/research?document=interview&start=22747&end=22875). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## JWT authentication

### Q13.13. What is JWT?

JWT stands for **JSON Web Token**.

It is a compact token format used to transmit claims between parties. In web applications, JWTs are commonly used to represent authenticated identity and related claims.

A JWT has three sections:

```text
HEADER.PAYLOAD.SIGNATURE
```

### Q13.14. Explain the three parts of JWT.

**1. Header**

Contains metadata about the token.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- `alg`: Signing algorithm.
- `typ`: Token type.

**2. Payload**

Contains claims.

```json
{
  "sub": "101",
  "email": "chirag@example.com",
  "role": "STUDENT",
  "iat": 1790000000,
  "exp": 1790000900
}
```

Common claims:

| Claim | Meaning                 |
| ----- | ----------------------- |
| `sub` | Subject, often user ID  |
| `iss` | Issuer                  |
| `aud` | Audience                |
| `iat` | Issued at               |
| `exp` | Expiration              |
| `nbf` | Not valid before        |
| `jti` | Unique token identifier |

**3. Signature**

The signature is used to verify that the token was signed by a party holding the appropriate signing key and that the signed content has not been altered.

With HS256, the signing process is conceptually:

```text
HMAC-SHA256(
  secret,
  base64url(header) + "." + base64url(payload)
)
```

The signature provides integrity and authenticity under the security assumptions of the algorithm and key management.

### Q13.15. Is JWT encrypted?

No. A typical signed JWT is encoded, not encrypted.

Do not put passwords, secret keys, or sensitive personal information in a normal JWT payload. Anyone who obtains the token can decode its header and payload, even though they cannot validly alter the signed content without the signing key.

### Q13.16. What is the difference between JWT decoding and verification?

- **Decoding:** Reads the token's contents without proving authenticity.
- **Verification:** Validates the signature and configured claims such as expiration, issuer, audience, and permitted algorithm.

Never use decoded-but-unverified token contents to authorize an operation.

### Q13.17. How do you sign and verify a JWT?

A signing example:

```typescript
const token = jwt.sign(
  {
    role: user.role
  },
  process.env.JWT_ACCESS_SECRET!,
  {
    subject: user.id,
    expiresIn: "15m",
    issuer: "recruitment-api",
    audience: "recruitment-client"
  }
);
```

Verify:

```typescript
const decoded = jwt.verify(
  token,
  process.env.JWT_ACCESS_SECRET!,
  {
    issuer: "recruitment-api",
    audience: "recruitment-client",
    algorithms: ["HS256"]
  }
);
```

The allowed algorithm should match the algorithm used to sign the token. Do not blindly trust an algorithm selected from an untrusted token header.

### Q13.18. What is a stateless authentication system?

A stateless authentication system does not need to look up a server-side session for every authenticated request.

For example, a signed JWT can carry the user ID and expiration. The server verifies the token cryptographically.

However, stateless authentication does not mean there is no server-side state anywhere. Applications may still maintain refresh-token records, revocation lists, account status, and authorization data.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
