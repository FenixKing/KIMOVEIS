import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import RealEstate from './real_estate'

@Entity("categories")
class Category {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column({ length: 45, unique: true})
    name: string

    @OneToMany(() => RealEstate, real => real.category)
    realEstate: Array<RealEstate>
}

export default Category