# Terraform

This directory contains a single-root Terraform layout for the Azure infrastructure behind Maria Love Cloud Lab.

## Resources

- Azure Resource Group
- Log Analytics Workspace
- Azure Container Registry
- User-assigned managed identity
- Azure Container Apps Environment
- Azure Container App
- Diagnostic settings for ACR and the Container App

## Commands

```bash
terraform fmt -recursive
terraform init
terraform validate
terraform plan -var-file="envs/devel.tfvars"
terraform plan -var-file="envs/stage.tfvars"
```

## Variables

Environment separation is handled through:

- `envs/devel.tfvars`
- `envs/stage.tfvars`

The optional `container_image` variable can override the default image reference. By default, the image is expected at:

```text
<managed-acr-login-server>/maria-love-cloud-lab:<environment>
```

Build and push the image before applying the Container App for the first time.

## Lock File Decision

Commit `.terraform.lock.hcl` after running `terraform init`. Terraform lock files are safe to commit and help keep provider versions consistent across machines and CI. Do not commit `.terraform/` or Terraform state files.

## Security

- Do not hardcode Azure subscription IDs.
- Do not store credentials in tfvars.
- Do not commit `terraform.tfstate`, backups, or `*.tfvars.local`.
- Prefer Azure CLI login locally and OIDC in CI for production-grade workflows.
