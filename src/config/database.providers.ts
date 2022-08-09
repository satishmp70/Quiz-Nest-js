import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseProviders: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 30861,
  username: 'postgres',
  password: 'password',
  database: 'quiz',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  // synchronize: true,  // not use on prod
};
