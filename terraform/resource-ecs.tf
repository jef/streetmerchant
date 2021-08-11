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

data "aws_iam_policy_document" "ecs_task_execution_role" {
  version = "2012-10-17"
  statement {
    sid     = ""
    effect  = "Allow"
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "ecs_task_execution_role" {
  name               = var.ecs_task_execution_role_name
  assume_role_policy = data.aws_iam_policy_document.ecs_task_execution_role.json
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_role" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
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
  execution_role_arn = aws_iam_role.ecs_task_execution_role.arn
}
