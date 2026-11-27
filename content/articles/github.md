# GitHub

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 3086–3179](/research?document=interview&start=3086&end=3179). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## GitHub repositories and collaboration

GitHub provides a platform for collaborative Git development.

Its features include:

- Repository hosting.
- Issues and pull requests.
- Code reviews.
- Releases.
- Project boards.
- GitHub Actions.
- Discussions.
- Access controls.

### 1. Public vs private repositories

| Public                        | Private                            |
| ----------------------------- | ---------------------------------- |
| Anyone can view it            | Only authorized people can view it |
| Useful for open-source work   | Useful for confidential projects   |
| Public collaboration possible | Access controlled by permissions   |

A private repository is not a safe place to store API keys or passwords.

### 2. Repository vs organization

- Repository: A project's code, history, issues and branches.
- Organization: A shared space to manage multiple repositories, teams, members and permissions.

Example:

```text
Taurus-Organization/
├── customer-portal/
├── policy-management/
├── claims-service/
└── internal-tools/
```

### 3. GitHub Issues

An issue is a unit of work, discussion or reported problem.

Example:

```text
Title: Add password reset API

Description:
Implement secure password reset with an expiring token.

Acceptance criteria:
- Generate a random token.
- Store the token hash.
- Send a reset email.
- Validate expiry.
- Allow single-use reset.
```

Issues help teams track requirements and progress.

### 4. Milestones

A milestone groups issues and pull requests toward a goal or release.

Example:

```text
Milestone: Authentication v1

- User registration
- Login
- Refresh token
- Logout
- Password reset
```

### 5. Fork vs clone

A fork creates a hosted copy of a repository under your GitHub account or organization.

A clone creates a local repository copy on your machine.

| Fork                                | Clone                       |
| ----------------------------------- | --------------------------- |
| Happens on GitHub                   | Happens on your machine     |
| Creates a hosted copy               | Creates a local copy        |
| Common in open-source contributions | Common in local development |

You can fork a repository and then clone your fork.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
