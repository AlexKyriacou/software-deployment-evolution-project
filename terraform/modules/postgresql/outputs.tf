output "database_url" {
  value       = "postgres://${var.administrator_login}:${random_password.password.result}@${azurerm_postgresql_flexible_server.database.fqdn}:5432/${azurerm_postgresql_flexible_server_database.database.name}?sslmode=require"
  description = "The PostgreSQL server URL with password."
  sensitive   = true
}
