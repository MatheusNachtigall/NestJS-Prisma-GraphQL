import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { GraphQLResolveInfo } from 'graphql';
import { PostCreate } from './dto/post.dto';
import { GraphqlTransformService } from '../../shared/services/graphql-transform.service';

@Resolver('Post')
export class PostsResolver {
	constructor(private readonly postsService: PostsService, private graphqlTransform: GraphqlTransformService) {}

	@Mutation('createOnePost')
	create(@Args('data') inputData: PostCreate, @Info() info: GraphQLResolveInfo) {
		const { selectFields } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);
		return this.postsService.create(inputData, selectFields);
	}

	@Mutation('createManyPost')
	createMany(@Args('') inputData: any) {
		return this.postsService.createMany(inputData);
	}

	@Query('aggregatePost')
	aggregate(@Args('') args: any, @Info() info: GraphQLResolveInfo) {
		const { prismaArgs } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);
		return this.postsService.aggregate(args, prismaArgs);
	}

	@Query('post')
	findUnique(@Args('where') object: any) {
		return this.postsService.findUnique(object);
	}

	@Query('posts')
	findAll(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const { selectFields } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);

		return this.postsService.findAll(object, selectFields);
	}

	@Query('findFirstPostOrThrow')
	findFirstPostOrThrow(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const { selectFields } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);

		return this.postsService.findFirstPostOrThrow(object, selectFields);
	}

	@Mutation('updateOnePost')
	update(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const { selectFields } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);

		return this.postsService.update(object, selectFields);
	}

	@Mutation('deleteOnePost')
	deleteOnePost(@Args('') object: any) {
		console.log('id: ' + JSON.stringify(object));
		return this.postsService.deleteOnePost(object);
	}
}
