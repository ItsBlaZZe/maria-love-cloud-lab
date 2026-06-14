# Maria Love Cloud Lab

Maria Love Cloud Lab is a small React application and DevOps practice repository built around a personal, wholesome love-messages app for Maria.

The project exists to practice a cloud delivery flow: local React development, Docker/Nginx packaging, GitHub Actions quality gates, Docker image publishing to Azure Container Registry, and Terraform-managed Azure Container Apps infrastructure.

## Tech Stack

- React + Vite
- Plain CSS with a mobile-first responsive layout
- ESLint and Vitest
- Docker multi-stage build
- Nginx static runtime with SPA fallback and `/health`
- GitHub Actions
- Terraform for Azure
- Azure Container Registry, Container Apps, and Log Analytics

## Repository Structure

```text
.
├── app/                  # React + Vite application
├── docker/               # Nginx runtime configuration
├── terraform/            # Azure infrastructure as code
├── docs/                 # Architecture, design, deployment, branching docs
├── .github/workflows/    # CI and Docker image workflows
├── Dockerfile
├── .dockerignore
├── .gitignore
├── AGENTS.md
└── README.md
```

## Local Development

```bash
cd app
npm ci
npm run dev
```

Build locally:

```bash
cd app
npm run lint
npm test
npm run build
```

## Docker Build And Run

```bash
docker build -t maria-devops-love-app:local .
docker run --rm -p 8080:80 maria-devops-love-app:local
```

Open:

- App: `http://localhost:8080`
- Health check: `http://localhost:8080/health`

## CI/CD Overview

`.github/workflows/ci.yml` runs on pushes and pull requests to `main`, `development`, `devel`, and `stage`.

The CI workflow installs dependencies from `app/`, runs linting, runs tests, and builds the static app.

`.github/workflows/docker.yml` builds the production Docker image on manual dispatch and pushes to `stage`. It is safe by default: image push only runs when the required Azure Container Registry secrets are configured.

Required GitHub secrets for image publishing:

- `ACR_LOGIN_SERVER`
- `ACR_USERNAME`
- `ACR_PASSWORD`

## Terraform Overview

Terraform code lives in `terraform/` and uses a single root module for readability. Environment-specific values live in:

- `terraform/envs/devel.tfvars`
- `terraform/envs/stage.tfvars`

Main resources:

- Azure Resource Group
- Log Analytics Workspace
- Azure Container Registry
- Azure Container Apps Environment
- Azure Container App
- Diagnostic settings for ACR and Container App

## Azure Deployment Overview

1. Authenticate with Azure locally or through CI.
2. Build and push the Docker image to ACR.
3. Run Terraform with the target environment tfvars.
4. Validate the Container App URL and `/health`.

See [docs/deployment.md](docs/deployment.md) for commands and checks.

## GitHub Repository Notes

This repository is intended to be private because the app is personal. If GitHub remote creation is unavailable on this machine, create a private repository named `maria-love-cloud-lab` and add it as `origin`.

## Security Notes

- Do not hardcode secrets.
- Do not commit `.env` files.
- Do not commit Terraform state.
- Store registry credentials in GitHub Actions secrets.
- Use Azure authentication outside source control.
- Keep Terraform tfvars free of credentials.

## Future Improvements

- Add a deployment workflow that runs Terraform through GitHub Actions with OIDC.
- Add branch protection rules in GitHub.
- Add preview environments for feature branches.
- Add end-to-end checks against the containerized app.
- Add custom domain and managed TLS after the basic Container App deployment is stable.
