# Authorization

Authorization determines whether a subject may perform a requested action on a resource under the current policy and context.

## Subject, action and resource

[Authentication](/knowledge/authentication) may identify a user. Authorization then asks whether that user can read a particular note, update an inventory record or administer settings.

Policies can use roles, attributes, relationships and resource ownership. A role name alone is not a complete universal access model.

## A record-level example

A signed-in user requests `/notes/123`. The server must check whether note 123 belongs to the user or is shared with them. Hiding the link in the UI does not protect the route. A syntactically valid identifier is not evidence of access.

Enforce checks at the server-side operation boundary and apply least privilege. Deny by default when policy is missing or uncertain.

## Common failures

Checking only “is logged in,” trusting a client-supplied owner ID or protecting list pages but not direct record routes can expose data. Import/export and background-job paths also need policy enforcement.

Caching a decision can become unsafe when ownership or permissions change; define invalidation and re-check critical operations.

## Practice

Create an access matrix for owner, shared reader and unrelated user. Test read, edit, delete and export separately. Assessment: demonstrate that changing an identifier does not bypass the policy. Continue with [testing](/knowledge/testing), [input validation](/knowledge/input-validation) and audit-oriented [observability](/knowledge/observability).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) — OWASP.

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 23171–23300](/research?document=interview&start=23171&end=23300). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Role-based access control (RBAC)

### Q13.38. What is RBAC?

Role-Based Access Control is an authorization model where permissions are assigned to roles, and users are assigned roles.

Example:

```text
STUDENT
  ├── VIEW_OWN_PROFILE
  ├── APPLY_FOR_DRIVE
  └── VIEW_OWN_APPLICATIONS

COMPANY
  ├── CREATE_DRIVE
  ├── UPDATE_OWN_DRIVE
  └── VIEW_APPLICATIONS_FOR_OWN_DRIVES

ADMIN
  ├── MANAGE_USERS
  ├── MANAGE_COMPANIES
  └── MANAGE_PLATFORM
```

Instead of hardcoding permissions independently for every user, you associate permissions with roles.

### Q13.39. How do you implement RBAC in Express?

First, authentication middleware identifies the user. Then authorization middleware checks the role.

```typescript
import { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

function allowRoles(...roles: string[]) {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required"
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access forbidden"
      });
    }

    next();
  };
}
```

Use:

```javascript
app.post(
  "/api/drives",
  authenticate,
  allowRoles("COMPANY", "ADMIN"),
  createDrive
);
```

This allows company users and admins to create drives.

### Q13.40. Difference between 401 and 403?

| HTTP status      | Meaning                                     |
| ---------------- | ------------------------------------------- |
| 401 Unauthorized | Authentication is missing or invalid        |
| 403 Forbidden    | Request is understood, but access is denied |

Example:

- No valid token: `401`.
- Valid student token attempting an admin-only operation: `403`.

### Q13.41. What is object-level authorization?

RBAC alone is insufficient.

Suppose a student has a valid role of `STUDENT`. Can the student access any student profile by changing the URL?

```http
GET /api/students/102
```

No. The server must check whether the authenticated user is permitted to access that particular resource.

Example:

```javascript
const student = await prisma.student.findUnique({
  where: { id: requestedStudentId }
});

if (!student) {
  return res.status(404).json({
    message: "Student not found"
  });
}

if (
  req.user.role === "STUDENT" &&
  student.userId !== req.user.id
) {
  return res.status(403).json({
    message: "You cannot access another student's profile"
  });
}
```

This prevents insecure direct object reference (IDOR) vulnerabilities.

**Interview-ready answer:** Authorization must validate not only the user's role but also their relationship to the specific resource being accessed.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
