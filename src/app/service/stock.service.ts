import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Stock} from "../models/stock";

const API_URL = environment.apiUrl + "/stocks";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient: HttpClient) {
  }

  getAllStock(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(API_URL + `/getAllStock`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
      }
    });
  }
}
