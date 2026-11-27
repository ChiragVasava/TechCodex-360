# AWS

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 29098–29518](/research?document=interview&start=29098&end=29518). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## AWS Fundamentals and Networking

### Q16.30. What is AWS EC2?

Amazon EC2 stands for Elastic Compute Cloud.

It provides virtual machines called instances.

An EC2 instance can run:

- Ubuntu.
- Amazon Linux.
- Windows Server.
- Web servers.
- APIs.
- Docker containers.
- Background workers.

Example:

```text
AWS Region: ap-south-1
       |
       v
EC2 Instance
       |
       v
Ubuntu Linux
       |
       v
Docker
       |
       v
Next.js Application
```

### Q16.31. What is an AMI?

AMI stands for Amazon Machine Image.

It is a template used to launch an EC2 instance.

An AMI includes information such as:

- Operating system.
- Root volume configuration.
- Preinstalled software.
- Launch permissions and metadata.

You can choose an Ubuntu AMI or Amazon Linux AMI when creating an instance.

### Q16.32. What is an EC2 instance type?

An instance type determines the compute resources available to an EC2 instance.

Example:

```text
t3.micro
```

The instance family and size influence CPU, memory, networking and other characteristics.

Common categories:

- General purpose.
- Compute optimized.
- Memory optimized.
- Storage optimized.
- Accelerated computing.

For a small Next.js project, a small instance may be sufficient initially, but workload, memory usage, storage and build requirements determine the correct size.

### Q16.33. What is a VPC?

Amazon VPC stands for Virtual Private Cloud.

It is a logically isolated network in AWS where you launch resources.

A VPC defines the network address range and contains subnets, route tables and network controls.

Example:

```text
VPC: 10.0.0.0/16
       |
       +----------------------+
       |                      |
 Public subnet           Private subnet
 10.0.1.0/24             10.0.2.0/24
       |                      |
   EC2 web server          Database
```

### Q16.34. What is a subnet?

A subnet is a subdivision of a VPC's IP address range.

Subnets are associated with an availability zone.

Two common types:

- **Public subnet:** Has a route to an Internet Gateway.
- **Private subnet:** Does not provide direct inbound internet routing through an Internet Gateway.

A subnet is not public merely because its name says `public`; its route table and resource addressing determine connectivity.

### Q16.35. What is an Internet Gateway?

An Internet Gateway enables communication between a VPC and the internet for resources with suitable routes and addressing.

Example public subnet route:

```text
Destination       Target
10.0.0.0/16       local
0.0.0.0/0         Internet Gateway
```

The route to the Internet Gateway alone does not make every instance internet-accessible. Public IP addressing and security rules also matter.

### Q16.36. What is a route table?

A route table contains rules that determine where network traffic is directed.

Example:

| Destination   | Target           |
| ------------- | ---------------- |
| `10.0.0.0/16` | Local VPC        |
| `0.0.0.0/0`   | Internet Gateway |

The route table is associated with one or more subnets.

### Q16.37. What is a Security Group?

AWS Security Groups control inbound and outbound network traffic for supported AWS resources such as EC2 instances.

Example web server security group:

| Direction | Protocol    | Port        | Source                                |
| --------- | ----------- | ----------- | ------------------------------------- |
| Inbound   | TCP         | 80          | `0.0.0.0/0`                           |
| Inbound   | TCP         | 443         | `0.0.0.0/0`                           |
| Inbound   | TCP         | 22          | Restricted admin IP, if SSH is needed |
| Outbound  | As required | As required | As required                           |

Security groups are stateful: return traffic for an allowed connection is automatically permitted.

Security best practice: Never expose SSH to the entire internet as a default configuration. Prefer SSM where practical.

### Q16.38. Security Group vs Network ACL

| Security Group                          | Network ACL                    |
| --------------------------------------- | ------------------------------ |
| Applies to network interfaces/resources | Applies at subnet boundary     |
| Stateful                                | Stateless                      |
| Supports allow rules                    | Supports allow and deny rules  |
| Rules evaluated together                | Rules evaluated by rule number |

Remember:

- Security Group: Instance-level control.
- Network ACL: Subnet-level control.

### Q16.39. Public IP vs Elastic IP

A public IP enables internet routing to a resource when the network is configured appropriately.

An Elastic IP is a static public IPv4 address allocated to your AWS account that can be associated with supported resources.

Why use an Elastic IP?

A stable address can be useful when DNS or external systems need a fixed IP endpoint.

An Elastic IP has billing implications, so check current AWS pricing and avoid leaving unused addresses allocated.




## AWS Services Relevant to Your Projects

