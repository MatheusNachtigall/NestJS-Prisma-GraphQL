import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { UserCreate } from './dto/user.dto';

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async create(UserInput: UserCreate, selectFields: any) {
		return await this.prisma.user.create({
			data: UserInput,
			...selectFields,
		});
	}

	async createMany(inputData: any) {
		return await this.prisma.user.createMany(inputData);
	}

	async aggregate(args: any, selectFields: any) {
		return await this.prisma.user.aggregate({
			...args,
			...selectFields,
		});
	}

	async findAll(args: any, prismaArgs: any) {
		return await this.prisma.user.findMany({
			...args,
			...prismaArgs,
		});
	}

	async findFirstUserOrThrow(args: any, prismaArgs: any) {
		const query = await this.prisma.user.findFirstOrThrow({
			...args,
			...prismaArgs,
		});
		return query;
	}

	async findUnique(object: any) {
		return await this.prisma.user.findUnique({
			where: {
				id: object.id,
			},
		});
	}

	async update(args: any, prismaArgs: any) {
		return await this.prisma.user.update({
			...args,
			...prismaArgs,
		});
	}

	async deleteOneUser(object: any) {
		const user = await this.prisma.user.findUnique(object);
		if (!user) {
			return new Error(`User not found`);
		}
		//https://www.prisma.io/docs/concepts/components/prisma-schema/relations/referential-actions#restrict
		return await this.prisma.user.delete(object);
	}
}
