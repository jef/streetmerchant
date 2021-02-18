resource "aws_ecs_cluster" "main" {
  name = "ps5-cluster"
}

resource "aws_ecs_service" "main" {
  name = "ps5-service"
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

resource "aws_ecs_task_definition" "main" {
  container_definitions = templatefile("taskdef/streetmerchant.json", {
   "awslogs-group": aws_cloudwatch_log_group.main.name
  })
  family = "ps5-streetmerchant-task"
  requires_compatibilities = ["FARGATE"]
  network_mode = "awsvpc"
  cpu = 1024
  memory = "2048"
  execution_role_arn = data.aws_iam_role.ecs_task_execution_role.arn
}
