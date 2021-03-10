resource "aws_ecs_cluster" "main" {
  name = "${var.app_name}-ecs-cluster"
}

resource "aws_ecs_service" "main" {
  name = "${var.app_name}-ecs-service"
  cluster = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.main.id
  desired_count = 1
  network_configuration {
    subnets = [
      aws_subnet.aws-subnet.id
    ]
    assign_public_ip = true
  }
  launch_type = "FARGATE"
}

data "aws_iam_role" "ecs_task_execution_role" {
  name = "ecsTaskExecutionRole"
}

locals {
  container_env = [for k, v in var.streetmerchant_env : { name: k, value: v}]
}

resource "aws_ecs_task_definition" "main" {
  container_definitions = templatefile("taskdef.json.template", {
    "name": var.app_name
    "awslogs-group": aws_cloudwatch_log_group.main.name
    "region": var.region
    "cpu": var.cpu
    "memory": parseint(var.memory,10)
    "environment": jsonencode(local.container_env)
  })
  family = var.app_name
  requires_compatibilities = ["FARGATE"]
  network_mode = "awsvpc"
  cpu = var.cpu
  memory = var.memory
  execution_role_arn = data.aws_iam_role.ecs_task_execution_role.arn
}
