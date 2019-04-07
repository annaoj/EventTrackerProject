import { Category } from './category';
export class Expense {
  name: string;
  description: string;
  cost: number;
  date: string;
  category: Category;
  constructor(
    name: string = '',
    description: string = '',
    cost?: number,
    date: string = '',
    category?: {
      id?: number,
      name?: string
    }
  ) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.date = date;
    this.category = Object.assign(this, this.category);
  }
}
