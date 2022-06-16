import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";



declare var $: any;
declare var jQuery: any;
declare var toastr: any;
declare var Swal: any;

@Component({
  selector: 'rmonitor-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
 // rmonitor_session_count : any;

  constructor(private _http: HttpClient,private routes: Router, private route: ActivatedRoute,private router: Router) {
     

  }

  ngOnInit() {
  
  }

}