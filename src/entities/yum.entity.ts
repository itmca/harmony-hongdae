// https://docs.nestjs.com/techniques/database - Repository pattern
// user.entity.ts : DB ORM 구성하는 역할 
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

// export enum Category{
//   Dessert = 0,
//   West = 1,
//   SouthEastAsia = 2,
//   Japanese = 3,
//   Maxican = 4,
//   Chinese = 5,
// }

@Entity()
export class Yum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  category: string;
}