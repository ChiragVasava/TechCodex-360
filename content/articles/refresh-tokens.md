# Access and refresh tokens

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 22876–22948](/research?document=interview&start=22876&end=22948). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Access tokens and refresh tokens

### Q13.19. What is an access token?

An access token is a credential presented to an API to access protected resources.

Typical properties:

- Short lifetime.
- Used frequently.
- Contains identity and limited claims.
- Should be protected from theft.

Example lifetime: 5–15 minutes, depending on security and usability requirements.

### Q13.20. What is a refresh token?

A refresh token is a longer-lived credential used to obtain a new access token without requiring the user to enter their password again.

Example:

```text
Access token: 15 minutes
Refresh token: 7 days
```

These are illustrative lifetimes, not universal rules.

### Q13.21. Why use both tokens?

If an access token is stolen, a short expiration limits its useful lifetime.

A refresh token allows the legitimate user to continue their session without repeatedly logging in.

Typical flow:

1. User logs in.
2. Server issues access and refresh tokens.
3. Client uses access token for API requests.
4. Access token expires.
5. Client sends refresh token to the refresh endpoint.
6. Server validates the refresh token.
7. Server issues a new access token and, preferably, rotates the refresh token.
8. Old refresh token is invalidated.

### Q13.22. What is refresh-token rotation?

Refresh-token rotation means issuing a new refresh token each time an existing refresh token is used successfully.

The old token is invalidated.

Why?

If an attacker steals an old refresh token and attempts to reuse it after the legitimate user has refreshed, the server can detect suspicious reuse and revoke the relevant token family or session.

A robust design stores refresh-token identifiers or hashes server-side and tracks token-family relationships.

### Q13.23. Should refresh tokens be stored in the database?

A common secure design is to store a hash of the refresh token or a server-side token identifier, along with:

- User ID.
- Session/device identifier.
- Expiration.
- Revocation status.
- Token-family information.
- Creation and last-use timestamps.

Do not store raw long-lived bearer credentials in a database if you can store a verifier instead.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
