resource "aws_cloudwatch_log_group" "main" {
  name = "/ps5-streetmarket"

  retention_in_days = 3
}

locals {
  stores = [
    "amazon-uk",
    "game",
    "argos",
    "box",
    "currys",
    "johnlewis",
    "shopto",
    "smythstoys",
    "very"
  ]
}

resource "aws_cloudwatch_log_metric_filter" "out_of_stock" {
  for_each = toset(local.stores)

  log_group_name = aws_cloudwatch_log_group.main.name
  name = "${each.key}-out-of-stock"

  pattern = "${each.key} \"OUT OF STOCK\""
  metric_transformation {
    name = "${each.key}-out-of-stock"
    namespace = "ps5-streetmerchant"
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
    namespace = "ps5-streetmerchant"
    value = 1
    default_value = 0
  }
}

resource "aws_cloudwatch_dashboard" "main" {
  dashboard_name = "streetmerchant-dashboard"
  dashboard_body = templatefile("dashboard/streetmerchant.json", {})
}
