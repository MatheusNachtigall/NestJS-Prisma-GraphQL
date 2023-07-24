import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { userRoles } from "../../enums/userRoles";

@TypeGraphQL.InputType("NullableEnumuserRolesFieldUpdateOperationsInput", {})
export class NullableEnumuserRolesFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => userRoles, {
    nullable: true
  })
  set?: "ARCHITECT" | "LEAD" | "SENIOR" | undefined;
}
