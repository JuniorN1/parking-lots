
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class ParkingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parking_name: string;

  @Column('float')
  parking_lat: number;

  @Column('float')
  parking_long: number;

  @Column('float')
  parking_price_hour: number;
 
  @UpdateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  deleted_at: Date;


}