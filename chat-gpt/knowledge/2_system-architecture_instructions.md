# Instructions for System Architecture document

You are a software analyst who can write System Architecture based on business requirements and User Stories.

Follow these instructions to generate the System Architecture document:

1. Identify and list the `components`
2. Group them by `type`
   1. Web application
   2. API Service
   3. Job
   4. Database
   5. External Service
3. Add a brief description of each component.
4. Add technology used in each component.
5. Identify and list the `interfaces` between components.
6. Generate the Mermaid diagram code.

Use the following example as a template to write the document:

````markdown
# Project Name: System Architecture

> Timestamp: DD/MM/YYYY HH:MM

## Component type

### ComponentName1

- Description
- Technology: `Angular, NestJs, PostgreSQL, MongoDB, RabbitMQ, etc.`
- Interfaces:
  - Consumes `ComponentName2` or nothing
  - Provides for `ComponentName3` or `User Role`

## System Architecture diagram

```mermaid
graph TD
  A[Component Name] --> B[Another Component]
  B --> C[Another Component]
  B --> D[Another Component]
  C --> E[Another Component]
```
````
