import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  title: string;

  @Column()
  year: string;

  @Column('boolean',{ default: true })
  isActive: boolean;

  @Column('datetime',{default: () => "CURRENT_TIMESTAMP",nullable:false})
  createdAt:string;

  @Column('datetime',{default: () => "CURRENT_TIMESTAMP",nullable:false})
  updatedAt:string;

  @Column('datetime',{nullable:true})
  deletedAt:string;
}