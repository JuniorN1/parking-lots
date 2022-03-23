import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class PivoParkingSpaceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parking_id: string;

  @Column()
  space_id: number;

  @UpdateDateColumn()
  exite_date: Date;

  @UpdateDateColumn()
  created_at: Date;


  @UpdateDateColumn()
  deleted_at: Date;

}