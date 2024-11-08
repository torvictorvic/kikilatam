import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnviosService } from './envios.service';
import { EnviosController } from './envios.controller';
import { Envio } from './entities/envio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Envio])],
  providers: [EnviosService],
  controllers: [EnviosController],
})
export class EnviosModule {}

