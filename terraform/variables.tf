variable "credential_profile" {
  type = string
  description = "the section in ~/.aws/credentials with your desired aws_access_key_id and aws_secret_access_key values"
}

variable "region" {
  type  = string
  description = "aws region"
  default = "eu-west-2"
}

variable "app_name" {
  type = string
  default = "streetmerchant"
}

variable "memory" {
  type = string
  default = "2048"
  description = "ecs task memory"
}

variable "cpu" {
  type = number
  default = 1024
  description = "ecs task cpu"
}

variable "streetmerchant_env" {
  type = list
  description = "name/value pairs for .env values"
  default = [{}]
}

