# Git

## Visual workflow

![Working tree to staging area to local commit, then push to remote.](/diagrams/git-workflow.svg)

Editing a file changes the working tree. Staging selects the content for the next commit. A commit records a local snapshot; pushing transfers commits to a remote repository. Saving a file, committing, and pushing are three different operations. [Branching](/knowledge/git-branching) and [recovery](/knowledge/git-recovery) extend this workflow.

Git is a distributed version-control system that records project snapshots and their history, supporting local work and collaboration through repositories and references.

## Working tree, index and history

The working tree contains checked-out files. The index stages content for the next commit. A commit records a snapshot with parent history and metadata. Branches are movable references to commits, not separate physical folders by definition.

GitHub is a hosting and collaboration service; it is not the Git version-control mechanism itself.

## A deliberate change

```text
git status
git diff
git add path/to/changed-file
git diff --cached
git commit
```

These commands illustrate review before committing. Stage only the intended changes and inspect them. A commit does not automatically publish anything to a remote service.

## Collaboration and recovery

Merging combines histories; conflicts require understanding the intended behavior, not choosing one entire file blindly. Rewriting published history changes commit identities and can disrupt collaborators.

A repository is not a backup for untracked local files or external databases. Credentials committed accidentally can remain in history even after deletion from the latest version.

## Practice

Make two small commits on a practice branch and inspect their difference. Introduce a harmless conflict and resolve it with a behavioral explanation. Assessment: distinguish staged, committed and pushed changes. Continue with [CI/CD](/knowledge/ci-cd) and [software engineering](/knowledge/software-engineering).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Pro Git](https://git-scm.com/book/en/v2) — Git project / Scott Chacon and Ben Straub.

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 2152–2582](/research?document=interview&start=2152&end=2582). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Git fundamentals and architecture

### 1. What is Git?

Git is a **distributed version control system (DVCS)**.

It tracks changes to your source code over time. It allows you to:

- See what changed in a file.
- Restore previous versions.
- Create independent development branches.
- Combine work from multiple developers.
- Investigate bugs using project history.
- Collaborate without everyone editing the same copy of the code.

#### Example: Recruitment API

Imagine that your API currently has this structure:

```text
recruitment-api/
├── src/
│   ├── auth/
│   ├── students/
│   ├── companies/
│   └── applications/
├── prisma/
├── package.json
└── tsconfig.json
```

You implement student registration today. Tomorrow, you change its validation. Next week, you discover that the validation change broke another feature.

Without version control, finding and restoring the earlier implementation can be difficult.

With Git, you can inspect the changes and recover earlier commits.

### 2. Types of version control systems

| Type            | How it works                      | Example |
| --------------- | --------------------------------- | ------- |
| Local VCS       | Tracks versions on one machine    | RCS     |
| Centralized VCS | Uses a central server             | SVN     |
| Distributed VCS | Each clone has repository history | Git     |

**Why is distributed version control useful?**

Every developer can have a local repository containing the project's history. Developers can commit locally without needing to contact a central server for every commit.

### 3. Git vs GitHub

This is a very common interview question.

| Git                           | GitHub                                 |
| ----------------------------- | -------------------------------------- |
| Version-control software      | Git hosting and collaboration platform |
| Runs locally                  | Primarily provides hosted services     |
| Tracks code history           | Hosts repositories and PRs             |
| Supports branches and commits | Adds reviews, issues and automation    |
| Can work without GitHub       | Uses Git repositories                  |

Think of Git as the version-control engine and GitHub as a platform built around Git.

### 4. What is a repository?

A repository is a project whose changes and history are tracked by Git.

Initialize one:

```bash
mkdir recruitment-api
cd recruitment-api

git init
```

Git creates a hidden directory:

```text
recruitment-api/
└── .git/
```

The `.git` directory contains Git's internal repository information, including objects, references, configuration and other metadata.

Do not manually edit its internal files unless you understand the consequences.

### 5. Git's architecture

Git uses three important areas:

**Working directory**

Files you create or modify

git add

**Staging area (index)**

Changes selected for the next commit

git commit

**Local repository**

Recorded commits and project history

git push

**Remote repository**

For example, a GitHub repository

#### Understand this with an example

Create a file:

```bash
echo "Recruitment API" > README.md
```

Check its status:

```bash
git status
```

Git identifies `README.md` as untracked.

Stage it:

```bash
git add README.md
```

Commit it:

```bash
git commit -m "docs: add project README"
```

The important distinction:

