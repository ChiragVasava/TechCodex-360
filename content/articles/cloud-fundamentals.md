# Cloud fundamentals

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 28091–28246](/research?document=interview&start=28091&end=28246). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Cloud Computing Fundamentals

### Q16.1. What is cloud computing?

Cloud computing is the delivery of computing resources—such as servers, storage, databases, networking and software—over the internet.

Instead of purchasing and maintaining physical servers yourself, you rent resources from a cloud provider.

Examples:

- Amazon Web Services (AWS).
- Microsoft Azure.
- Google Cloud Platform.

Suppose you develop a Next.js application.

**Without cloud computing:**

```text
Your computer
    ↓
Buy physical server
    ↓
Install operating system
    ↓
Configure networking
    ↓
Deploy application
    ↓
Maintain hardware
```

**With cloud computing:**

```text
Developer
    ↓
Cloud provider
    ↓
Virtual server (EC2)
    ↓
Install Docker
    ↓
Deploy application
    ↓
Users access application
```

The key idea: you consume infrastructure as a service instead of owning and maintaining all the underlying hardware.

### Q16.2. Why do companies use cloud computing?

1. **Scalability:** Increase or decrease computing resources.
2. **Cost flexibility:** Pay for resources used instead of buying all infrastructure upfront.
3. **Availability:** Use multiple availability zones and redundant services.
4. **Global reach:** Deploy applications in different geographical regions.
5. **Managed services:** Reduce infrastructure maintenance.
6. **Automation:** Provision resources using APIs and Infrastructure as Code.

For example, a student management platform may begin with one small server. If traffic increases, the company can add more application instances and distribute traffic between them.

### Q16.3. What are IaaS, PaaS and SaaS?

**IaaS — Infrastructure as a Service**

[Source image reference: IaaS / Infrastructure as a Service | PC・IT用語集](https://images.openai.com/static-rsc-4/A6uUnt87SnIGSMBM6F0jD6cVFpqr-0gbM-6oMB5hbNaK-gmIseJ09q-CbWvvtboKIgnID_G6w5OZ2yYNlVYtO7DZ0kpkV1GCibXOAAOwYen5KcI_U0SPJ14VwclHBlI6DPpIdiWTRmRfIKqtLRPFzVuTBvj2BvRcAGD0fpmufiI?purpose=inline)

[noveblo.com](https://noveblo.com/glossary/iaas.html?utm_source=chatgpt.com)

You rent infrastructure such as virtual machines, storage and networks.

Examples: AWS EC2, Azure Virtual Machines.

You manage the OS, runtime, application and data.

**PaaS — Platform as a Service**

[Source image reference: Platform as a Service (PaaS): Pengertian, Cara Kerja, dan Contoh | Blog Roofel](https://images.openai.com/static-rsc-4/CBm226ZxTCG0kIOq-FYNs812GgMNEtnSMckhKP4YMAje1paepuxbchNwUNrq9NlOecIPHKB53HYjgmAaAoDkfUylMLIkrbecViGihtIaOjrFVc2Fe_HW5I7hRgUpJbmV5WDWmWZbcA4H30VeUYVfnafLmiBDhELgnJ7U1Ccx4Wc?purpose=inline)

[roofel.com](https://roofel.com/blog/pengertian-paas?utm_source=chatgpt.com)

You deploy your application on a managed platform.

Example: Render.

The provider manages much of the underlying infrastructure.

**SaaS — Software as a Service**

[Source image reference: Key Benefits of Custom SaaS Development - DEV Community](https://images.openai.com/static-rsc-4/Msbds0nipxVzAESVsKgxQne3UFV_ag_EnxDsOSVn-Elx-mJRBawcGM9ujj0ayxk98oRriDcEx6LMw_TG6H2-R5M1yE1qz5YNNwWv2SxeDBb1qAEmw4_renW_DcDzrKrl6Dr62l0lfJ0qdTz2CP1vlMQOc48cShgw3vt76rVdAUk?purpose=inline)

[dev.to](https://dev.to/artyom_mukhopad_a9444ed6d/key-benefits-of-custom-saas-development-1fi7?utm_source=chatgpt.com)

You use a complete software product over the internet.

Examples: Gmail, Slack, Microsoft 365.

Interview shortcut:

- IaaS: Rent infrastructure.
- PaaS: Deploy applications on a managed platform.
- SaaS: Use ready-made software.

### Q16.4. Scalability vs elasticity

Scalability means the system can handle increased workload by adding resources.

Elasticity means resources can automatically or dynamically increase and decrease as demand changes.

| Horizontal scaling           | Vertical scaling                     |
| ---------------------------- | ------------------------------------ |
| Add more instances           | Increase resources of an instance    |
| Example: 2 EC2 instances → 5 | Example: small EC2 → larger instance |
| Can improve redundancy       | Has a maximum machine size           |
| Often needs load balancing   | May require downtime                 |

[Source image reference: Scalability — Vertical or Horizontal Scaling when Designing Architectures | by Ahmad Sadiq | Medium](https://images.openai.com/static-rsc-4/82gt-rtDVe_LEjmVqx8MK-bQTx4M1_hNjzX0RavykHvmVaEvGThd1hY4Fj5WPn7RziikSb88_9eGg2d0skkRqLERG96WSYA-iEiaYCInzjRF-TYNkcGWG-8Ralz8BlixY4VDTVPax1Ne-n8tJJBKP4dFq6QW2hpnWiDoQ81cbpo?purpose=inline)

[medium.com](https://medium.com/%40ahmadsadiq885/scalability-vertical-or-horizontal-scaling-when-designing-architectures-931a306e9d68?utm_source=chatgpt.com)

Example:

- Vertical: Upgrade a server from 2 GB RAM to 8 GB RAM.
- Horizontal: Run four application servers instead of one.

### Q16.5. What is high availability?

High availability means designing a system to remain accessible despite individual component failures.

```text
             Users
               |
          Load Balancer
           /       \
        EC2-A      EC2-B
        AZ-1       AZ-2
           \       /
          Shared/managed
          data services
```

If one instance fails, traffic can be directed to a healthy instance.

High availability does not guarantee zero downtime. It requires redundancy, health checks, recovery procedures and careful deployment.

### Q16.6. Region vs Availability Zone

- **Region:** A separate geographical area containing AWS infrastructure.
- **Availability Zone (AZ):** An isolated location within a region containing one or more data centres.

For example, AWS Mumbai is region `ap-south-1`.

A region can have multiple availability zones. Deploying across multiple AZs can improve resilience.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
