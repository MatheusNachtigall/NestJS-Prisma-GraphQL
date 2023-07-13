import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/PrismaService';


@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getUrl(): string {
    return this.buildReturnUrl();
  }

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

    return `Database successfully reseeded 🌱...`;
  }




  
  getExamples() {

    return `
    query Categories {
      categories {
        name
        posts {
          title
          user {
            name
          }
        }
      }
    }
    `;
  }

  
  private buildReturnUrl() {

    let html = '';
    html += `<h1>GraphQL PlayGround</h1>`;
    html += `<ul>`;
    html += ` <li>`;
    html += `   <a href="https://graphql-playground.cyclic.app/graphql">https://graphql-playground.cyclic.app/graphql</a>`;
    html += `   <ul>`;
    html += `       <li>`;
    html += `         <p>Sample GraphQL instance to play around with Users/Posts/Categories</p>`;
    html += `       </li>`;
    html += `   </ul>`;
    html += ` </li>`;
    html += ` <li>`;
    html += `   <a href="https://graphql-playground.cyclic.app/seed">https://graphql-playground.cyclic.app/seed</a>`;
    html += `   <ul>`;
    html += `       <li>`;
    html += `         <p>Will Re-Seed all the database (Warning: All previous data will be reset and lost) </p>`;
    html += `       </li>`;
    html += `   </ul>`;
    html += ` </li>`;
    // html += ` <li>`;
    // html += `   <a href="https://graphql-playground.cyclic.app/examples">https://graphql-playground.cyclic.app/examples</a>`;
    // html += `   <ul>`;
    // html += `       <li>`;
    // html += `         <p>Some basic example queries and mutations </p>`;
    // html += `       </li>`;
    // html += `   </ul>`;
    // html += ` </li>`;
    html += `</ul>`;

    return html;
  }
}
