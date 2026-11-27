# Input validation

Input validation checks whether incoming data satisfies the structural and business constraints required at a system boundary before the system relies on it.

## Why a boundary needs a contract

A browser, file, API client or hardware device can send unexpected data. A type annotation in application code does not prove that runtime input has that type. Validation makes assumptions explicit and rejects values the receiving operation cannot safely interpret.

Client-side validation improves feedback. Server-side validation enforces the contract against clients that bypass the UI.

## Structure and meaning

**Syntactic validation** checks representation: required fields, types, lengths and supported formats. **Semantic validation** checks meaning in context: an end date follows a start date, a requested quantity is within policy, or an inventory reference exists.

A number can be syntactically valid while violating business rules. An identifier can be valid while referring to a record the caller is not allowed to access; that second question is [authorization](/knowledge/authorization).

## A bounded TypeScript example

```typescript
type NewNote = { title: string; body: string };

function parseNote(value: unknown): NewNote {
  if (typeof value !== "object" || value === null ||
      Array.isArray(value)) {
    throw new Error("Expected an object");
  }

  const input = value as Record<string, unknown>;
  if (Object.keys(input).some(key =>
      key !== "title" && key !== "body")) {
    throw new Error("Unexpected field");
  }

  if (typeof input.title !== "string" ||
      typeof input.body !== "string") {
    throw new Error("Title and body must be text");
  }

  const title = input.title.trim();
  if (title.length < 1 || title.length > 120 ||
      input.body.length > 10000) {
    throw new Error("Note exceeds allowed text limits");
  }
  return { title, body: input.body };
}
```

This example enforces a small contract and fails closed. It does not implement persistence, access control or safe HTML rendering. The limits use JavaScript string length, which counts UTF-16 code units rather than user-perceived characters; choose the measurement appropriate to your actual requirement.

## Validation is one control among several

Validation does not replace parameterized database queries, contextual output encoding, authentication, authorization or resource limits. A string can pass a title-length rule and still need safe handling when placed in HTML.

Define normalization deliberately. Trimming a title may be acceptable; silently altering a password or opaque identifier can change its meaning. Validate after the interpretation step relevant to the contract and avoid ambiguous double decoding.

```text
untrusted bytes → size limit → parse → validate structure
                                          ↓
                                authorize operation
                                          ↓
                               apply business rules
                                          ↓
                                  persist safely
```

Some systems must authenticate before costly parsing or perform several checks at different stages. This diagram shows responsibilities rather than one universally mandatory order.

## Failure handling and testing

Return actionable errors without exposing internal stack traces or secrets. Bound request size before expensive parsing. Log enough context to diagnose repeated failures, but do not log credentials or full sensitive payloads.

Test missing fields, wrong types, boundary lengths, extra properties and valid-but-unauthorized identifiers. Include valid input to show that the contract remains usable.

## Learning progression

Start with [serialization](/knowledge/serialization) and API contracts. Then trace one value from an [HTTP](/knowledge/http) request to storage and display. Assessment: name the trust boundary and explain which control addresses each risk. Backend, application-security and QA engineers use this reasoning to prevent both corruption and access-control mistakes.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) — OWASP.
- [Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) — OWASP.

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 20719–20753](/research?document=interview&start=20719&end=20753). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Request Validation and Error Handling

**Q11.47. Why is request validation necessary?**

Answer: Validation ensures incoming data has the expected structure, types, and values before business logic processes it. It helps prevent invalid records, unexpected errors, and some security problems. Never assume frontend validation alone is sufficient.

**Q11.48. What is schema validation?**

Answer: Schema validation checks data against a defined structure and rules. A library such as Zod can validate fields, required values, string lengths, email formats, and allowed values.

```javascript
import { z } from "zod";

const studentSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  course: z.enum(["CSE", "IT", "EC"])
});
```

**Q11.49. What is centralized error handling?**

Answer: Centralized error handling uses a common error-handling middleware to format and return errors consistently. This prevents each route from implementing a different error response and helps avoid exposing internal details.

**Q11.50. Which HTTP status codes should be used for common errors?**

Answer: Use `400` for malformed or invalid requests, `401` for missing or invalid authentication, `403` for insufficient permission, `404` for a missing resource, `409` for conflicts, and `500` for unexpected server failures. Consistent error responses make frontend handling more reliable.

### Security integration

Authentication, JWT verification, cookies and CORS enforcement are taught in [Security](/research?document=interview&start=22528). Here, identify where validation, authentication and authorization middleware sit in the Express request lifecycle.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
