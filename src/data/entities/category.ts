import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn('increment')
  id?: number

  @Column()
  name: string

  @Column()
  image: string
}