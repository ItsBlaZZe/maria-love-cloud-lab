# Branching Strategy

## Branch Roles

- `main`: stable branch for production-ready code.
- `development`: primary integration branch for normal feature work.
- `devel`: lower-environment branch used to mirror challenge-style naming.
- `stage`: staging branch for release candidates and Docker image publishing.

## Feature Branches

Create feature branches from `development` or `devel`:

```bash
git checkout development
git checkout -b feature/message-card-polish
```

## Pull Requests

All changes should go through pull requests. CI should pass before merge. Protected branches should block direct pushes once the GitHub repository is configured.

## Promotion Flow

```text
feature/* -> development -> devel -> stage -> main
```

Use this flow as a practice model. For a small personal project, `development -> stage -> main` is also reasonable if `devel` is redundant.

## Rules

- No direct pushes to protected branches.
- CI required before merge.
- Keep commits focused and reviewable.
- Do not merge secrets, Terraform state, or local environment files.
