import * as TypeGraphQL from "type-graphql";

export enum PostScalarFieldEnum {
  title = "title",
  userId = "userId",
  id = "id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});
