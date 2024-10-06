variable "application_name" {
  type        = string
  description = "The name of your application"
}

variable "environment" {
  type        = string
  description = "The environment (dev, test, prod...)"
  default     = ""
}

variable "location" {
  type        = string
  description = "The Azure region where all resources in this example should be created"
  default     = "australiasoutheast"
}

variable "container_registry_name" {
  type        = string
  description = "The name of the container registry"
}

variable "container_registry_username" {
  type        = string
  description = "The username of the container registry"
}

variable "container_registry_password" {
  type        = string
  description = "The password of the container registry"
}

variable "container_tag" {
  type        = string
  description = "The tag of the container"
  default     = "latest"
}