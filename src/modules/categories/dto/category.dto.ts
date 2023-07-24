import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, MinLength, ValidateNested } from 'class-validator';
import { PostCreateNested } from '../../posts/dto/post.helper.dto';

export class CategoryCreate {
	@IsString()
	@IsNotEmpty()
	@MinLength(5)
	@MaxLength(40)
	name!: string;

	@ValidateNested({ each: true })
	@Type(() => PostCreateNested)
	posts: PostCreateNested[];
}
