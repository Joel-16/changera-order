import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn, BeforeUpdate, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, AfterUpdate, ManyToOne} from "typeorm";

@Entity()
export class Order extends BaseEntity{
   @PrimaryGeneratedColumn()
   id : number

   @Column({ nullable : true})
   email : string

   @Column({type: 'json', nullable: true})
   item
   
   @CreateDateColumn({type: 'timestamp'})
   createdAt : Date

   @UpdateDateColumn({type: 'timestamp'})
   updatedAt : Date

   @BeforeInsert()
   addDate(){
      let date = new Date()
      this.createdAt = date 
   }
   
   @BeforeUpdate()
   upDate(){
      let date = new Date()
      this.updatedAt = date
   }
}