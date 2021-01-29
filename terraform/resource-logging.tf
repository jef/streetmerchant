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

resource "aws_cloudwatch_log_metric_filter" "main" {
  for_each = toset(local.stores)

  log_group_name = aws_cloudwatch_log_group.main.name
  name = "stock-poll-${each.key}"

  pattern = each.key
  metric_transformation {
    name = "stock-poll-store-${each.key}"
    namespace = "ps5-streetmerchant"
    value = 1
    default_value = 0
  }
}

resource "aws_cloudwatch_dashboard" "main" {
  dashboard_name = "streetmerchant-dashboard"
  dashboard_body = templatefile("dashboard/streetmerchant.json", {})
}
