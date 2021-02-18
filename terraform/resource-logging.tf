resource "aws_cloudwatch_log_group" "main" {
  name = var.app_name
  retention_in_days = 3
}

locals {
  stores = split(",",var.streetmerchant_env["STORES"])
}

resource "aws_cloudwatch_log_metric_filter" "out_of_stock" {
  for_each = toset(local.stores)

  log_group_name = aws_cloudwatch_log_group.main.name
  name = "${each.key}-out-of-stock"

  pattern = "${each.key} \"OUT OF STOCK\""
  metric_transformation {
    name = "${each.key}-out-of-stock"
    namespace = var.app_name
    value = 1
    default_value = 0
  }
}

resource "aws_cloudwatch_log_metric_filter" "error" {
  for_each = toset(local.stores)

  log_group_name = aws_cloudwatch_log_group.main.name
  name = "${each.key}-error"

  pattern = "${each.key} \"ERROR\""
  metric_transformation {
    name = "${each.key}-error"
    namespace = var.app_name
    value = 1
    default_value = 0
  }
}

resource "aws_cloudwatch_dashboard" "main" {
  dashboard_name = "${var.app_name}-dashboard"
  dashboard_body = templatefile("dashboard.json.template", {})
}
