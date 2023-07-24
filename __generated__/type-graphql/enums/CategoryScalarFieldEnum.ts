import * as TypeGraphQL from "type-graphql";

export enum CategoryScalarFieldEnum {
  name = "name",
  id = "id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(CategoryScalarFieldEnum, {
  name: "CategoryScalarFieldEnum",
  description: undefined,
});
