# Architecture

## App Overview

Maria Love Cloud Lab is a static React app built with Vite. The UI displays one wholesome message for Maria at a time, starts with a deterministic message of the day, and lets the user request another random message.

## CI Flow

The CI workflow runs on pushes and pull requests to `main`, `development`, `devel`, and `stage`. It installs dependencies in `app/`, runs ESLint, runs Vitest, and builds the Vite static assets.

## Docker Image Flow

The Dockerfile uses a Node LTS build stage and an Nginx runtime stage. The build stage produces `app/dist`; the runtime stage serves those files from `/usr/share/nginx/html`. Nginx includes SPA fallback and a `/health` endpoint.

## Azure Deployment Flow

The Docker workflow can publish images to Azure Container Registry when the required GitHub Actions secrets are configured. Terraform provisions ACR, Log Analytics, a Container Apps environment, and a public Container App that pulls from ACR using a user-assigned managed identity.

## Terraform-Managed Resources

- Resource Group
- Log Analytics Workspace
- Azure Container Registry
- User-assigned managed identity
- AcrPull role assignment
- Container Apps Environment
- Container App
- Diagnostic settings

## Environment Separation

Environment settings are kept in `terraform/envs/devel.tfvars` and `terraform/envs/stage.tfvars`. The same Terraform root module is reused for both environments.

## Logging And Observability

Container App and ACR diagnostics are sent to Log Analytics. The app also exposes `/health`, which supports container health checks and simple smoke validation.

## Security Considerations

- No secrets are stored in source control.
- ACR admin access is disabled in Terraform.
- Container App image pulls use managed identity.
- GitHub Actions image publishing uses repository secrets.
- Terraform state must be stored securely outside git.

## Application Gateway Decision

Application Gateway is not included in this practice implementation. For a small personal static app on Azure Container Apps, the built-in external ingress is simpler, cheaper, and easier to explain. In a production architecture, Application Gateway could sit in front of Container Apps to provide WAF policies, centralized TLS, path-based routing, and stricter network controls.
