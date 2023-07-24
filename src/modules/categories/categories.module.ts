import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { PrismaService } from '../../database/PrismaService';
import { GraphqlTransformService } from '../../shared/services/graphql-transform.service';

@Module({
	providers: [CategoriesResolver, CategoriesService, PrismaService, GraphqlTransformService],
})
export class CategoriesModule {}
