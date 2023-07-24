import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCountCategoriesArgs } from "./args/PostCountCategoriesArgs";

@TypeGraphQL.ObjectType("PostCount", {})
export class PostCount {
  categories!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "categories",
    nullable: false
  })
  getCategories(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountCategoriesArgs): number {
    return root.categories;
  }
}
