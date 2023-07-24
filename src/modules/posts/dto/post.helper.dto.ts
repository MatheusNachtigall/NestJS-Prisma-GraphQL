import * as Validator from 'class-validator';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { PostCreate } from './post.dto';

export class PostConnect {
	id?: string;
}

export class PostCreateOrConnect {
	@Type(() => PostConnect)
	where!: PostConnect;

	@Validator.ValidateNested({ each: true })
	@Type(() => PostCreate)
	create!: PostCreate;
}

export class PostCreateNested {
	@ValidateNested({ each: true })
	@Type(() => PostCreate)
	create?: PostCreate;

	@Type(() => PostCreateOrConnect)
	connectOrCreate?: PostCreateOrConnect;

	@Type(() => PostConnect)
	connect?: PostConnect;
}
