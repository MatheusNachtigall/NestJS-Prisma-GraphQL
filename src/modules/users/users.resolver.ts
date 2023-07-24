import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { GraphQLResolveInfo } from 'graphql';
import { UserCreate } from './dto/user.dto';
import { GraphqlTransformService } from '../../shared/services/graphql-transform.service';

@Resolver('User')
export class UsersResolver {
	constructor(private readonly usersService: UsersService, private graphqlTransform: GraphqlTransformService) {}

	@Mutation('createOneUser')
	create(@Args('data') inputData: UserCreate, @Info() info: GraphQLResolveInfo) {
		const { selectFields } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);

		return this.usersService.create(inputData, selectFields);
	}

	@Mutation('createManyUser')
	createMany(@Args('') inputData: any) {
		return this.usersService.createMany(inputData);
	}

	@Query('aggregateUser')
	aggregate(@Args('') args: any, @Info() info: GraphQLResolveInfo) {
		const { prismaArgs } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);

		return this.usersService.aggregate(args, prismaArgs);
	}

	@Query('user')
	findUnique(@Args('where') object: any) {
		return this.usersService.findUnique(object);
	}

	@Query('users')
	findAll(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const { selectFields } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);

		return this.usersService.findAll(object, selectFields);
	}

	@Query('findFirstUserOrThrow')
	findFirstUserOrThrow(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const { selectFields } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);

		return this.usersService.findFirstUserOrThrow(object, selectFields);
	}

	@Mutation('updateOneUser')
	update(@Args('') object: any, @Info() info: GraphQLResolveInfo) {
		const { selectFields } = this.graphqlTransform.transformInfoIntoArgsAndSelectRelations(info);

		return this.usersService.update(object, selectFields);
	}

	@Mutation('deleteOneUser')
	deleteOneUser(@Args('') object: any) {
		return this.usersService.deleteOneUser(object);
	}
}
