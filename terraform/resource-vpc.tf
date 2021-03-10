resource "aws_vpc" "main" {
  enable_dns_support = true
  cidr_block = "10.0.0.0/16"
  tags = {
    app = "ps5"
  }
}

resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id
  tags = {
    app = "ps5"
  }
}

resource "aws_subnet" "aws-subnet" {
  vpc_id = aws_vpc.main.id
  cidr_block = aws_vpc.main.cidr_block
  map_public_ip_on_launch = true
  tags = {
    app = "ps5"
  }
}

resource "aws_route_table" "main" {
  vpc_id = aws_vpc.main.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }
  tags = {
    app = "ps5"
  }
}

resource "aws_main_route_table_association" "main" {
 route_table_id = aws_route_table.main.id
 vpc_id = aws_vpc.main.id
}

