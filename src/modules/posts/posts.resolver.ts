import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Prisma } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { transformArgsIntoSelectRelations, transformInfoIntoPrismaArgs } from 'src/helpers/helpers';

@Resolver('Post')
export class PostsResolver {
	constructor(private readonly postsService: PostsService) {}

	@Mutation('createOnePost')
	create(@Args('') inputData: any, @Info() info: GraphQLResolveInfo) {
		const PostInput: Prisma.PostCreateInput = inputData.data;
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		const selectFields = transformArgsIntoSelectRelations(prismaArgs);
		return this.postsService.create(PostInput, selectFields);
	}

	@Mutation('createManyPost')
	createMany(@Args('') inputData: any) {
		return this.postsService.createMany(inputData);
	}

	@Query('aggregatePost')
	aggregate(@Args('') args: any, @Info() info: GraphQLResolveInfo) {
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		return this.postsService.aggregate(args, prismaArgs);
	}

	@Query('posts')
	findAll(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		const selectFields = transformArgsIntoSelectRelations(prismaArgs);

		return this.postsService.findAll(object, selectFields);
	}

	@Query('findFirstPostOrThrow')
	findFirstPostOrThrow(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		const selectFields = transformArgsIntoSelectRelations(prismaArgs);
		return this.postsService.findFirstPostOrThrow(object, selectFields);
	}

	@Query('post')
	findUnique(@Args('where') object: any, @Info() info: GraphQLResolveInfo) {
		return this.postsService.findUnique(object);
	}

	@Mutation('updateOnePost')
	update(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		const selectFields = transformArgsIntoSelectRelations(prismaArgs);
		return this.postsService.update(object, selectFields);
	}

	@Mutation('deleteOnePost')
	deleteOnePost(@Args('') object: any) {
		console.log('id: ' + JSON.stringify(object));
		return this.postsService.deleteOnePost(object);
	}
}
