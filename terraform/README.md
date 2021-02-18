# Terraform for AWS Fargate

Here's some configurable terraform to get you up and running with the streetmerchant docker image in AWS ECS Fargate.

Running on cloud infrastructure, your mileage may vary, and you'll need to integrate with one of the chat notifications rather than having your local browser navigate to a url for you.

The author's findings were that it worked ok; running the container from within EU-West-2 region was suficient to get a timely alert for PS5 stock on amazon, and follow the link to a successful basket add.

Dependencies:
- Terraform 14

##Getting started

There's an example tfvars file to start you off; rename this with your own preferences.  Anything you can set in the `dotenv` file you'll need to set in terraform.tfvars to get the env vars into your fargate container.

Authenticate yourself with your own AWS account as with any aws commandline tool.

If you wish, add a specific section to your aws credentials file and set that profile name in `terraform.tfvars`.

Then you can:
```shell
cd ./terraform
terraform init

npm run deploy:plan
npm run deploy:apply
```

## What's included

- container, running streetmerchant, with your chosen config
- cloud metrics and a dashboard tracking 'out of stock' and 'error' responses from your configured stores
