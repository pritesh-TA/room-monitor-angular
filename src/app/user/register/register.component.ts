import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {Register} from '../../models/register';
import {Router} from "@angular/router";


@Component({
  selector: 'rmonitor-user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private _http: HttpClient,private router: Router) {


   }

  ngOnInit() {}

}
