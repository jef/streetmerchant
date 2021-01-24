resource "aws_cloudwatch_log_group" "main" {
  name = "/ps5-streetmarket"

  retention_in_days = 3
}