### Q16.40. What is IAM?

AWS IAM stands for Identity and Access Management.

IAM controls who can access AWS resources and what actions they can perform.

| Concept          | Meaning                                          |
| ---------------- | ------------------------------------------------ |
| User             | Identity for a person or application             |
| Group            | Collection of IAM users                          |
| Role             | Identity that can be assumed by trusted entities |
| Policy           | JSON document defining permissions               |
| Instance profile | Mechanism to provide an IAM role to EC2          |

Example policy concept:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": "arn:aws:s3:::my-app-bucket/backups/*"
    }
  ]
}
```

This allows reading objects under the specified backup prefix, subject to the rest of the effective permission configuration.


### Q16.41. What is AWS Systems Manager (SSM)?

AWS Systems Manager provides tools to manage and operate AWS infrastructure.

One particularly useful feature is Session Manager.

It can let authorized administrators access an EC2 instance without opening inbound SSH port 22, provided:

- The SSM Agent is installed and running.
- The instance has an appropriate IAM role.
- Network connectivity to Systems Manager endpoints exists.
- The user has appropriate IAM permissions.

```text
Administrator
      |
      v
AWS Console / CLI
      |
      v
Systems Manager
      |
      v
SSM Agent on EC2
      |
      v
Shell session
```

This improves administrative access control and can support auditability.

### Q16.42. What is Amazon S3?

Amazon S3 is an object storage service.

It is commonly used for:

- Backups.
- Uploaded documents.
- Images and videos.
- Logs and reports.
- Static assets.
- Build artifacts.

S3 stores objects inside buckets.

```text
Bucket: gramsaarthi-backups

  database/
    backup-2026-11-05.sql

  reports/
    monthly-report.pdf

  logs/
    application.log
```

Important features:

- Versioning.
- Lifecycle rules.
- Encryption.
- Access policies.
- Replication.
- Object retention controls.

Your GramSaarthi documentation describes S3 usage for database backups and report/artifact archiving.

### Q16.43. What is CloudWatch?

Amazon CloudWatch is AWS's monitoring and observability service.

It can collect and display:

- Metrics.
- Logs.
- Alarms.
- Dashboards.
- Events.

Example monitoring flow:

```text
EC2
 |
 +---- CPU metrics
 |
 +---- CloudWatch Agent
          |
          +---- Memory metrics
          |
          +---- Disk metrics
                    |
                    v
                CloudWatch
                    |
                    v
                  Alarm
                    |
                    v
              Notification
```

Important distinction:

- EC2 basic monitoring provides standard instance metrics.
- Memory and disk utilization generally require the CloudWatch Agent or another appropriate collection mechanism.

Example:

```text
CPU Utilization > 80%
for 5 minutes
       ↓
CloudWatch Alarm
       ↓
SNS notification
```

Your GramSaarthi hands-on documentation describes CPU, RAM and disk monitoring, alarms and operational notifications.

### Q16.44. What is an Application Load Balancer?

AWS Application Load Balancer (ALB) distributes HTTP and HTTPS traffic across registered targets.

It operates at Layer 7 of the OSI model.

```text
                 Users
                   |
                   v
           Application Load Balancer
                   |
              Target Group
               /       \
              v         v
            EC2-A     EC2-B
```

Important concepts:

- **Listener:** Accepts connections on a port.
- **Listener rule:** Defines routing conditions.
- **Target group:** Contains destinations for requests.
- **Health check:** Checks target health.
- **TLS certificate:** Enables HTTPS at the load balancer.

A target can be marked unhealthy if it fails the configured health checks.

Why use an ALB?

- Distributes traffic.
- Performs health checks.
- Supports path-based routing.
- Supports host-based routing.
- Can terminate TLS.
- Can improve application availability when multiple healthy targets exist.

Your GramSaarthi deployment notes describe target groups, health probing, SSL offloading and routing behaviour.

### Q16.45. How do these AWS services work together?

Here is a representative deployment architecture:

```text
                         Users
                           |
                           v
                      DNS / HTTPS
                           |
                           v
                  Application Load Balancer
                           |
                           v
                      Target Group
                           |
                           v
                      EC2 Instance
                           |
                 +---------+---------+
                 |                   |
                 v                   v
              Docker              CloudWatch
                 |                   |
                 v                   v
            Next.js App          Metrics / Logs
                 |
                 v
             Caddy / API

EC2 IAM Role
     |
     +------> SSM
     |
     +------> S3
     |
     +------> CloudWatch
```

This is a conceptual architecture showing the services and their relationships. Exact request routing and the placement of Caddy versus ALB depend on the deployed configuration.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
