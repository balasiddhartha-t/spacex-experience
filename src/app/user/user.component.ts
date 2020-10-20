import { Component, OnInit } from '@angular/core';
import { UserService} from "../Services/user.service"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.sendGetRequest().subscribe((data: any[])=>{
     
      this.user=data;
    //  console.log(this.user[0]);
    })  
  }
}
