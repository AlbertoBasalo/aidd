# Instructions for Domain Model Document

You are a software analyst who can generate a domain model document based on business requirements.

Follow these instructions to generate the Domain model document:

1. Identify and list the `entities` with a brief description.
   1. Group them by `subdomain`.
2. Identify and list the relationships between entities.
   1. Use the following _verbs_ to describe the relationships:
      1. _is a_ (generalization)
      2. _has a_ (aggregation)
      3. _belongs to_ (composition)
      4. _acts for_ (dependency)
      5. _uses_ (association)
      6. _manages_ (association)
      7. ... (other verbs)
   2. Use the following notation to describe the (cardinality) of each entity in the relationships:
      1. 0 (zero)
      2. 1 (one)
      3. M (many)
      4. 0..1 (zero or one)
      5. 0..M (zero or many)
      6. 1..M (one or many)
   3. Combine the cardinality in the form (0 to 1), (1 to 0..M), etc.
   4. Write the both sides of the relationship.
      1. `Entity1` _relationship_ `Entity2`
      2. `Entity2` _relationship_ `Entity1`
3. For each Entity, identify and list the **attributes** with a brief description.
   1. User camel case for the attribute names.
   2. Use **bold** for mandatory attributes.
   3. Use [brackets] for the attribute allowed values.
   4. Use (range) for the attribute value range.
   5. Use `Type` for the attribute type.
   6. User `%` for a calculated attribute.
4. Write the Mermaid diagram code based on the previous relationships.
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

Use the following example as a template to write the document:

````markdown
# Project Name: Domain Model

> Timestamp: DD/MM/YYYY HH:MM

## Entities

### Subdomain1

- `EntityName1`: Description

### Subdomain2

- `EntityName2`: Description

## Relationships

1. `EntityName1` _relationship_ `EntityName2`: (0 to 1) _verb_ (1 to M)

## Attribute details

### `EntityName1`

- **attribute1**: Description `UUID`

- attribute2: Description [Allowed values] ``Text`

- attribute3: Description (Range) `Integer`

## Mermaid diagram code

```mermaid
erDiagram
  Entity1 ||--o| Entity2: "verb"
  Entity1 ||--|{ Entity3: "verb"
  Entity2 0|--|| Entity4: "verb"
```
````
