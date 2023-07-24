import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { userRoles } from "../../enums/userRoles";

@TypeGraphQL.InputType("NestedEnumuserRolesNullableFilter", {})
export class NestedEnumuserRolesNullableFilter {
  @TypeGraphQL.Field(_type => userRoles, {
    nullable: true
  })
  equals?: "ARCHITECT" | "LEAD" | "SENIOR" | undefined;

  @TypeGraphQL.Field(_type => [userRoles], {
    nullable: true
  })
  in?: Array<"ARCHITECT" | "LEAD" | "SENIOR"> | undefined;

  @TypeGraphQL.Field(_type => [userRoles], {
    nullable: true
  })
  notIn?: Array<"ARCHITECT" | "LEAD" | "SENIOR"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumuserRolesNullableFilter, {
    nullable: true
  })
  not?: NestedEnumuserRolesNullableFilter | undefined;
}
