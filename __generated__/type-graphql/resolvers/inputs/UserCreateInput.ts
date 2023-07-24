import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedManyWithoutUserInput } from "../inputs/PostCreateNestedManyWithoutUserInput";
import { userRoles } from "../../enums/userRoles";

@TypeGraphQL.InputType("UserCreateInput", {})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => userRoles, {
    nullable: true
  })
  role?: "ARCHITECT" | "LEAD" | "SENIOR" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutUserInput | undefined;
}
