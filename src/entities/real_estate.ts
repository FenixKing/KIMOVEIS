import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    DeleteDateColumn, 
    ManyToOne,
    JoinTable,
    OneToOne,
    JoinColumn,
    OneToMany
} from 'typeorm'
import Address from './addresses'
import Category from './categories'
import Schedule from './schedules'

@Entity("real_estate")
class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column({ default: false})
    sold: boolean

    @Column({ type: 'float', default: 0 })
    value: number | string

    @Column({ type: "integer"})
    size: number

    @CreateDateColumn({ type: 'date'})
    createdAt: string

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address
    
    @ManyToOne(() => Category, c => c.realEstate)
    category: Category

    @OneToMany(() => Schedule, s => s.realEstate)
    schedules: Array<Schedule>
}

export default RealEstate