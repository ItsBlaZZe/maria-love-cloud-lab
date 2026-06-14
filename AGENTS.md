# AGENTS.md

## Project Purpose

This repository is a DevOps practice lab for a small React app named "Para Maria". The app shows respectful, wholesome love messages while demonstrating Docker, GitHub Actions, Terraform, and Azure Container Apps practices.

## Repo Structure

- `app/`: React + Vite frontend.
- `docker/`: Nginx runtime config.
- `terraform/`: Azure infrastructure.
- `.github/workflows/`: CI and Docker build workflows.
- `docs/`: Architecture, deployment, design, and branching guidance.

## Main Commands

```bash
cd app
npm ci
npm run lint
npm test
npm run build
```

```bash
docker build -t maria-devops-love-app:local .
docker run --rm -p 8080:80 maria-devops-love-app:local
```

```bash
cd terraform
terraform fmt -recursive
terraform init
terraform validate
terraform plan -var-file="envs/devel.tfvars"
```

## Security Rules

- Do not hardcode secrets, tokens, passwords, or Azure credentials.
- Do not commit `.env`, `.env.*`, Terraform state, local tfvars, or cloud credentials.
- Use GitHub Actions secrets for registry credentials.
- Do not print secrets in logs.

## Terraform Rules

- Keep the single-root Terraform layout readable.
- Use `envs/devel.tfvars` and `envs/stage.tfvars` for environment separation.
- Do not hardcode subscription IDs.
- Run `terraform fmt -recursive` before committing Terraform changes.
- Committing `.terraform.lock.hcl` is acceptable after `terraform init`; do not commit `.terraform/`.

## Design Direction

Use a warm editorial style: soft rose and cream colors, elegant type scale, generous spacing, readable contrast, CSS-only transitions, and mobile-first layout. Keep the app personal without adding heavy dependencies.

## Branching Notes

- `main`: stable branch.
- `development` and `devel`: lower-environment development branches.
- `stage`: staging promotion branch.
- Use feature branches from `development` or `devel`.
- Require PRs and CI before protected branch merges.

## Validation Expectations

Before claiming work is complete, run the relevant frontend, Docker, Terraform, and git checks. If a local tool is unavailable, document the exact failure and provide the command the user should run later.
