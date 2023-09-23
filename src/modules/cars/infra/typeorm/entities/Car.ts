import { v4 } from "uuid";

export class Car {
  id: string;
  name: string;
  description: string;
  daily_rate: Number;
  available: boolean;
  license_plate: string;
  fine_amount: Number;
  brand: string;
  category_id: string;
  created_at: Date;

  constructor() {
    if (!this.id) this.id = v4();
  }
}