- `git add` selects changes for a commit.
- `git commit` records the selected changes in local history.
- `git push` publishes local commits to a remote repository.

### 6. How does Git store information?

Git's internal object model includes:

| Object | Purpose                                              |
| ------ | ---------------------------------------------------- |
| Blob   | Stores file content                                  |
| Tree   | Represents directories and file names                |
| Commit | Points to a tree and parent commit(s), with metadata |
| Tag    | Identifies or annotates another Git object           |

Inspect the current commit object:

```bash
git cat-file -t HEAD
```

Expected output:

```text
commit
```

Inspect its contents:

```bash
git cat-file -p HEAD
```

Git uses content-addressed object storage: object identities are derived from their content and type. This helps Git identify stored objects and detect content changes.

### 7. What is HEAD?

`HEAD` identifies your currently checked-out position.

Usually:

```text
HEAD → main → commit C
```

When you switch branches:

```bash
git switch feature/auth
```

HEAD now refers to `feature/auth`.

In a detached HEAD state, HEAD points directly to a commit instead of a branch.

### 8. Tracked vs untracked files

- **Tracked:** Git already knows about the file.
- **Untracked:** Git has not started tracking the file.

Check with:

```bash
git status
```

Start tracking a new file:

```bash
git add src/auth.ts
```



## Git installation and configuration

Check whether Git is installed:

```bash
git --version
```

Configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Use the email address associated with your GitHub account if you want your commits associated with that account.

View configuration:

```bash
git config --list
```

Check a specific setting:

```bash
git config user.name
```

Set the default branch name:

```bash
git config --global init.defaultBranch main
```

Optionally configure VS Code as the Git editor:

```bash
git config --global core.editor "code --wait"
```

#### Global vs local configuration

| Global                       | Local                          |
| ---------------------------- | ------------------------------ |
| Applies to your repositories | Applies to one repository      |
| User-level configuration     | Repository-level configuration |
| `git config --global`        | `git config --local`           |

Local configuration generally takes precedence when both define the same setting.

**Interview question:** What happens if your global Git username is different from your local username?

The repository-specific setting takes precedence for that repository.



## Working directory, staging area and repository

This is the foundation for understanding Git commands.

Imagine you modify three files:

```text
src/
├── auth.service.ts
├── student.service.ts
└── application.service.ts
```

But you only want to commit the authentication change.

You can stage just one file:

```bash
git add src/auth.service.ts
```

Then inspect:

```bash
git status
```

The authentication file is staged; the other modifications remain unstaged.

#### Inspect changes

Unstaged changes:

```bash
git diff
```

Staged changes:

```bash
git diff --staged
```

Commit history:

```bash
git log
```

Compact history:

```bash
git log --oneline
```

Visual history:

```bash
git log --oneline --graph --decorate --all
```

**Important:** `git add .` stages all eligible changes under the current directory. It is convenient, but in professional projects you should inspect `git status` first so you don't accidentally stage unwanted files.



## Essential Git commands

### 1. Clone

Download an existing repository:

```bash
git clone https://github.com/username/recruitment-api.git
```

This creates a local repository copy and normally configures a remote named `origin`.

### 2. Remote

A remote is a named reference to another Git repository.

```bash
git remote -v
```

Add a remote:

```bash
git remote add origin https://github.com/username/recruitment-api.git
```

Change its URL:

```bash
git remote set-url origin https://github.com/username/recruitment-api.git
```

### 3. Push

Publish local commits:

```bash
git push origin main
```

Set the upstream branch:

```bash
git push -u origin main
```

After the upstream is configured, you can usually use:

```bash
git push
```

### 4. Fetch

Download updates from the remote:

```bash
git fetch origin
```

This updates remote-tracking references. It does not automatically integrate those changes into your current branch.

For example, after fetching, you can inspect:

```bash
git log --oneline main..origin/main
```

This shows commits present in `origin/main` that are not yet in your local `main`.

### 5. Pull

Fetch and integrate remote changes:

```bash
git pull origin main
```

By default, this typically performs a fetch followed by a merge. Depending on your Git configuration, it can instead integrate using rebase.

#### Fetch vs pull vs push

| Command     | Purpose                               |
| ----------- | ------------------------------------- |
| `git fetch` | Downloads remote updates              |
| `git pull`  | Fetches and integrates remote updates |
| `git push`  | Publishes local commits               |

**Interview-ready answer:** I use `fetch` when I want to inspect incoming changes before integrating them. I use `pull` to update my current branch, and `push` to publish my local commits.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
