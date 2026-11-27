# Semantic versioning

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 3404–3519](/research?document=interview&start=3404&end=3519). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Conventional commits and semantic versioning

### 1. Conventional Commits

Conventional Commits is a convention for structured commit messages.

Format:

```text
<type>[optional scope]: <description>
```

Examples:

```bash
git commit -m "feat: add student registration"

git commit -m "fix: handle expired refresh tokens"

git commit -m "docs: update API documentation"

git commit -m "test: add authentication integration tests"

git commit -m "refactor: simplify auth service"
```

Common types:

| Type       | Purpose                 |
| ---------- | ----------------------- |
| `feat`     | New feature             |
| `fix`      | Bug fix                 |
| `docs`     | Documentation           |
| `test`     | Tests                   |
| `refactor` | Code restructuring      |
| `perf`     | Performance improvement |
| `ci`       | CI/CD configuration     |
| `chore`    | Maintenance             |

A breaking change can be indicated with `!`:

```text
feat!: change authentication response format
```

### 2. Semantic Versioning

Semantic Versioning commonly uses:



## MAJOR.MINOR.PATCH

Example:

```text
2.4.1
```

- **MAJOR:** Incompatible API changes.
- **MINOR:** Backward-compatible new functionality.
- **PATCH:** Backward-compatible bug fixes.

Examples:

```text
1.0.0 → 1.0.1
```

Bug fix.

```text
1.0.1 → 1.1.0
```

Backward-compatible feature.

```text
1.1.0 → 2.0.0
```

Breaking change.

### 3. Git tags

Tags identify a specific Git object, commonly a release commit.

Lightweight tag:

```bash
git tag v1.0.0
```

Annotated tag:

```bash
git tag -a v1.0.0 -m "First stable release"
```

Push a tag:

```bash
git push origin v1.0.0
```

Push all tags:

```bash
git push origin --tags
```

Annotated tags are generally preferable for releases because they include metadata and a message.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
