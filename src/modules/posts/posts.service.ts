import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
	constructor(private prisma: PrismaService) {}

	async create(PostInput: Prisma.PostCreateInput, selectFields: any) {
		return await this.prisma.post.create({
			data: PostInput,
			...selectFields,
		});
	}

	async createMany(inputData: any) {
		return await this.prisma.post.createMany(inputData);
	}

	async aggregate(args: any, selectFields: any) {
		return await this.prisma.post.aggregate({
			...args,
			...selectFields,
		});
	}

	async findAll(args: any, prismaArgs: any) {
		return await this.prisma.post.findMany({
			...args,
			...prismaArgs,
		});
	}

	async findFirstPostOrThrow(args: any, prismaArgs: any) {
		const query = await this.prisma.post.findFirstOrThrow({
			...args,
			...prismaArgs,
		});
		return query;
	}

	async findUnique(object: any) {
		return await this.prisma.post.findUnique({
			where: {
				id: object.id,
			},
		});
	}

	async update(args: any, prismaArgs: any) {
		return await this.prisma.post.update({
			...args,
			...prismaArgs,
		});
	}

	async deleteOnePost(object: any) {
		const post = await this.prisma.post.findUnique(object);
		if (!post) {
			return new Error(`Post not found`);
		}
		//https://www.prisma.io/docs/concepts/components/prisma-schema/relations/referential-actions#restrict
		return await this.prisma.post.delete(object);
	}
}
