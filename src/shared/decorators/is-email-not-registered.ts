import {
	registerDecorator,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator';
import { PrismaService } from '../../database/PrismaService';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailNotRegistered implements ValidatorConstraintInterface {
	constructor(private prisma: PrismaService) {}

	async validate(email: any) {
		const user = await this.prisma.user.findFirst({ where: { email: email } });
		return user === undefined;
	}
}

export function EmailNotRegistered(validationOptions?: ValidationOptions) {
	return function (object: object, propertyName: string) {
		registerDecorator({
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			constraints: [],
			validator: IsEmailNotRegistered,
		});
	};
}

// @ValidatorConstraint({ name: 'email', async: true })
// @Injectable()
// export class CustomEmailvalidation implements ValidatorConstraintInterface {
// 	constructor(private readonly prisma: PrismaService) {}

// 	async validate(value: string): Promise<boolean> {
// 		return this.prisma.user.findFirst({ where: { email: value } }).then((user) => {
// 			if (user) {
// 				throw new UnprocessableEntityException('Email already exists');
// 			} else {
// 				return true;
// 			}
// 		});
// 	}
// }
