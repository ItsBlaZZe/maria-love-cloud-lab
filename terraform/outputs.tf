output "resource_group_name" {
  value       = azurerm_resource_group.app.name
  description = "Azure Resource Group name."
}

output "acr_login_server" {
  value       = azurerm_container_registry.app.login_server
  description = "Azure Container Registry login server."
}

output "container_app_name" {
  value       = azurerm_container_app.app.name
  description = "Azure Container App name."
}

output "container_app_url" {
  value       = "https://${azurerm_container_app.app.ingress[0].fqdn}"
  description = "Public Container App URL."
}

output "log_analytics_workspace_name" {
  value       = azurerm_log_analytics_workspace.app.name
  description = "Log Analytics Workspace name."
}
