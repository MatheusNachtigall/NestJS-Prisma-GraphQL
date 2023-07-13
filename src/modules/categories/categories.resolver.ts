import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Prisma } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { transformArgsIntoSelectRelations, transformInfoIntoPrismaArgs } from 'src/helpers/helpers';

@Resolver('Category')
export class CategoriesResolver {
	constructor(private readonly categoriesService: CategoriesService) {}

	@Mutation('createOneCategory')
	create(@Args('') inputData: any, @Info() info: GraphQLResolveInfo) {
		const CategoryInput: Prisma.CategoryCreateInput = inputData.data;
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		const selectFields = transformArgsIntoSelectRelations(prismaArgs);
		return this.categoriesService.create(CategoryInput, selectFields);
	}

	@Mutation('createManyCategory')
	createMany(@Args('') inputData: any) {
		return this.categoriesService.createMany(inputData);
	}

	@Query('aggregateCategory')
	aggregate(@Args('') args: any, @Info() info: GraphQLResolveInfo) {
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		return this.categoriesService.aggregate(args, prismaArgs);
	}

	@Query('categories')
	findAll(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		const selectFields = transformArgsIntoSelectRelations(prismaArgs);

		return this.categoriesService.findAll(object, selectFields);
	}

	@Query('findFirstCategoryOrThrow')
	findFirstCategoryOrThrow(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		const selectFields = transformArgsIntoSelectRelations(prismaArgs);
		return this.categoriesService.findFirstCategoryOrThrow(object, selectFields);
	}

	@Query('category')
	findUnique(@Args('where') object: any, @Info() info: GraphQLResolveInfo) {
		return this.categoriesService.findUnique(object);
	}

	@Mutation('updateOneCategory')
	update(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		const selectFields = transformArgsIntoSelectRelations(prismaArgs);
		return this.categoriesService.update(object, selectFields);
	}

	@Mutation('deleteOneCategory')
	deleteOneCategory(@Args('') object: any) {
		console.log('id: ' + JSON.stringify(object));
		return this.categoriesService.deleteOneCategory(object);
	}
}
