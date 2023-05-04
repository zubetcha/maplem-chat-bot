import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Boss } from './Boss';
import { User } from './User';

@Entity()
export class Participation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  data!: Date;

  @Column()
  bossContent!: string;

  @Column()
  boss!: Boss;

  @Column()
  participantList!: User[];
}
