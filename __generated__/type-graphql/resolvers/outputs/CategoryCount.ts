import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCountPostsArgs } from "./args/CategoryCountPostsArgs";

@TypeGraphQL.ObjectType("CategoryCount", {})
export class CategoryCount {
  posts!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "posts",
    nullable: false
  })
  getPosts(@TypeGraphQL.Root() root: CategoryCount, @TypeGraphQL.Args() args: CategoryCountPostsArgs): number {
    return root.posts;
  }
}
