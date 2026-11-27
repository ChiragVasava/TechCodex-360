# npm and dependency management

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 22065–22238](/research?document=interview&start=22065&end=22238). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## npm metadata, lockfiles and dependency categories

#### Q11.63. What is the difference between package.json and package-lock.json?

Node.js and npm

Interviewer: What is the difference between package.json and package-lock.json?

The candidate explained that both contain dependency information, but package-lock.json records exact dependency versions.

Correct.

**package.json**

This file contains project metadata and dependency declarations.

Example:

```json
{
    "name": "my-project",
    "version": "1.0.0",
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
    },
    "dependencies": {
        "express": "^5.0.0"
    },
    "devDependencies": {
        "nodemon": "^3.0.0"
    }
}
```

It contains:

- Project name.
- Project version.
- Scripts.
- Dependencies.
- Development dependencies.
- Other project configuration.

**package-lock.json**

This file is automatically maintained by npm.

It records the resolved dependency tree, including exact installed versions and dependency relationships.

For example:

```json
{
    "name": "my-project",
    "lockfileVersion": 3,
    "packages": {
        "node_modules/express": {
            "version": "5.0.0"
        }
    }
}
```

This is a simplified illustration.

**Why do we need package-lock.json?**

Imagine you and your teammate are developing the same project.

Your package.json contains:

```json
"express": "^5.0.0"
```

The `^` allows compatible versions within the specified major version range.

Without a lockfile, different installations could resolve to different compatible versions as releases change.

With package-lock.json, npm can reproduce the resolved dependency tree.

**Important follow-up: What does npm ci do?**

```bash
npm ci
```

It:

- Installs dependencies from the lockfile.
- Removes an existing node_modules directory first.
- Does not rewrite the package.json or package-lock.json files.
- Is suitable for reproducible CI/CD installations.

Interview-ready answer:

"package.json defines project metadata, scripts and dependency version requirements. package-lock.json records the exact resolved dependency versions and dependency tree. It helps maintain consistent installations across different developers' systems and CI/CD environments."

#### Q11.64. What is the difference between dependencies and devDependencies?

Interviewer: What is the difference between development dependencies and normal dependencies?

**Dependencies**

These are packages required by the application to run in its intended runtime environment.

Example:

```bash
npm install express
```

It is added under:

```json
"dependencies": {
    "express": "^5.0.0"
}
```

Examples:

- Express.
- React.
- Axios.
- Prisma Client.
- Database drivers.

**Development dependencies**

These are packages needed for development, testing, linting, building or other development workflows, but not necessarily needed at runtime.

Install:

```bash
npm install -D nodemon
```

It is added under:

```json
"devDependencies": {
    "nodemon": "^3.0.0"
}
```

Examples:

- Nodemon.
- ESLint.
- Prettier.
- Jest.
- Testing utilities.
- TypeScript compiler, depending on deployment setup.

**Comparison**

| Feature            | dependencies          | devDependencies          |
| ------------------ | --------------------- | ------------------------ |
| Main purpose       | Runtime requirements  | Development tooling      |
| Production runtime | Usually needed        | Usually not needed       |
| Installation       | `npm install package` | `npm install -D package` |
| Example            | Express               | Nodemon                  |

Important: Some build tools and compilers are development dependencies even though they are necessary during the production build process.

Interview-ready answer:

"Dependencies are packages required by the application at runtime. DevDependencies are packages needed during development, testing, linting or building, but generally aren't required by the production runtime."

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
