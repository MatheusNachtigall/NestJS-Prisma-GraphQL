import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PrismaService } from '../../database/PrismaService';
import { GraphqlTransformService } from '../../shared/services/graphql-transform.service';

@Module({
	providers: [PostsResolver, PostsService, PrismaService, GraphqlTransformService],
})
export class PostsModule {}
