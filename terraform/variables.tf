variable "project_name" {
  type        = string
  description = "Short project name used in Azure resource names."
  default     = "maria-love-cloud-lab"
}

variable "environment" {
  type        = string
  description = "Deployment environment."

  validation {
    condition     = contains(["devel", "stage"], var.environment)
    error_message = "Environment must be either devel or stage."
  }
}

variable "location" {
  type        = string
  description = "Azure region for all resources."
  default     = "eastus"
}

variable "container_image" {
  type        = string
  description = "Full image reference to deploy. Example: myacr.azurecr.io/maria-love-cloud-lab:latest."
  default     = null
}

variable "container_port" {
  type        = number
  description = "Container port exposed by Nginx."
  default     = 80
}

variable "container_cpu" {
  type        = number
  description = "CPU cores allocated to the Container App."
  default     = 0.25
}

variable "container_memory" {
  type        = string
  description = "Memory allocated to the Container App."
  default     = "0.5Gi"
}

variable "min_replicas" {
  type        = number
  description = "Minimum Container App replicas."
  default     = 0
}

variable "max_replicas" {
  type        = number
  description = "Maximum Container App replicas."
  default     = 2
}

variable "acr_sku" {
  type        = string
  description = "Azure Container Registry SKU."
  default     = "Basic"
}

variable "log_retention_days" {
  type        = number
  description = "Log Analytics retention in days."
  default     = 30
}

variable "tags" {
  type        = map(string)
  description = "Additional tags applied to Azure resources."
  default     = {}
}
