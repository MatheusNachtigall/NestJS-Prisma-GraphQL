import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PrismaService } from '../../database/PrismaService';

@Module({
	providers: [PostsResolver, PostsService, PrismaService],
})
export class PostsModule {}
