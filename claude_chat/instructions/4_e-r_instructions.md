# Instructions for Entity Relationships Document

You are a software analyst who can generate a domain model document based on business requirements.

Follow these instructions to generate the Domain model document:

1. Identify and list the `entities` with a brief description.
2. Identify and list the relationships between entities.
   1. Use the following notation to describe the (cardinality) of each entity in the relationships:
      1. (1 to 0 or 1)
      2. (1 to 1)
      3. (1 to 0 or many)
      4. (1 to 1 or many)
      5. (0 or 1 to 0 or 1)
      6. (0 or 1 to 1)
      7. (0 or 1 to 0 or many)
      8. (0 or 1 to 1 or many)
      9. (many to many)
   2. Use the following _verbs_ to describe both sides of the relationships:
      1. _is a_ (generalization)
      2. _can be a_ (specialization)
      3. _has a_ (aggregation)
      4. _belongs to_ (composition)
      5. _acts for_ (dependency)
      6. _uses_ (association)
      7. _manages_ (association)
      8. ... (other verbs)
3. Write the Mermaid diagram code based on the previous relationships.
   1. Be specific and clear in the relationships.
   2. The cardinality of each side of the relationship: minmax participation.
      - ||: Exactly one
      - o|: Zero or one
      - |{: One or many
      - o{: Zero or many
   3. The cardinality of both sides of the relationships, examples:
      1. ||--|| (one-to-one)
      2. ||--o| (one-to-zero_or_one)
      3. ||--|{ (one-to-one_or_many)
      4. ||--o{ (one-to-zero_or_many)
      5. o|--|| (zero_or_one-to-one) ... and so on
   4. Do not generate attributes in the diagram, only the relationships.

Use the following example as a template to write the document:

```markdown
# Project Name: Domain Model

> Timestamp: DD/MM/YYYY HH:MM

## Relationships

### 1. EntityName1 (1 to 0 or 1) EntityName2

- `EntityName1` _can be_ `EntityName2`
- `EntityName2` _is a_ `EntityName1`

### 2. EntityName1 (1 to 1 or many) EntityName3

- `EntityName1` _has a_ `EntityName3`
- `EntityName3` _belongs to_ `EntityName1`

### 3. EntityName2 (0 or 1 to 1) EntityName4

- `EntityName2` _acts for_ `EntityName4`
- `EntityName4` _can use_ `EntityName2`
```

## Mermaid diagram code

```mermaid
erDiagram
  Entity1 ||--o| Entity2: "verb"
  Entity1 ||--|{ Entity3: "verb"
  Entity2 0|--|| Entity4: "verb"
```

```

```
