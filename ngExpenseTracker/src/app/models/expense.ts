import { Category } from './category';
export class Expense {
  id: number;
  name: string;
  description: string;
  cost: number;
  date: string;
  category: Category;
  constructor(
    id?: number ,
    name: string = '',
    description: string = '',
    cost?: number,
    date: string = '',
    category?: {
      id?: number,
      name?: string
    }
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.date = date;
    this.category = Object.assign(this, this.category);
  }
}
