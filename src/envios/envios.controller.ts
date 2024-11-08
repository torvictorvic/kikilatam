import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { CreateEnvioDto } from './dto/create-envio.dto';

@Controller('envios')
export class EnviosController {
  constructor(private readonly enviosService: EnviosService) {}

  @Post()
  createEnvio(@Body() createEnvioDto: CreateEnvioDto) {
    return this.enviosService.createEnvio(createEnvioDto);
  }

  @Get()
  getAllEnvios() {
    return this.enviosService.getAllEnvios();
  }
}
