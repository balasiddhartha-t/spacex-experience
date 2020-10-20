import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private teslaCustomAPI:any;
 
 constructor(private httpClient: HttpClient) {}
   sendGetRequest(){
      return this.httpClient.get('https://api.spaceXdata.com/v3/launches?limit=100');
      //console.log(this.REST_API_SERVER);
   }
   getLaunchSuceess(year,id){
      this.teslaCustomAPI  = "https://api.spaceXdata.com/v3/launches?limit=100";

      if(year != undefined && year){
        this.teslaCustomAPI = this.teslaCustomAPI +  '&launch_year=' + year;
      }
      if (id !=undefined){
        this.teslaCustomAPI = this.teslaCustomAPI + '&launch_success='+id;
      }
      console.log(this.teslaCustomAPI);

      return this.httpClient.get(this.teslaCustomAPI);
    

   }
  
   }

