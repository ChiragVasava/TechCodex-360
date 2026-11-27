# Password reset and email verification

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 23673–23753](/research?document=interview&start=23673&end=23753). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Password reset and email verification

### Q13.55. How does password reset work?

A secure password-reset workflow:

1. User submits their email.
2. Backend returns a generic response.
3. If the account exists, generate a cryptographically random token.
4. Store a hash of the token and an expiration time.
5. Send a reset link by email.
6. User opens the link.
7. Backend verifies the token and expiration.
8. User sets a new password.
9. Backend hashes the new password.
10. Backend invalidates the reset token.
11. Backend revokes existing sessions or refresh tokens as appropriate.

### Q13.56. Why store a hash of the reset token?

The reset token is a bearer credential. Anyone possessing it may be able to reset the password.

If the database is compromised, storing only a hash makes it harder for an attacker to use the token directly.

Generate the token using Node's cryptographic module:

```javascript
import crypto from "crypto";

const resetToken = crypto.randomBytes(32).toString("hex");

const resetTokenHash = crypto
  .createHash("sha256")
  .update(resetToken)
  .digest("hex");
```

Store `resetTokenHash` in the database.

Send `resetToken` to the user's email.

When the user submits it, hash the submitted token and compare it to the stored hash.

### Q13.57. What is email verification?

Email verification confirms that a user can access the email address they registered with.

A common workflow:

1. User registers.
2. Backend generates a random verification token.
3. Token hash and expiration are stored.
4. Verification link is emailed.
5. User opens the link.
6. Backend validates and consumes the token.
7. Account is marked verified.

A verification token should be:

- Random and unpredictable.
- Single-use.
- Short-lived.
- Stored safely.
- Bound to the intended account.

### Q13.58. What is MFA?

Multi-factor authentication adds an additional factor to login.

Examples:

- Password + authenticator-app TOTP.
- Password + hardware security key.
- Passkey-based authentication.

TOTP means Time-Based One-Time Password. It generates short-lived codes based on a shared secret and time interval.

For stronger phishing resistance, WebAuthn/passkeys and hardware security keys are important options.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
