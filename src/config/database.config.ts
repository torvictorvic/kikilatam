import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || '',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'gestion_envios',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
