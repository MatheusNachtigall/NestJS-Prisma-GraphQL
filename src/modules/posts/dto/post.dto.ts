import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, MinLength, ValidateNested } from 'class-validator';
import { UserCreateNested } from '../../users/dto/user.helper.dto';

export class PostCreate {
	@IsString()
	@IsNotEmpty()
	@MinLength(5)
	@MaxLength(40)
	title!: string;

	@ValidateNested()
	@Type(() => UserCreateNested)
	user: UserCreateNested;
}
