import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user?: User
  idUserLogin = localStorage.getItem("ID")

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.findById()
  }

  findById() {
    this.userService.findById(<string>this.idUserLogin).subscribe(rs => {
      this.user = rs
    })
  }
}
