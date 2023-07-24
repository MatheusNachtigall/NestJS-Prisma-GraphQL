import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { CategoryCreate } from './dto/category.dto';

@Injectable()
export class CategoriesService {
	constructor(private prisma: PrismaService) {}

	async create(CategoryInput: CategoryCreate, selectFields: any) {
		return await this.prisma.category.create({
			data: CategoryInput,
			...selectFields,
		});
	}

	async createMany(inputData: any) {
		return await this.prisma.category.createMany(inputData);
	}

	async aggregate(args: any, selectFields: any) {
		return await this.prisma.category.aggregate({
			...args,
			...selectFields,
		});
	}

	async findAll(args: any, prismaArgs: any) {
		return await this.prisma.category.findMany({
			...args,
			...prismaArgs,
		});
	}

	async findFirstCategoryOrThrow(args: any, prismaArgs: any) {
		const query = await this.prisma.category.findFirstOrThrow({
			...args,
			...prismaArgs,
		});
		return query;
	}

	async findUnique(object: any) {
		return await this.prisma.category.findUnique({
			where: {
				id: object.id,
			},
		});
	}

	async update(args: any, prismaArgs: any) {
		return await this.prisma.category.update({
			...args,
			...prismaArgs,
		});
	}

	async deleteOneCategory(object: any) {
		const category = await this.prisma.category.findUnique(object);
		if (!category) {
			return new Error(`Category not found`);
		}
		//https://www.prisma.io/docs/concepts/components/prisma-schema/relations/referential-actions#restrict
		return await this.prisma.category.delete(object);
	}
}
