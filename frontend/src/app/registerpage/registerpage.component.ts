import { Component, OnInit} from '@angular/core';
import { restoreView } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { RestApiService } from 'src/service/rest-api.service';

@Component({
    selector: 'app-register',
    templateUrl: './registerpage.component.html',
    styleUrls: ['./registerpage.component.scss']
  })

  export class RegisterPageComponent implements OnInit{
    constructor(private router:Router,private rest:RestApiService){}
    ngOnInit(){}
    register(username,password,pwrepeat){
      this.rest.register({username:username,password:password,pwrepeat:pwrepeat}).subscribe
      (data=>{console.log(data)})
    }
  }
  