import * as Validator from 'class-validator';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreate } from './user.dto';

export class UserConnect {
	id?: string;
}

export class UserCreateOrConnect {
	@Type(() => UserConnect)
	where!: UserConnect;

	@Validator.ValidateNested({ each: true })
	@Type(() => UserCreate)
	create!: UserCreate;
}

export class UserCreateNested {
	@ValidateNested({ each: true })
	@Type(() => UserCreate)
	create?: UserCreate;

	@Type(() => UserCreateOrConnect)
	connectOrCreate?: UserCreateOrConnect;

	@Type(() => UserConnect)
	connect?: UserConnect;
}
