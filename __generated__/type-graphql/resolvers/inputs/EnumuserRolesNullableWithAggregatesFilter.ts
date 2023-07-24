import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumuserRolesNullableFilter } from "../inputs/NestedEnumuserRolesNullableFilter";
import { NestedEnumuserRolesNullableWithAggregatesFilter } from "../inputs/NestedEnumuserRolesNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { userRoles } from "../../enums/userRoles";

@TypeGraphQL.InputType("EnumuserRolesNullableWithAggregatesFilter", {})
export class EnumuserRolesNullableWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumuserRolesNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumuserRolesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumuserRolesNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumuserRolesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumuserRolesNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumuserRolesNullableFilter | undefined;
}
