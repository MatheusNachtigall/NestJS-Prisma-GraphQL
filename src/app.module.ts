import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { SeedModule } from './modules/seed/seed.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			playground: false,
			plugins: [ApolloServerPluginLandingPageLocalDefault()],
			typePaths: ['./**/*.graphql'],
			installSubscriptionHandlers: true,
		}),
		UsersModule,
		PostsModule,
		CategoriesModule,
		SeedModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
