import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class SpaceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  space_name: string;

  @UpdateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  deleted_at: Date;

}