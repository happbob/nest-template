import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genres {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar',{length:20})
  name: string;

  @Column('boolean',{ default: true })
  isActive: boolean;

  @Column('datetime',{default: () => "CURRENT_TIMESTAMP"})
  createdAt:string;

  @Column('datetime',{default: () => "CURRENT_TIMESTAMP"})
  updatedAt:string;

  @Column('datetime',{default: () => "CURRENT_TIMESTAMP"})
  deletedAt:string;
}