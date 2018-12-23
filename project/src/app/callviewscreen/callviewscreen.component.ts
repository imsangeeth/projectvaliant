import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-callviewscreen',
  templateUrl: './callviewscreen.component.html',
  styleUrls: ['./callviewscreen.component.css']
})
export class CallviewscreenComponent implements OnInit {
 
  isshow:boolean = false
  agentname$ : string ='';
  phn$ : string ='';
  topic$ : string ='';
  ky$ : string ='';
  call_reason$ :object;
  call_type$ : object;
  Reason : string = ''
  calldirection : string = ''
  Comments : string = ''
  status : string = ''
  msg:string = '';
  bgcolor:string = '';
  msgview:boolean = false;
  call_note$ : object;
  viewdepartment$ : object;
  viewdepartmentuser$ : object;
  DepartmentName: string ='';
  Doctor : string = '';
  ktview : object;
  view_smstemplate$ : object;
  viewdiscrption$ : object;
  
  registerForm: FormGroup;
  smssendtemplate : FormGroup;
  submitted = false;
  ktsubmitted = false;
  smsubmitted = false;
  knowldgeForm :  FormGroup;

  Template:string = '';
  phonenumbersms:string = '';
  Messagesms:string = '';


  constructor(private route: ActivatedRoute, private data: DataService,private formBuilder: FormBuilder) {
    this.route.params.subscribe(params => this.agentname$ = params.agname);
    this.route.params.subscribe(params => this.phn$ = params.phone);
    this.route.params.subscribe(params => this.topic$ = params.topic);
    this.route.params.subscribe(params => this.ky$ = params.ky);
    //this.comment = this.phn$;
   }


  ngOnInit() {


    this.data.viewcalltype().subscribe(
      data => this.call_type$ = data 
    );
  
    this.data.viewcallreason().subscribe(
      data => this.call_reason$ = data 
    );

    this.data.viewcall_note(this.phn$).subscribe(
      data => this.call_note$ = data 
    );

    this.data.viewdepartment().subscribe(
      data => this.viewdepartment$ = data  
    );

    this.data.view_smstemplate().subscribe(
      data => this.view_smstemplate$ = data  
    );


  
    var  calldetails  = {
      agentname:  this.agentname$,
      topic:  this.topic$, 
      phonenumber: this.phn$,
      key: this.ky$,
   };
   
    this.data.called_user_details(calldetails).subscribe((response) => {
    
    });

    
    this.knowldgeForm = this.formBuilder.group({
      
      DepartmentName: ['', Validators.required],
      Doctor: ['', Validators.required],
      //password: ['', [Validators.required, Validators.minLength(6)]]
   });

   this.smssendtemplate = this.formBuilder.group({
      
    Template: ['', Validators.required],
    phonenumbersms: ['', Validators.required],
    Messagesms : ['',Validators.required]
    
    //password: ['', [Validators.required, Validators.minLength(6)]]
 });


    this.registerForm = this.formBuilder.group({
      
      Reason: ['', Validators.required],
      status: ['', Validators.required],
      calldirection: ['', Validators.required],
      Comments: ['', Validators.required],
    
      //password: ['', [Validators.required, Validators.minLength(6)]]
   });
  
   
  }

  show()
  {
    this.isshow = true;
  }

  onChangecategory($ky)
  {        
     this.data.office_department_user($ky).subscribe(
      data => this.viewdepartmentuser$ = data  
    );

  }

  checkdescrption($ky)
  { 
    
    this.data.view_smstemplate_single($ky).subscribe((response) => {

      this.smssendtemplate.controls['Messagesms'].setValue(response['description']);
  
    });

  }

  
  msgclose()
 {
  console.log('clicked');
  this.msgview = false;
 }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    var  contact  = {
      Calltype:  this.registerForm.get('status').value,
      Callreason:  this.registerForm.get('Reason').value,
      calldirection:  this.registerForm.get('calldirection').value,
      Comment:  this.registerForm.get('Comments').value, 
      phonenumber: this.phn$,
      key: this.ky$
    };

    this.data.addcallcallnote(contact).subscribe((response) => {
      this.registerForm.reset();

      this.msg = response['msg'];
      this.bgcolor = response['bgcolor'];
      this.msgview = true;

      this.data.viewcall_note(this.phn$).subscribe(
        data => this.call_note$ = data 
      );
    

    });

  
   }
   sendsms() {
    this.smsubmitted = true;

    // stop here if form is invalid
    if (this.smssendtemplate.invalid) {
        return;
    }

    var  sms  = {
      phonenumbersms:  this.smssendtemplate.get('phonenumbersms').value,
      Messagesms:  this.smssendtemplate.get('Messagesms').value,
      
    };


     console.log(sms)

     this.data.smssend(sms).subscribe((response) => {

      this.smssendtemplate.reset();


    //   this.msg = response['msg'];
    //   this.bgcolor = response['bgcolor'];
    //   this.msgview = true;

    //   this.data.viewcall_note(this.phn$).subscribe(
    //     data => this.call_note$ = data 
    //   );
    

     });

  
   }

   kmfSubmit() {
    this.ktsubmitted = true;

    // stop here if form is invalid
    if (this.knowldgeForm.invalid) {
        return;
    }

    var  kt  = {
      DepartmentName:  this.knowldgeForm.get('DepartmentName').value,
      Doctor:  this.knowldgeForm.get('Doctor').value,
    };


     console.log(kt)

     this.data.ktdetails(kt).subscribe((response) => {
       this.isshow = true;
       this.knowldgeForm.reset();
       this.ktview = response;


    //   this.msg = response['msg'];
    //   this.bgcolor = response['bgcolor'];
    //   this.msgview = true;

    //   this.data.viewcall_note(this.phn$).subscribe(
    //     data => this.call_note$ = data 
    //   );
    

     });

  
   }
}
