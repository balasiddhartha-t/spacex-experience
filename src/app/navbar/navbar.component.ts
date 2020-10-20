import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService} from "../Services/user.service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: any;
  year:any;
  id:any;
  ngOnInit(): void {
  }
   year_button = [
    {id: 1, name:'2004',state: false},
    {id: 2, name:'2005',state: false},
    {id: 5, name:'2006',state: false},
    {id: 3, name:'2007',state: false},
    {id: 4, name:'2008',state: false}
];

public state = false;
public falseState =  false;

callEndpoint(): any{
  this.userService.getLaunchSuceess(this.year,this.id).subscribe((data: any[])=>{
     
    this.user=data;
  console.log(this.user)
  }) 
}
onClickMe(id):any {
  this.state= !this.state;
  console.log("state---->"+ this.state);
  if (this.state==true){
    this.id=id;
  }else{
    this.id=undefined;
  }
 this.callEndpoint();
}

falseLaunch(id) :any{
  this.falseState  = !this.falseState; 
  if(this.falseState){
    this.id =id;
  }else{
    this.id=undefined;
  }
  this.callEndpoint();
}
onClickyear(year){
  this.year=year;
  this.callEndpoint();
}


}
