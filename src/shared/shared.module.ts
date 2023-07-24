import { Module } from '@nestjs/common';
import { GraphqlTransformService } from './services/graphql-transform.service';
import { IsEmailNotRegistered } from './decorators/is-email-not-registered';
import { PrismaService } from '../database/PrismaService';

@Module({
	imports: [],
	controllers: [],
	providers: [GraphqlTransformService, IsEmailNotRegistered, PrismaService],
})
export class SharedModule {}
