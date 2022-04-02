import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("meals")
export class Meals {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  protein: string;

  @Column()
  quantity_proteins: string | null;

  @Column()
  carbohydrate: string | null;

  @Column()
  quantity_carbohydrate: string | null;

  @Column()
  vegetable: string | null;

  @Column()
  quantity_vegetable: string | null;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid().toString();
    }
  }
}
