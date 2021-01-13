import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './loginpage.component.html',
    styleUrls: ['./loginpage.component.scss']
  })

  export class LoginPageComponent implements OnInit{
    username:string=""
    constructor(private router:Router){}
    ngOnInit(): void {
    }
    login(text){
        if(text==="יגל"){
           this.router.navigate(["/header"])
        }
        else{return false}
    }
    register(){
           this.router.navigate(["/register"])
    }
  }