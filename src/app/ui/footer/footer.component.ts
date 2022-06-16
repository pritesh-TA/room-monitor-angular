import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


declare var toastr: any;

@Component({
  selector: 'rmonitor-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  	constructor(private _http: HttpClient) { }

  ngOnInit() {

  }


}
