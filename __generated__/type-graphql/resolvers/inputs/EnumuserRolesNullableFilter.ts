import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumuserRolesNullableFilter } from "../inputs/NestedEnumuserRolesNullableFilter";
import { userRoles } from "../../enums/userRoles";

@TypeGraphQL.InputType("EnumuserRolesNullableFilter", {})
export class EnumuserRolesNullableFilter {
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
