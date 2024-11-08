import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Envio } from './entities/envio.entity';
import { CreateEnvioDto } from './dto/create-envio.dto';
import axios from 'axios';

@Injectable()
export class EnviosService {
  private readonly tarifaBase = 5; // 5 euros
  private readonly costoKm = 0.50; // Costo por km adicional

  constructor(
    @InjectRepository(Envio)
    private envioRepository: Repository<Envio>,
  ) {}

  async createEnvio(createEnvioDto: CreateEnvioDto): Promise<Envio> {
    let distancia = createEnvioDto.distancia;

    // NOTA: falta generar un GOOGLE_MAPS_API_KEY valido
    if (createEnvioDto.latitud_longitud_origen && createEnvioDto.latitud_longitud_destino) {
      distancia = await this.calcularDistancia(
        createEnvioDto.latitud_longitud_origen,
        createEnvioDto.latitud_longitud_destino,
      );
    }

    const tarifa = this.tarifaBase + distancia * this.costoKm;

    const envio = this.envioRepository.create({
      ...createEnvioDto,
      distancia,
      tarifa,
    });

    return await this.envioRepository.save(envio);
  }

  async getAllEnvios(): Promise<Envio[]> {
    return await this.envioRepository.find();
  }

  async calcularDistancia(origen: string, destino: string): Promise<number> {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
        params: {
          origins: origen,
          destinations: destino,
          key: process.env.GOOGLE_MAPS_API_KEY,
        },
      });

      if (
        response.data.rows[0] &&
        response.data.rows[0].elements[0] &&
        response.data.rows[0].elements[0].distance
      ) {
        return response.data.rows[0].elements[0].distance.value / 1000; // Convertir a kilómetros
      } else {
        throw new Error('No se pudo calcular la distancia');
      }
    } catch (error) {
      console.error('Error al calcular la distancia:', error);
      throw new Error('Error al calcular la distancia');
    }
  }
}
