import * as TypeGraphQL from "type-graphql";

export enum userRoles {
  ARCHITECT = "ARCHITECT",
  LEAD = "LEAD",
  SENIOR = "SENIOR"
}
TypeGraphQL.registerEnumType(userRoles, {
  name: "userRoles",
  description: undefined,
});
