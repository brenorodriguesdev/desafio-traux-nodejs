import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Category } from './category'

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn('increment')
  id?: number

  @OneToOne(() => Category)
  @JoinColumn({ name: 'idCategory' })
  category: Category

  @Column()
  name: string

  @Column()
  image: string
}