import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-masterpagecallnote',
  templateUrl: './masterpagecallnote.component.html',
  styleUrls: ['./masterpagecallnote.component.css']
})
export class MasterpagecallnoteComponent implements OnInit {

  registerForm: FormGroup;
  callreasonForm: FormGroup;
  submitted = false;
  callsubmitted = false;
  Calltype: string = '';
  callreason:string = '';
  msg:string = '';
  bgcolor:string = '';
  msgview:boolean = false;
  calltype$ : object;
  callreason$ : object;
  iscalltypebutton:boolean = true;
  iscalltypeupdatebutton:boolean = false;
  iscallreasonbutton:boolean = true;
  iscallreasonupdatebutton:boolean = false;
  updatedId  = 0;
  updatedreasonId= 0;

  constructor(private formBuilder: FormBuilder,private data: DataService) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      Calltype: ['', Validators.required],
    });

    this.callreasonForm = this.formBuilder.group({
      callreason: ['', Validators.required],
    });

    this.data.viewcalltype().subscribe(
      data => this.calltype$ = data  
    );

    this.data.viewcallreason().subscribe(
      data => this.callreason$ = data  
    );

  }

  get f() { return this.registerForm.controls; }
  get call() { return this.callreasonForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    var  contact  = {
      Calltype:  this.registerForm.get('Calltype').value,
      updatedval:  this.updatedId
      };

  
    this.data.createcalltype(contact).subscribe((response) => {

       this.registerForm.reset();
  
       this.msg = response['msg'];
       this.bgcolor = response['bgcolor'];
       this.msgview = true;
    
       this.data.viewcalltype().subscribe(
        data => this.calltype$ = data  
      );


    });

   }


   editcalltype(ky)
   {
     
     this.updatedId = ky;

    this.iscalltypebutton = false;
    this.iscalltypeupdatebutton = true;

     var edittype  = {
      callnu: ky,
      };

      this.data.editcalltype(edittype).subscribe((response) => {

        this.registerForm.controls['Calltype'].setValue(response['calltype']);
      
      });
  
   }


   editcallreason(ky)
   {
     
     this.updatedreasonId = ky;
     
    this.iscallreasonbutton = false;
    this.iscallreasonupdatebutton = true;

     var edittype  = {
      callnu: ky,
      };

      this.data.editcallreason(edittype).subscribe((response) => {

        this.callreasonForm.controls['callreason'].setValue(response['callreason']);
      
      });
  
   }



   deletetype(ky)
   {
     var edittype  = {
      callnu: ky,
      };

      this.data.deletecalltype(edittype).subscribe((response) => {

        this.msg = response['msg'];
        this.bgcolor = response['bgcolor'];
        this.msgview = true;

        this.data.viewcalltype().subscribe(
          data => this.calltype$ = data  
        );
      });
   }


   deletereason(ky)
   {
     var edittype  = {
      callnu: ky,
      };

      this.data.deletecallreason(edittype).subscribe((response) => {

        this.msg = response['msg'];
        this.bgcolor = response['bgcolor'];
        this.msgview = true;

        this.data.viewcallreason().subscribe(
          data => this.callreason$ = data  
        );

      });
  
   }

  

  callsubmit(){

    this.callsubmitted = true;

    // stop here if form is invalid
    if (this.callreasonForm.invalid) {
        return;
    }

    var contact  = {
      callreason:  this.callreasonForm.get('callreason').value,
      updatedval:  this.updatedreasonId
      };

    console.log(contact);

    this.data.createcallreason(contact).subscribe((response) => {

      this.callreasonForm.reset();
  
      this.msg = response['msg'];
      this.bgcolor = response['bgcolor'];
      this.msgview = true;

      this.data.viewcallreason().subscribe(
        data => this.callreason$ = data  
      );
    
    });

  }

  msgclose()
 {
  console.log('clicked');
  this.msgview = false;
 }

 cancel_form()
 {
  this.updatedId = 0;
  this.iscalltypebutton = true;
  this.iscalltypeupdatebutton = false;
  this.registerForm.controls['Calltype'].setValue('');
 }

 cancel_reason_form()
 {
  this.updatedreasonId = 0;
  this.iscallreasonbutton = true;
  this.iscallreasonupdatebutton = false;
  this.registerForm.controls['callreason'].setValue('');
 }

  
  

}
