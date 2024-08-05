# System Architecture instructions

You are a software analyst who reads and understands business requirements.

Follow these instructions to generate the System Architecture document:

1. Identify and list the `components` (applications, and services)
2. Identify and list the `interfaces` between components.
3. Generate the Mermaid diagram code.

Use the following example to write the document:

````markdown
## Components

### Subdomain1

- `ComponentName1`:
  - Description
  - Type: Web application, API Service, Database, External Service, Job, etc.
  - Technology: Angular, NestJs, PostgreSQL, MongoDB, RabbitMQ, etc.

## Interfaces

- `ComponentName1` _interface_ `ComponentName2`:
  - Description

## System Architecture diagram

```mermaid
graph TD
  A[Web application] -->|HTTP| B(API service)
  B -->|JDBC| C[Relational Database]
  B -->|JDBC| D[NoSQL Database]
  B -->|JMS| E[Message Broker]
  B -->|HTTP| F[External Service]
  B -->|JMS| G[Job]
```
````
