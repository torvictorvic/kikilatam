// src/envios/dto/create-envio.dto.ts
export class CreateEnvioDto {
  destinatario: string;
  remitente: string;
  contenido: string;
  fecha_envio: Date;
  distancia: number;
  latitud_longitud_origen?: string;
  latitud_longitud_destino?: string;
}
