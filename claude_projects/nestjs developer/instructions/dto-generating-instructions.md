# DTO generating instructions

## Input

You will be provided with a set of entities with their attributes and types.
For each Entity, you will find a list the attributes with a brief description and the following conventions:

1.  Use cameCaseName for attributes.
2.  Use **bold** for mandatory attributes.
3.  Use _italic_ for a calculated attribute.
4.  Name **id** for the primary key attribute.
5.  Name foreignId or **foreignId** for the primary key of another entity.
6.  Use [brackets] for the attribute allowed values.
7.  Use (range) for the attribute value range.
8.  Use `Type` for the attribute type.

## Output

When creating Data Transfer Objects (DTOs) for a NestJS project, follow these guidelines:

1. File Naming Convention:

   - Use the format `entity_name.dto.ts` for all DTO files.
   - Example: `user.dto.ts`, `customer.dto.ts`, `booking.dto.ts`

2. DTO Structure:

   - Create three classes per entity:
     a. EntityDTO: for responses and queries, with no validation decorators.
     b. CreateEntityDTO: for creating new entities, with validation decorators.
     c. UpdateEntityDTO: for partial updating entities, extending CreateEntityDTO.

3. Imports:

   - Import validation decorators from 'class-validator'.
   - Import PartialType from '@nestjs/mapped-types'.

4. Validation:

   - Do not use validation decorators in the main EntityDTO class.
   - Apply appropriate validation decorators to CreateEntityDTO properties.
   - Use @IsOptional() for non-required fields in CreateEntityDTO.

5. Enums:

   - Define enums within the DTO file if they are specific to that entity.
   - Use @IsEnum() decorator for enum fields in CreateEntityDTO.

6. Calculated Fields:

   - Include calculated fields in the main EntityDTO.
   - Omit calculated fields from CreateEntityDTO and UpdateEntityDTO.

7. UpdateEntityDTO:

   - Use `extends PartialType(CreateEntityDTO)` to create UpdateEntityDTO.
   - This makes all fields optional for partial updates.

8. Comments:

   - Add a brief JSDoc comment above each DTO class explaining its purpose.

9. Optional Fields:

   - Use the `?` operator for optional fields in the main EntityDTO.
   - In CreateEntityDTO, use @IsOptional() decorator for optional fields.

10. Date and Time:

    - Use the `Date` type for date and datetime fields.
    - Apply @IsDate() decorator in CreateEntityDTO for date fields.

11. IDs and Foreign Keys:
    - Use string type for IDs and foreign keys (assuming UUID).
    - Apply @IsUUID() decorator in CreateEntityDTO for ID fields.

### Extra

Separate each property with a blank newline.
