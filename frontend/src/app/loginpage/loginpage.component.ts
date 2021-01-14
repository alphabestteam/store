import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/service/rest-api.service';

@Component({
    selector: 'app-login',
    templateUrl: './loginpage.component.html',
    styleUrls: ['./loginpage.component.scss']
  })

  export class LoginPageComponent implements OnInit{
    username:string=""
    constructor(private router:Router , private restlogin:RestApiService){}
    ngOnInit(): void {
    }
    login(username,password){
      console.log("loginpage")
      this.restlogin.login({username:username,password:password}).subscribe
    }
    register(){
           this.router.navigate(["/register"])
    }
  }