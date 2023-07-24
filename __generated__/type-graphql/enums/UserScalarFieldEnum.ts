import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  name = "name",
  email = "email",
  role = "role",
  id = "id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
