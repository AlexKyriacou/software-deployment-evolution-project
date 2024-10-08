variable "resource_group" {
  type        = string
  description = "The resource group"
}

variable "application_name" {
  type        = string
  description = "The name of your application"
}

variable "environment" {
  type        = string
  description = "The environment (dev, test, prod...)"
}

variable "location" {
  type        = string
  description = "The Azure region where all resources in this example should be created"
}

variable "administrator_login" {
  type        = string
  description = "The PostgreSQL administrator login"
  default     = "postgresqladmin"
}

variable "high_availability" {
  type        = bool
  description = "Enables PostgreSQL high availability"
  default     = false
}
