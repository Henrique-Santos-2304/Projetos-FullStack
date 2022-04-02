import {Entity, Column, PrimaryColumn, OneToMany, JoinTable} from "typeorm";
import {v4 as uuid } from "uuid";
import { Meals } from './Meals';



@Entity("users")
export class Users {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email:string;

  @Column()
  username: string;

  @Column()
  password: string;

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }

}