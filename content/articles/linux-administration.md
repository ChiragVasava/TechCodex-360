# Linux administration

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 28335–28645](/research?document=interview&start=28335&end=28645). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Linux and Server Administration

Cloud servers commonly run Linux. You should be comfortable navigating directories, managing processes, inspecting logs and diagnosing network problems.

### Q16.10. What is Linux?

Linux is an open-source, Unix-like operating system kernel. Linux distributions combine the kernel with system utilities, libraries and package management.

Common distributions:

- Ubuntu.
- Debian.
- Amazon Linux.
- Red Hat Enterprise Linux.
- Fedora.

Your GramSaarthi and UniNest deployment experience includes Ubuntu-based EC2 servers.

### Q16.11. Important Linux commands

| Command | Purpose                | Example                       |
| ------- | ---------------------- | ----------------------------- |
| `pwd`   | Current directory      | `pwd`                         |
| `ls`    | List files             | `ls -la`                      |
| `cd`    | Change directory       | `cd /var/www`                 |
| `mkdir` | Create directory       | `mkdir app`                   |
| `cp`    | Copy files             | `cp app.env backup.env`       |
| `mv`    | Move/rename            | `mv old.txt new.txt`          |
| `rm`    | Remove files           | `rm old.txt`                  |
| `cat`   | Display file           | `cat app.log`                 |
| `grep`  | Search text            | `grep ERROR app.log`          |
| `find`  | Find files             | `find . -name "*.log"`        |
| `chmod` | Change permissions     | `chmod 600 key.pem`           |
| `ps`    | Inspect processes      | `ps aux`                      |
| `top`   | Monitor processes      | `top`                         |
| `kill`  | Send signal to process | `kill 1234`                   |
| `curl`  | Make HTTP requests     | `curl -I https://example.com` |
| `ssh`   | Connect remotely       | `ssh user@server-ip`          |

#### Practical server diagnosis

Check the current directory:

```bash
pwd
```

List hidden files and permissions:

```bash
ls -lah
```

Find a Docker Compose file:

```bash
find / -name "docker-compose.yml" 2>/dev/null
```

Search application logs:

```bash
grep -i "error" app.log
```

Watch logs continuously:

```bash
tail -f app.log
```

Check listening ports:

```bash
sudo ss -tulpn
```

Check disk usage:

```bash
df -h
```

Check directory sizes:

```bash
du -sh /var/lib/docker
```

Check memory:

```bash
free -h
```

Check running processes:

```bash
ps aux
```

### Q16.12. What are Linux file permissions?

Linux permissions define who can read, write or execute a file.

Three categories:

- `u`: Owner.
- `g`: Group.
- `o`: Others.

Three main permissions:

- `r`: Read = 4.
- `w`: Write = 2.
- `x`: Execute = 1.

Example:

```bash
chmod 755 deploy.sh
```

| User category | Permission             | Numeric value |
| ------------- | ---------------------- | ------------- |
| Owner         | Read + write + execute | 7             |
| Group         | Read + execute         | 5             |
| Others        | Read + execute         | 5             |

For an SSH private key:

```bash
chmod 400 my-key.pem
```

This restricts access to the file owner.

Do not use `chmod 777` as a generic permission fix. It grants everyone read, write and execute permissions and can create security problems.

### Q16.13. How do you connect to an AWS EC2 instance using SSH?

Typical command:

```bash
ssh -i my-key.pem ubuntu@<EC2_PUBLIC_IP>
```

- `-i`: Specifies the private key.
- `my-key.pem`: SSH private key.
- `ubuntu`: Common default username for Ubuntu AMIs.
- `EC2_PUBLIC_IP`: Public IP of the instance.

Possible errors:

**Permission denied (publickey)**

Check:

1. Correct username.
2. Correct private key.
3. File permissions.
4. Key pair associated with the instance.

**Connection timed out**

Check:

1. Instance state.
2. Public IP.
3. Security group inbound SSH rule.
4. Network ACL and routing.
5. Whether SSH is listening.

For GramSaarthi, AWS Systems Manager (SSM) provides an alternative administrative access route without requiring ordinary inbound SSH access, when the instance and IAM configuration are correctly set up.

### Q16.14. What is systemctl?

`systemctl` manages services on Linux systems using systemd.

```bash
sudo systemctl status docker
sudo systemctl start docker
sudo systemctl stop docker
sudo systemctl restart docker
sudo systemctl enable docker
```

- `start`: Starts a service.
- `stop`: Stops a service.
- `restart`: Restarts a service.
- `enable`: Configures a service to start automatically at boot.
- `status`: Shows current status.

View logs:

```bash
sudo journalctl -u docker -n 100
```

Follow logs:

```bash
sudo journalctl -u docker -f
```

### Q16.15. How do environment variables configure a deployed service?

Environment variables are key-value configuration values made available to processes.

Example:

```bash
export NODE_ENV=production
export PORT=3000
```

Read them:

```bash
echo $NODE_ENV
echo $PORT
```

In Python:

```python
import osport = os.getenv("PORT", "8000")print(port)
```

In Node.js:

```javascript
console.log(process.env.PORT);
```

Typical environment variables:

```text
DATABASE_URL
JWT_SECRET
GEMINI_API_KEY
PORT
NODE_ENV
```

**Security rule:** Do not commit secrets or production `.env` files to Git.

### Q16.16. What are pipes and redirection?

A pipe sends the output of one command to another.

```bash
ps aux | grep node
```

This filters process output to find Node.js processes.

Redirection:

```bash
echo "Deployment started" > deploy.log
```

Overwrites the file.

```bash
echo "Deployment complete" >> deploy.log
```

Appends to the file.

Send error output to a file:

```bash
command 2> error.log
```

Send both normal and error output to one file:

```bash
command > output.log 2>&1
```

### Q16.17. What is curl used for in production troubleshooting?

`curl` can test HTTP endpoints from the server itself.

Check application health:

```bash
curl -i http://localhost:3000/health
```

Check response headers:

```bash
curl -I https://example.com
```

Test an API:

```bash
curl -X POST http://localhost:8000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Chirag","email":"chirag@example.com"}'
```

This is useful for distinguishing application problems from reverse proxy, DNS or browser-side problems.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
