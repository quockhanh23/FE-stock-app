import {User} from "./user";
import {Stock} from "./stock";

export interface StockOrder {
  id: string
  user: User
  stock: Stock
  orderType: string
  direction: string
  quantity: string
  price: string
  status: string
}
