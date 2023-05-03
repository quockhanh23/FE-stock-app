import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StockOrder} from "../models/stock-order";

const API_URL = environment.apiUrl + "/orders";

@Injectable({
  providedIn: 'root'
})
export class StockOrderService {

  constructor(private httpClient: HttpClient) {
  }

  createOrder(stockOrder: StockOrder, idUser: string, idStock: string): Observable<StockOrder> {
    return this.httpClient.post<StockOrder>(API_URL +
      `/createOrder?idUser=${idUser}&idStock=${idStock}`, stockOrder, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
      }
    });
  }
}
