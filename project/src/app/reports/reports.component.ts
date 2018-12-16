import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  isreportview:boolean = false

  constructor() { }

  ngOnInit() {
  }


  isview()
  {
   this.isreportview = true
  }

}
