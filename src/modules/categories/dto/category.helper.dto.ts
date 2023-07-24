import * as Validator from 'class-validator';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CategoryCreate } from './category.dto';

export class CategoryConnect {
	id?: string;
}

export class CategoryCreateOrConnect {
	@Type(() => CategoryConnect)
	where!: CategoryConnect;

	@Validator.ValidateNested({ each: true })
	@Type(() => CategoryCreate)
	create!: CategoryCreate;
}

export class CategoryCreateNested {
	@ValidateNested({ each: true })
	@Type(() => CategoryCreate)
	create?: CategoryCreate;

	@Type(() => CategoryCreateOrConnect)
	connectOrCreate?: CategoryCreateOrConnect;

	@Type(() => CategoryConnect)
	connect?: CategoryConnect;
}
