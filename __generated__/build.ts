import "reflect-metadata";
import { buildSchema } from 'type-graphql';
import path from 'path';
import { resolvers } from "./type-graphql";

async function main() {
	const schema = await buildSchema({
		resolvers,
		emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
		validate: false,
	});

	console.log("Schema has been generated...");
}
main();





// import {
//   UserRelationsResolver,
//   PostRelationsResolver,
//   FindUniquePostResolver,
//   FindManyPostResolver,
//   FindUniqueUserResolver,
//   FindManyUserResolver,
//   AggregatePostResolver,
//   AggregateUserResolver,
//   // PostCrudResolver,
//   // UserCrudResolver,
// } from "./prisma/generated/type-graphql";

//   resolvers: [
//     UserRelationsResolver,
//     PostRelationsResolver,
//     // instead of PostCrudResolver, expose only find and aggregate  actions
//     FindUniquePostResolver,
//     FindManyPostResolver,
//     AggregatePostResolver,
//     // instead of UserCrudResolver, expose only find and aggregate actions
//     FindUniqueUserResolver,
//     FindManyUserResolver,
//     AggregateUserResolver,
//   ],
