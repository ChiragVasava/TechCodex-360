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

