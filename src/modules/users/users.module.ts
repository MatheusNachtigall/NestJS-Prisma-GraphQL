import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from '../../database/PrismaService';
import { GraphqlTransformService } from '../../shared/services/graphql-transform.service';

@Module({
	providers: [UsersResolver, UsersService, PrismaService, GraphqlTransformService],
})
export class UsersModule {}
