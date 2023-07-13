import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { transformArgsIntoSelectRelations, transformInfoIntoPrismaArgs } from 'src/helpers/helpers';

@Resolver('User')
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Mutation('createOneUser')
	create(@Args('') inputData: any, @Info() info: GraphQLResolveInfo) {
		const UserInput: Prisma.UserCreateInput = inputData.data;
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		const selectFields = transformArgsIntoSelectRelations(prismaArgs);
		return this.usersService.create(UserInput, selectFields);
	}

	@Mutation('createManyUser')
	createMany(@Args('') inputData: any) {
		return this.usersService.createMany(inputData);
	}

	@Query('aggregateUser')
	aggregate(@Args('') args: any, @Info() info: GraphQLResolveInfo) {
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		return this.usersService.aggregate(args, prismaArgs);
	}

	@Query('users')
	findAll(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		const selectFields = transformArgsIntoSelectRelations(prismaArgs);

		return this.usersService.findAll(object, selectFields);
	}

	@Query('findFirstUserOrThrow')
	findFirstUserOrThrow(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		const selectFields = transformArgsIntoSelectRelations(prismaArgs);
		return this.usersService.findFirstUserOrThrow(object, selectFields);
	}

	@Query('user')
	findUnique(@Args('where') object: any, @Info() info: GraphQLResolveInfo) {
		return this.usersService.findUnique(object);
	}

	@Mutation('updateOneUser')
	update(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const prismaArgs = transformInfoIntoPrismaArgs(info);
		const selectFields = transformArgsIntoSelectRelations(prismaArgs);
		return this.usersService.update(object, selectFields);
	}

	@Mutation('deleteOneUser')
	deleteOneUser(@Args('') object: any) {
		console.log('id: ' + JSON.stringify(object));
		return this.usersService.deleteOneUser(object);
	}
}
