# Terraform

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 29519–29918](/research?document=interview&start=29519&end=29918). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Optional extension — Terraform and Infrastructure as Code

### Q16.46. What is Infrastructure as Code?

Infrastructure as Code (IaC) means defining and managing infrastructure using machine-readable configuration rather than creating every resource manually through a cloud console.

Without IaC:

```text
AWS Console
   ↓
Create VPC
   ↓
Create subnet
   ↓
Create Security Group
   ↓
Launch EC2
   ↓
Allocate Elastic IP
```

With Terraform:

```text
Terraform configuration
          |
          v
     terraform init
          |
          v
     terraform plan
          |
          v
     terraform apply
          |
          v
        AWS
```

Benefits:

- Repeatability.
- Version control.
- Consistency.
- Automation.
- Reviewable infrastructure changes.
- Easier recovery and recreation.

### Q16.47. What is Terraform?

Terraform is an Infrastructure as Code tool that lets engineers define infrastructure using declarative configuration.

It supports AWS and other infrastructure providers.

Terraform configuration files commonly use `.tf` extension and HashiCorp Configuration Language (HCL).

### Q16.48. What are Terraform providers?

A provider is a plugin that allows Terraform to interact with an external platform or service.

Example:

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "ap-south-1"
}
```

The AWS provider exposes resources and data sources used to manage AWS infrastructure.

Provider versions should be chosen based on project compatibility and the installed Terraform version.

### Q16.49. What is a Terraform resource?

A resource represents infrastructure that Terraform manages.

Example: Create an AWS security group.

```hcl
resource "aws_security_group" "web" {
  name        = "web-security-group"
  description = "Allow web traffic"
  vpc_id      = var.vpc_id

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
```

This is an example resource. In a real deployment, `vpc_id` must refer to a valid VPC, and the ingress rules should match the intended architecture.

### Q16.50. What are Terraform variables?

Variables make configuration reusable.

`variables.tf`:

```hcl
variable "aws_region" {
  description = "AWS deployment region"
  type        = string
  default     = "ap-south-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}
```

Use:

```hcl
provider "aws" {
  region = var.aws_region
}
```

```hcl
resource "aws_instance" "app" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type
}
```

### Q16.51. What are Terraform outputs?

Outputs expose useful values after Terraform creates or updates infrastructure.

```hcl
output "instance_public_ip" {
  value = aws_instance.app.public_ip
}
```

After applying:

```bash
terraform output
```

It can display the instance's public IP.

Avoid outputting secrets. Marking an output `sensitive = true` reduces accidental display, but it does not encrypt the underlying Terraform state.

### Q16.52. What is Terraform state?

Terraform state is the record Terraform uses to map configuration resources to real infrastructure objects.

```text
Terraform configuration
       |
       v
aws_instance.app
       |
       v
Terraform state
       |
       v
Actual AWS EC2 instance
```

Common state file:

```text
terraform.tfstate
```

Why does state matter?

- Tracks managed resources.
- Stores resource attributes.
- Helps determine changes.
- Maps configuration addresses to real resource IDs.

**Critical security point:** State may contain sensitive information. Protect it carefully, restrict access and use an appropriate remote backend for team environments.

### Q16.53. Difference between terraform plan and terraform apply

| Command              | Purpose                                                       |
| -------------------- | ------------------------------------------------------------- |
| `terraform init`     | Initializes working directory and downloads providers/modules |
| `terraform fmt`      | Formats configuration                                         |
| `terraform validate` | Checks configuration validity                                 |
| `terraform plan`     | Calculates proposed changes                                   |
| `terraform apply`    | Applies changes                                               |
| `terraform destroy`  | Destroys managed infrastructure                               |

Typical workflow:

```bash
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
```

`terraform plan` previews changes; it does not normally make the infrastructure changes itself.

### Q16.54. What is Terraform dependency management?

Terraform builds a dependency graph.

Example:

```hcl
resource "aws_security_group" "web" {
  name   = "web-sg"
  vpc_id = aws_vpc.main.id
}

resource "aws_instance" "app" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  vpc_security_group_ids = [aws_security_group.web.id]
}
```

Terraform understands that the EC2 instance depends on the security group because it references its ID.

This is an implicit dependency.

An explicit dependency can be added using `depends_on`, but it should only be used when Terraform cannot infer the required relationship from references.

### Q16.55. What is Terraform drift?

Drift occurs when actual infrastructure differs from Terraform's expected configuration/state.

Example:

1. Terraform creates a security group allowing port 443.
2. Someone manually changes the AWS security group to allow port 8080.
3. Terraform detects a difference during a subsequent plan or refresh-related operation.

You should review the proposed plan and decide whether to:

- Revert the manual change.
- Update Terraform configuration to reflect the intended change.
- Reconcile state and actual resources appropriately.

Never blindly apply a plan without reviewing unexpected replacements or deletions.

### Q16.56. What are Terraform modules?

A module is a reusable collection of Terraform configuration files.

```text
terraform/
├── main.tf
├── variables.tf
├── outputs.tf
└── modules/
    ├── network/
    │   ├── main.tf
    │   ├── variables.tf
    │   └── outputs.tf
    └── compute/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

Modules help organize infrastructure into reusable components.

### Q16.57. Create a small Terraform AWS example

This example creates an EC2 instance using a dynamic Ubuntu AMI lookup and creates a security group. It intentionally does not expose SSH or HTTP/HTTPS publicly; it is not a complete public web deployment.

`main.tf`:

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "ap-south-1"
}

data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]

  filter {
    name = "name"
    values = [
      "ubuntu/images/hvm-ssd/ubuntu-noble-24.04-amd64-server-*"
    ]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_security_group" "app" {
  name        = "terraform-demo-app"
  description = "Demo application security group"
  vpc_id      = data.aws_vpc.default.id
}

resource "aws_instance" "app" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  subnet_id              = data.aws_subnets.default.ids[0]
  vpc_security_group_ids = [aws_security_group.app.id]

  tags = {
    Name = "terraform-demo-app"
  }
}

output "instance_id" {
  value = aws_instance.app.id
}
```

Run:

```bash
terraform init
terraform fmt
terraform validate
terraform plan
```

Review the plan before creating anything:

```bash
terraform apply
```

After confirming the output, Terraform creates the instance and prints its ID.

Clean up:

```bash
terraform destroy
```

Cost and account caution

This example requires working AWS credentials, a default VPC and a suitable subnet. It creates billable infrastructure. Review your account and region before applying, and destroy resources when no longer needed.

### Q16.58. Terraform vs CloudFormation

| Terraform                                  | AWS CloudFormation                             |
| ------------------------------------------ | ---------------------------------------------- |
| Infrastructure as Code tool from HashiCorp | AWS-native infrastructure provisioning service |
| Uses HCL                                   | Uses JSON or YAML templates                    |
| Supports many providers                    | Primarily AWS-focused                          |
| Uses Terraform state                       | Uses CloudFormation stack state                |
| Broad provider ecosystem                   | Deep AWS service integration                   |
| Uses plan/apply workflow                   | Uses change sets and stack operations          |

Interview answer: I would choose Terraform when I need a consistent IaC workflow across multiple providers or want its module and provider ecosystem. I would consider CloudFormation when the infrastructure is AWS-focused and native AWS integration is the priority.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
