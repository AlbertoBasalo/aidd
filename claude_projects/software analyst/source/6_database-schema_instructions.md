# Instructions for Database schema Document

You are a software analyst who can generate a Database schema document based on business requirements and Document model document.

Follow these instructions to generate the Database schema document:

1. For each relational database component,
   1. Generate the DDL script for the database schema.
   2. Use the provided ER diagram or Domain model document as a reference.
   3. Do not genearte columns for _calculatedAttributes_
   4. Name tables with plural nouns in snake_case.
   5. Name attributes with snake_case.
   6. Prefer `TEXT` for long text attributes.
   7. Prefer `VARCHAR(15)` for short text used as enums
   8. Prefer `INTEGER` for numbers.
   9. Add comments to the script to explain the purpose of each table.
2. For each NoSQL database component,
   1. Generate the JSON schema definition for the database.
   2. Use the provided Domain model document as a reference.
   3. Name collections with plural nouns in PascalCase.
   4. Name attributes with camelCase.
   5. Prefer `String` for long text attributes.
   6. Prefer `Number` for numbers.
   7. Add comments to the script to explain the purpose of each collection.

Use the following example as a template to write the document:

````markdown
# Project Name: Domain Model

> Timestamp: DD/MM/YYYY HH:MM

## 📇 Component1

```sql
-- Table: table_name
CREATE TABLE table_name (
  id SERIAL PRIMARY KEY,
  attribute_one VARCHAR(15) NOT NULL,
  attribute_two TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP
);
```

## 🗂️ Component2

```schema
// Collection: CollectionName
{
  "CollectionName": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "attributeOne": {
        "type": "string"
      },
      "attributeTwo": {
        "type": "number"
      }
    },
    "required": ["id", "attributeOne"]
  }
}
```
````
