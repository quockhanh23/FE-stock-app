import {Component, OnInit} from '@angular/core';
import {StockService} from "../../service/stock.service";
import {Stock} from "../../models/stock";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks?: Stock[]
  myStocks?: Stock[]

  constructor(private stockService: StockService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAllStock()
  }

  getAllStock() {
    this.stockService.getAllStock().subscribe(rs => {
      this.stocks = rs
    }, error => {
      console.log(JSON.stringify(error))
    })
  }
}
