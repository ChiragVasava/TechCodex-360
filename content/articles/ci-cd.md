# Continuous integration and delivery

Continuous integration frequently integrates changes with automated checks; continuous delivery keeps changes releasable, while continuous deployment automatically releases eligible changes under defined policy.

## Pipeline responsibilities

A typical pipeline checks out an exact revision, installs declared dependencies, runs selected tests and builds an artifact. A delivery stage promotes that artifact to an environment.

Continuous delivery and continuous deployment are related practices with different release decisions. A green pipeline should have a clear meaning rather than imply that every possible risk was tested.

## Example

A documentation platform can validate content IDs, test relationship navigation, type-check its code and build static assets on each proposed change. A deployment then uses the validated revision.

Use [Git](/knowledge/git) history to connect a release with its source and checks.

## Security and failure handling

Build scripts execute code. Limit credentials, review third-party actions and avoid exposing deployment secrets to untrusted contributions. Pin or constrain dependencies according to the project's update policy.

Define what happens when deployment partially fails. Rollback may require handling database or content-format compatibility, not just replacing application files.

## Practice

Write a pipeline diagram listing trigger, inputs, checks, artifact and release gate. Identify which failures stop delivery. Assessment: explain how to reproduce the build and how to trace a deployed artifact to a commit. Continue with [testing](/knowledge/testing) and [observability](/knowledge/observability).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [GitHub Actions documentation](https://docs.github.com/en/actions) — GitHub.
- [Pro Git](https://git-scm.com/book/en/v2) — Git project / Scott Chacon and Ben Straub.

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 29919–30139](/research?document=interview&start=29919&end=30139). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## CI/CD and GitHub Actions

### Q16.59. What is CI/CD?

CI/CD is a software delivery practice that automates the process of building, testing and delivering applications.

- **CI — Continuous Integration:** Frequently integrate code changes and automatically build and test them.
- **Continuous Delivery:** Keep software in a deployable state, with production release typically requiring approval or a deliberate trigger.
- **Continuous Deployment:** Automatically release qualifying changes to production after the required checks pass.

### Q16.60. What is a CI/CD pipeline?

A pipeline is an automated sequence of stages.

```text
Developer pushes code
         |
         v
    GitHub Actions
         |
         v
    Install dependencies
         |
         v
     Static checks
         |
         v
       Unit tests
         |
         v
      Build app
         |
         v
    Build Docker image
         |
         v
    Deploy to server
         |
         v
     Health check
```

Not every project needs every stage. A good pipeline should match the risks and deployment model.

### Q16.61. What are GitHub Actions?

GitHub Actions automates workflows in response to repository events.

| Term     | Meaning                                   |
| -------- | ----------------------------------------- |
| Workflow | Complete automation definition            |
| Event    | Trigger such as push or pull request      |
| Job      | Group of steps executed on a runner       |
| Runner   | Machine that executes jobs                |
| Step     | Individual command or action              |
| Action   | Reusable automation component             |
| Artifact | File produced and retained by a workflow  |
| Secret   | Encrypted repository or environment value |

### Q16.62. Create a basic CI workflow

Create:

```text
.github/
└── workflows/
    └── ci.yml
```

`ci.yml`:

```yaml

name: Python CI

on:
  push:
    branches: [main]

  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.12"

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt

      - name: Run tests
        run: pytest -v

```

What happens?

1. A developer pushes code or opens a pull request.
2. GitHub creates an Ubuntu runner.
3. The repository is checked out.
4. Python is configured.
5. Dependencies are installed.
6. PyTest runs.
7. GitHub reports whether the job succeeded.

### Q16.63. What are GitHub Actions secrets?

Secrets store sensitive values used by workflows.

Examples:

```text
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
DATABASE_URL
DEPLOY_SSH_KEY
```

Reference a secret:

```yaml
env:
  API_TOKEN: ${{ secrets.API_TOKEN }}
```

Never hardcode credentials directly in workflow YAML.

For AWS deployment, prefer short-lived credentials through GitHub OIDC and an appropriately restricted AWS IAM role when supported, rather than long-lived access keys.

### Q16.64. Environment variables vs secrets

| Environment variable           | Secret                              |
| ------------------------------ | ----------------------------------- |
| General configuration value    | Sensitive configuration             |
| May be public or non-sensitive | Should be protected                 |
| Can be stored in workflow YAML | Stored in a secure secrets facility |
| Example: `NODE_ENV=production` | Example: API key                    |

A value being called an environment variable does not automatically make it secure.

### Q16.65. What are artifacts in CI/CD?

Artifacts are files generated by a workflow and stored for later inspection or download.

Examples:

- Test reports.
- Coverage reports.
- Build output.
- Docker-related metadata.
- Logs.
- Test screenshots.

Example:

```yaml
- name: Upload test report
  if: always()
  uses: actions/upload-artifact@v4
  with:
    name: test-results
    path: reports/
```

### Q16.66. How does Terraform fit into CI/CD?

Terraform can be integrated into a pipeline to validate and plan infrastructure changes before they are applied.

```text
Pull request
     |
     v
Terraform fmt
     |
     v
Terraform validate
     |
     v
Terraform plan
     |
     v
Review plan
     |
     v
Approval
     |
     v
Terraform apply
```

Safety rules:

1. Do not automatically apply unreviewed infrastructure changes from every pull request.
2. Protect state and backend credentials.
3. Use restricted IAM permissions.
4. Review resource replacements and deletions.
5. Separate development, staging and production environments.
6. Use approvals for sensitive production changes.
7. Keep state locking enabled where supported by the backend.

### Q16.67. How does CI differ from CD?

| CI                                | CD                                                     |
| --------------------------------- | ------------------------------------------------------ |
| Integrates code changes           | Delivers/releases changes                              |
| Builds and tests                  | Deploys or prepares deployment                         |
| Detects defects early             | Makes delivery repeatable                              |
| Usually triggered by code changes | Triggered by successful pipeline or release conditions |

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
