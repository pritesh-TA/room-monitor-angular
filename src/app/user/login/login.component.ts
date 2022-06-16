import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";




declare var $: any;
declare var toastr: any;

@Component({
  selector: 'rmonitor-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor( private _http: HttpClient,private router: Router) { 
   
   }

  ngOnInit() {

  }

     
}
