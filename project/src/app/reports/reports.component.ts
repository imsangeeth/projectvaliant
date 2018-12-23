import { Component, OnInit } from '@angular/core';
//import {ExcelService} from '../excel.service';
import { DataService } from '../data.service';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  isreportview:boolean = false;
  ReportForm:FormGroup;
  callreason : string = '';
  agentname : string = '';
  callstatus : string = '';
  todate : string = '';
  fromdate : string = '';
  report$ : object;

  constructor(private data: DataService,private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.ReportForm = this.formBuilder.group({
      fromdate : [''],
      todate : [''],
      callstatus : [''],
      agentname : [''],
      callreason : [''],
    });

  }

  reportsubmit()
  {
    this.isreportview = true;
    
    var reportdate  = {
      fromdate:  this.ReportForm.get('fromdate').value,
      todate:  this.ReportForm.get('todate').value,
      callstatus:  this.ReportForm.get('callstatus').value,
      agentname:  this.ReportForm.get('agentname').value,
      callreason:  this.ReportForm.get('callreason').value,
      };

     console.log(reportdate);
    
    this.data.genrate_ticket(reportdate).subscribe((response) => {
     // this.report$ = response;
    });

  }

  cancel_form()
  {
    this.ReportForm.reset();
  }



  isview()
  {
   this.isreportview = true
  }

}
 