import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';

@Injectable()
export class SeedService {
	constructor(private prisma: PrismaService) {}

  async reSeedDatabase() {

    await this.prisma.category.deleteMany();
    await this.prisma.post.deleteMany();
    await this.prisma.user.deleteMany();
  
    await this.prisma.category.createMany({
      data: [
        {
          name: 'Setup',
        },
        {
          name: 'Back-End',
        },
        {
          name: 'Front-End',
        },
        {
          name: 'Mobile',
        },
        {
          name: 'Information',
        },
        {
          name: 'Architecture',
        },
      ],
    });
  
    await this.prisma.user.create({
      data: {
        name: 'user1',
        email: 'user1@email.com',
        role: 'ARCHITECT',
        Post: {
          create: [
            {
              title: 'monorepo setup',
              categories: {
                connect: [
                  {
                    name: 'Architecture',
                  },
                  {
                    name: 'Setup',
                  },
                ],
              },
            },
            {
              title: 'Basic Folder Structure',
              categories: {
                connect: [
                  {
                    name: 'Setup',
                  },
                ],
              },
            },
          ],
        },
      },
    });
  
    await this.prisma.user.create({
      data: {
        name: 'user2',
        email: 'user2@email.com',
        role: 'LEAD',
        Post: {
          create: [
            {
              title: 'Back-end setup',
              categories: {
                connect: [
                  {
                    name: 'Back-End',
                  },
                  {
                    name: 'Setup',
                  },
                ],
              },
            },
            {
              title: 'prisma setup',
              categories: {
                connect: [
                  {
                    name: 'Back-End',
                  },
                  {
                    name: 'Setup',
                  },
                ],
              },
            },
            {
              title: 'graphql setup',
            },
          ],
        },
      },
    });
    await this.prisma.user.create({
      data: {
        name: 'user3',
        email: 'user3@email.com',
        // role: '',  -> DEFAULTS to 'SENIOR'
        Post: {
          create: [
            {
              title: 'Setting up authentication',
            },
          ],
        },
      },
    });

    return;
  }

}
