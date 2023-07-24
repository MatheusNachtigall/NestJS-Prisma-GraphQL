import { Type } from 'class-transformer';
import { PostCreateNested } from 'src/modules/posts/dto/post.helper.dto';

import {
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsString,
	MaxLength,
	MinLength,
	ValidateNested,
} from 'class-validator';
import { EmailNotRegistered } from 'src/shared/decorators/is-email-not-registered';
import { userRoles } from 'src/graphql.schema';

export class UserCreate {
	@IsString()
	@IsNotEmpty()
	@MinLength(5)
	@MaxLength(40)
	name!: string;

	@IsOptional()
	@IsString()
	@IsEmail()
	@EmailNotRegistered({ message: 'email already registered' })
	email?: string;

	@IsOptional()
	@IsString()
	@IsEnum(userRoles)
	role?: keyof typeof userRoles;

	@ValidateNested({ each: true })
	@Type(() => PostCreateNested)
	posts: PostCreateNested[];
}
