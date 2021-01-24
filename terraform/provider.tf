terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region                  = "eu-west-2"
  shared_credentials_file = "/Users/dan/.aws/credentials"
  profile                 = "ps5"
}
