import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { Category } from "./Category";

@Entity("cars")
export class Car {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  daily_rate: Number;

  @Column()
  available: boolean;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: Number;

  @Column()
  brand: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  category_id?: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  constructor() {
    if (!this.id) this.id = v4();
    this.available = true;
  }
}
