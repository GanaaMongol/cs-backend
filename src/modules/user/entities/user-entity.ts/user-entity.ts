import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  firstname: string;

  @Column('varchar')
  lastname: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  active: string;

  @Column('varchar')
  password: string;
}
