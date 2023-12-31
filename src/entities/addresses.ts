import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import RealEstate from './real_estate'

@Entity("addresses")
class Address {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column({ length: 45})
    street: string

    @Column({ length:8})
    zipCode: string

    @Column({type: 'varchar', nullable: true })
    number: string | null

    @Column({ length: 20})
    city: string
    
    @Column({ length: 2})
    state: string
}

export default Address
