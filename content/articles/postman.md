# Postman

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 26402–26431](/research?document=interview&start=26402&end=26431). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Postman — Repeatable API Checks

### Collections, Environments and Request Chains

Organize requests by feature. Use an environment variable for the base URL so the same collection targets local and test environments. Keep credentials out of exported collections and shared example values.

Build a request chain: create a disposable record, capture its identifier, fetch it, update it and delete it. Use unique test data so reruns do not depend on yesterday's state. Confirm both response structure and business behavior; a 200 status alone is insufficient.

### Pre-request and Post-response Scripts

Pre-request scripts prepare values before sending a request. Post-response scripts validate the result. For a create endpoint returning a numeric identifier:

```javascript
pm.test("Creates a student", function () {
  pm.response.to.have.status(201);
  const body = pm.response.json();
  pm.expect(body.id).to.be.a("number");
  pm.expect(body.name).to.be.a("string");
  pm.collectionVariables.set("studentId", String(body.id));
});
```

The next request can use `{{studentId}}`. Also test invalid fields, missing resources, expired credentials and forbidden ownership changes. [Official Postman scripting guide](https://learning.postman.com/docs/tests-and-scripts/write-scripts/test-scripts/).

**Interview distinction:** Postman is useful for repeatable API investigation and collection checks; Playwright exercises browser behavior and can also test APIs; pytest organizes automated Python tests. Choose the layer that can expose the defect with the least unnecessary setup.

---

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
