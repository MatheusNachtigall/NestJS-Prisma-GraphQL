import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { GraphQLResolveInfo } from 'graphql';
import { GraphqlTransformService } from '../../shared/services/graphql-transform.service';
import { CategoryCreate } from './dto/category.dto';

@Resolver('Category')
export class CategoriesResolver {
	constructor(
		private readonly categoriesService: CategoriesService,
		private graphqlTransform: GraphqlTransformService,
	) {}

	@Mutation('createOneCategory')
	create(@Args('data') inputData: CategoryCreate, @Info() info: GraphQLResolveInfo) {
		const { selectFields } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);
		return this.categoriesService.create(inputData, selectFields);
	}

	@Mutation('createManyCategory')
	createMany(@Args('') inputData: any) {
		return this.categoriesService.createMany(inputData);
	}

	@Query('aggregateCategory')
	aggregate(@Args('') args: any, @Info() info: GraphQLResolveInfo) {
		const { prismaArgs } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);
		return this.categoriesService.aggregate(args, prismaArgs);
	}

	@Query('categories')
	findAll(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const { selectFields } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);
		return this.categoriesService.findAll(object, selectFields);
	}

	@Query('findFirstCategoryOrThrow')
	findFirstCategoryOrThrow(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const { selectFields } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);
		return this.categoriesService.findFirstCategoryOrThrow(object, selectFields);
	}

	@Query('category')
	findUnique(@Args('where') object: any) {
		return this.categoriesService.findUnique(object);
	}

	@Mutation('updateOneCategory')
	update(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const { selectFields } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);
		return this.categoriesService.update(object, selectFields);
	}

	@Mutation('deleteOneCategory')
	deleteOneCategory(@Args('') object: any) {
		return this.categoriesService.deleteOneCategory(object);
	}
}
