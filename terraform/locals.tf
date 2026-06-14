locals {
  normalized_project = lower(replace(var.project_name, "/[^a-z0-9-]/", "-"))
  name_prefix        = "${local.normalized_project}-${var.environment}"
  compact_prefix     = replace(local.name_prefix, "/[^a-z0-9]/", "")
  image_repository   = "maria-love-cloud-lab"
  image_tag          = var.environment
  container_image    = coalesce(var.container_image, "${azurerm_container_registry.app.login_server}/${local.image_repository}:${local.image_tag}")

  tags = merge(
    {
      project     = var.project_name
      environment = var.environment
      managed_by  = "terraform"
    },
    var.tags
  )
}
