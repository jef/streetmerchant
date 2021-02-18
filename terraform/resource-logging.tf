resource "aws_cloudwatch_log_group" "main" {
  name = var.app_name
  retention_in_days = 3
}

locals {
  stores = split(",",var.streetmerchant_env["STORES"])
  metrics = {
    out_of_stock = [for store in local.stores : ["${var.app_name}-out-of-stock", store]]
    error = [for store in local.stores : ["${var.app_name}-error", store]]
  }
}

resource "aws_cloudwatch_log_metric_filter" "out_of_stock" {
  for_each = toset(local.stores)

  log_group_name = aws_cloudwatch_log_group.main.name
  name = "${each.key}-out-of-stock"

  pattern = "${each.key} \"OUT OF STOCK\""
  metric_transformation {
    name = each.key
    namespace = "${var.app_name}-out-of-stock"
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
    name = each.key
    namespace = "${var.app_name}-error"
    value = 1
    default_value = 0
  }
}

resource "aws_cloudwatch_dashboard" "main" {
  dashboard_name = "${var.app_name}-dashboard"
  dashboard_body = templatefile("dashboard.json.template", {
    out_of_stock = jsonencode(local.metrics.out_of_stock)
    error = jsonencode(local.metrics.error)
    region = var.region
  })
}
