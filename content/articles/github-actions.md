# GitHub Actions

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 30274–30413](/research?document=interview&start=30274&end=30413). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Build a GitHub Actions CI workflow

Now let's create a CI workflow for your Node.js + TypeScript + Prisma Recruitment API.

### 1. Project structure

```text
recruitment-api/
├── src/
├── prisma/
├── tests/
├── package.json
├── package-lock.json
├── tsconfig.json
└── .github/
    └── workflows/
        └── ci.yml
```

### 2. Create ci.yml

```yaml

name: Recruitment API CI

on:
  push:
    branches: [main]

  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout source code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Generate Prisma Client
        run: npx prisma generate

      - name: Run lint
        run: npm run lint --if-present

      - name: Run TypeScript build
        run: npm run build

      - name: Run tests
        run: npm test

```

#### Understand the execution flow

1. `on` defines the events that trigger the workflow.
2. `jobs` defines the jobs to run.
3. `runs-on` selects the runner.
4. `checkout` downloads the repository contents.
5. `setup-node` configures Node.js.
6. `npm ci` installs dependencies.
7. `prisma generate` generates Prisma Client.
8. Lint, build and test commands validate the application.

This is a starting workflow. Your `package.json` must define the scripts being invoked.

### 3. Add PostgreSQL as a CI service

If your integration tests require PostgreSQL, you can run a database service alongside the test job.

```yaml

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:17
        env:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test_db
        ports:
          - 5432:5432
        options: >-
          --health-cmd "pg_isready -U postgres -d test_db"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    env:
      DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci

      - run: npx prisma generate

      - run: npx prisma migrate deploy

      - run: npm test

```

This creates an isolated test database for the workflow. Your tests must connect to it and manage their test data appropriately.

**Important:** The example uses a test-only database credential. Never reuse production database credentials in CI.

### 4. CI vs deployment

| CI                                  | Deployment                       |
| ----------------------------------- | -------------------------------- |
| Validates code                      | Releases application             |
| Runs tests and builds               | Publishes and runs application   |
| Often runs for PRs and pushes       | Runs after release conditions    |
| Detects problems before integration | Makes changes available to users |

A workflow that only tests code is not automatically a deployment pipeline.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
