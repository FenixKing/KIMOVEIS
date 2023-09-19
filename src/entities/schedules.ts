import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn, } from 'typeorm'
import Users from './users'
import RealEstate from './real_estate'

@Entity("schedules")
class Schedule {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column({ type: 'date' })
    date: string

    @Column({ type: 'time' })
    hour: string

    @ManyToOne(() => RealEstate, r => r.schedules)
    realEstate: RealEstate
    
    @ManyToOne(() => Users)
    user: Users
}

export default Schedule