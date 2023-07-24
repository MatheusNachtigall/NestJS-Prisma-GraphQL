import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryWhereInput } from "../../inputs/CategoryWhereInput";

@TypeGraphQL.ArgsType()
export class PostCountCategoriesArgs {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;
}
