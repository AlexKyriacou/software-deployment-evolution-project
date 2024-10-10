output "resource_group" {
  value       = azurerm_resource_group.main.name
  description = "The resource group."
}

output "application_url" {
  value       = module.application.application_url
  description = "The Web application URL."
}