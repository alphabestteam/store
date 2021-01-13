import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './registerpage.component.html',
    styleUrls: ['./registerpage.component.scss']
  })

  export class RegisterPageComponent implements OnInit{
    constructor(private router:Router){}
    ngOnInit(){}
  }
  