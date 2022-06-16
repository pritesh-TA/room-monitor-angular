import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {Ret} from '../../models/ret';
import {Router} from "@angular/router";
// import {Forgotpassword} from '../../models/forgotpassword';

declare var toastr: any;


@Component({
  selector: 'rmonitor-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./login.component.css']
})
export class ForgotpasswordComponent implements OnInit {
	
	constructor(private _http: HttpClient,private router: Router) { 
   
 }
  ngOnInit() {
   

  }



  

}