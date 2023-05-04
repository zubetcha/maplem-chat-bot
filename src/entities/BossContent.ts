import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Boss } from './Boss';

@Entity()
export class BossContent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: 'int' })
  limitOfLevel!: number;

  @Column()
  bossList!: Boss[];
}
