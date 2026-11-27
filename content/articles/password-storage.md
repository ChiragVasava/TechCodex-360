# Password storage

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 22613–22746](/research?document=interview&start=22613&end=22746). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Password storage and bcrypt

### Q13.5. Should we store passwords in a database?

We store password verifiers, not plaintext passwords.

Never store passwords like this:

```text
email: chirag@example.com
password: chirag123
```

If an attacker obtains the database, plaintext passwords are immediately exposed.

Instead, use a dedicated password-hashing algorithm.

### Q13.6. What is hashing?

Hashing transforms input data into a fixed-format output using a hash function.

```text
Input:
hello123

Hash:
<hash-output>
```

Important properties:

- Deterministic for a given input and algorithm.
- One-way by design.
- Small input changes generally produce very different outputs.
- A cryptographic hash is not encryption.

### Q13.7. Hashing vs encryption?

| Hashing                        | Encryption                                      |
| ------------------------------ | ----------------------------------------------- |
| Designed to be one-way         | Designed to be reversible with a key            |
| Used for password verification | Used to protect recoverable data                |
| No decryption operation        | Decryption is possible with the appropriate key |
| Example: Argon2id, bcrypt      | Example: AES-GCM                                |

Do not use ordinary fast hashes such as MD5 or SHA-256 alone for password storage. Password hashing needs to be deliberately slow and resistant to large-scale guessing attacks.

### Q13.8. What is bcrypt?

bcrypt is a password-hashing algorithm designed to make password guessing computationally expensive.

It uses a configurable work factor, commonly called the cost factor. Higher cost means more computation per password verification.

```javascript
const bcrypt = require("bcrypt");

const password = "StrongPassword123!";

const hash = await bcrypt.hash(password, 12);

console.log(hash);
```

A bcrypt hash includes information such as:

- Algorithm identifier
- Cost factor
- Salt
- Derived hash

### Q13.9. What is a salt?

A salt is a unique random value used when hashing a password.

Imagine two users have the same password:

```text
User A: password123
User B: password123
```

Without unique salts, their stored hashes could be identical. With unique salts, their resulting password hashes differ.

Benefits:

- Prevents identical passwords from producing identical stored hashes.
- Makes precomputed rainbow-table attacks much less useful.
- Makes each password hash independently expensive to guess.

bcrypt generates and stores the salt information as part of its encoded hash.

### Q13.10. How do you verify a password?

You do not decrypt the hash. Instead, use bcrypt comparison:

```javascript
const isValid = await bcrypt.compare(
  "StrongPassword123!",
  storedHash
);

console.log(isValid);
```

Output:

```text
true
```

If the password is wrong, the result is `false`.

The library extracts the stored salt and cost information and checks the candidate password against the stored hash.

### Q13.11. What are Argon2 and scrypt?

Both are password-hashing alternatives.

- **Argon2id:** A modern password-hashing choice that combines resistance to different attack approaches and supports memory and computation cost parameters.
- **scrypt:** A memory-hard password-hashing algorithm.
- **bcrypt:** A widely used adaptive password-hashing algorithm.

For new systems, Argon2id is often a strong default where available and properly configured. bcrypt remains widely encountered in Node.js applications.

### Q13.12. Why not use SHA-256 for passwords?

SHA-256 is designed to be fast. Attackers can test huge numbers of password guesses quickly using specialized hardware.

Password-hashing algorithms deliberately add computational and, where appropriate, memory cost to slow down guessing.

**Interview answer:** Passwords should be stored using a dedicated password-hashing algorithm such as Argon2id or bcrypt, with unique salts and suitable cost parameters. They should never be stored in plaintext or reversibly encrypted as a substitute for password hashing.

---

> Imported lesson from [Full-stack interview handbook, lines 24889–24896](/research?document=interview&start=24889&end=24896). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Password-derivation follow-up: PBKDF2

PBKDF2 repeatedly applies a pseudorandom function, commonly based on HMAC, to a password and salt to derive key material. The salt and work factor must be retained for verification; the raw password must not be stored. PBKDF2-HMAC-SHA256 is different from applying plain SHA-256 once. Explain the actual library, salt generation, work factor and comparison behavior used in a project rather than borrowing another project's bcrypt answer.

---

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
