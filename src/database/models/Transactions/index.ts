import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('transactions')
  class TransactionModel {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    value: number;
  
    @Column()
    description: string;
  
    @Column()
    date: Date;
  
    @Column()
    cred_deb: string;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default TransactionModel;
  