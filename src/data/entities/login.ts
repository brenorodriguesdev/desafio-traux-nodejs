import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('login')
export class Login {
  @PrimaryGeneratedColumn('increment')
  id?: number

  @Column()
  name: string

  @Column()
  username: string

  @Column()
  password: string
}