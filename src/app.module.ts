import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database.config';
// import { EnviosModule } from './envios/envios.module';
// import { EnviosModule } from './envios/envio.';
import { EnviosModule } from './envios/envios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    EnviosModule,
  ],
})
export class AppModule {}
