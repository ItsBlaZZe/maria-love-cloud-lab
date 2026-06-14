# Deployment

## Local Run

```bash
cd app
npm ci
npm run dev
```

## Local Validation

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

Validate:

- `http://localhost:8080`
- `http://localhost:8080/health`

## GitHub Actions

`ci.yml` runs lint, tests, and build for app changes.

`docker.yml` builds the image on manual dispatch or when `stage` receives a push. It pushes only when ACR credentials are configured.

## Required GitHub Secrets

- `ACR_LOGIN_SERVER`: example `myregistry.azurecr.io`
- `ACR_USERNAME`: registry username or service principal-backed username
- `ACR_PASSWORD`: registry password or service principal-backed password

Do not put secret values in workflow files.

## Required Azure Permissions

The identity running Terraform needs permission to create resource groups, ACR, Log Analytics, Container Apps, role assignments, and diagnostic settings. For local practice, Azure CLI authentication is enough if your account has the required rights.

## Terraform Deployment

```bash
cd terraform
terraform fmt -recursive
terraform init
terraform validate
terraform plan -var-file="envs/devel.tfvars"
terraform apply -var-file="envs/devel.tfvars"
```

Repeat with `envs/stage.tfvars` for staging.

## Validation Checklist

- Frontend build completes.
- Docker image builds.
- `/health` returns HTTP 200 in the container.
- Terraform validates after init.
- Terraform plan contains only expected resources.
- Container App URL opens after apply.
- Log Analytics receives Container App logs.

## Rollback Notes

- For app rollback, retag or redeploy a previous image SHA in ACR and update `container_image`.
- For infrastructure rollback, review `terraform plan` before applying any reverse change.
- Avoid deleting state or manually changing Terraform-managed resources unless you import or reconcile the change afterward.
