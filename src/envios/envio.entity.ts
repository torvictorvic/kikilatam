import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('envios')
export class Envio {
  @PrimaryGeneratedColumn()
  id_envio: number;

  @Column()
  destinatario: string;

  @Column()
  remitente: string;

  @Column()
  contenido: string;

  @Column({ type: 'timestamp' })
  fecha_envio: Date;

  @Column('float')
  distancia: number;

  @Column('float')
  tarifa: number;

  @Column({ nullable: true })
  latitud_longitud_origen: string;

  @Column({ nullable: true })
  latitud_longitud_destino: string;
}
