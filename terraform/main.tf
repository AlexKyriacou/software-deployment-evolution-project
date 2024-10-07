terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.4.0"
    }
    azurecaf = {
      source  = "aztfmod/azurecaf"
      version = "1.2.26"
    }
  }
  backend "azurerm" {}
}

provider "azurerm" {
  features {}
}

resource "azurecaf_name" "resource_group" {
  name          = var.application_name
  resource_type = "azurerm_resource_group"
  suffixes      = [var.environment]
}

resource "azurerm_resource_group" "main" {
  name     = azurecaf_name.resource_group.result
  location = var.location
}

module "application" {
  source                      = "./modules/app-service"
  resource_group              = azurerm_resource_group.main.name
  application_name            = var.application_name
  environment                 = var.environment
  location                    = var.location
  container_registry_name     = var.container_registry_name
  container_registry_username = var.container_registry_username
  container_registry_password = var.container_registry_password
  container_tag               = var.container_tag
  database_url                = module.database.database_url
}

module "database" {
  source            = "./modules/postgresql"
  resource_group    = azurerm_resource_group.main.name
  application_name  = var.application_name
  environment       = var.environment
  location          = var.location
  high_availability = false
}
