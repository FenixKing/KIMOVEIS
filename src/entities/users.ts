import { getRounds, hashSync } from 'bcryptjs'
import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    DeleteDateColumn, 
    BeforeUpdate,
    BeforeInsert
} from 'typeorm'

@Entity("users")
class User {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column({ length: 45})
    name: string
    
    @Column({ length: 45, unique: true})
    email: string

    @Column({ default: false})
    admin: boolean 

    @Column({ length: 120})
    password: string

    @CreateDateColumn({type: 'date'})
    createdAt: Date

    @UpdateDateColumn({type: 'date'})
    updatedAt: Date

    @DeleteDateColumn({type: 'date', nullable: true})
    deletedAt: Date | null

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      const hasRounds: number = getRounds(this.password);
      if (!hasRounds) {
        this.password = hashSync(this.password, 10);
      }
    }
}

export default User