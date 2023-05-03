import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { StockListComponent } from './stock-list/stock-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ListBankAccountComponent } from './list-bank-account/list-bank-account.component';


@NgModule({
  declarations: [
    StockListComponent,
    UserDetailComponent,
    ListBankAccountComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
