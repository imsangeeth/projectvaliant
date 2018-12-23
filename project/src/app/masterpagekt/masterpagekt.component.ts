import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-masterpagekt',
  templateUrl: './masterpagekt.component.html',
  styleUrls: ['./masterpagekt.component.css']
})
export class MasterpagektComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  DepartmentName: string = '';
  Doctor: string = '';
  Knowledge_base: string = '';
  Message: string = '';
  userdepartment: string = '';
  email:string = '';
  username:string = '';
  msg:string = '';
  bgcolor:string = '';
  msgview:boolean = false;
  viewdepartment$ : object;
  callreason$ : object;
  viewknowldgebasename$ : object;
  viewdepartmentuser$ : object;
  viewknowldgebasemaster$ : object;
  iscalltypebutton:boolean = true;
  iscalltypeupdatebutton:boolean = false;
  updatedId  = 0;
  updatedreasonId= 0;

  constructor(private formBuilder: FormBuilder,private data: DataService) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      DepartmentName: ['', Validators.required],
      Doctor:['',Validators.required],
      Knowledge_base:['',Validators.required],
      Message:['',Validators.required]
    });

    this.data.viewdepartment().subscribe(
      data => this.viewdepartment$ = data  
    );

    
    this.data.viewknowldgebasename().subscribe(
      data => this.viewknowldgebasename$ = data  
    );

    this.data.viewknowldgebasemaster().subscribe(
      data => this.viewknowldgebasemaster$ = data  
    );

    

  }

  onChangecategory($ky)
  {        
     this.data.office_department_user($ky).subscribe(
      data => this.viewdepartmentuser$ = data  
    );

  }

  deletetype(ky)
   {
     var edittype  = {
      callnu: ky,
      };

      this.data.deletedknowldgemaster(edittype).subscribe((response) => {

        this.msg = response['msg'];
        this.bgcolor = response['bgcolor'];
        this.msgview = true;

        this.data.viewknowldgebasemaster().subscribe(
          data => this.viewknowldgebasemaster$ = data  
        );

      });
   }


  onSubmit()
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    var  contact  = {
      DepartmentName:  this.registerForm.get('DepartmentName').value,
      Doctor:  this.registerForm.get('Doctor').value,
      Knowledge_base:  this.registerForm.get('Knowledge_base').value,
      Message:  this.registerForm.get('Message').value,
      updatedval:  this.updatedId
      };

    console.log(contact);

    this.data.createknowldgemaster(contact).subscribe((response) => {

      this.registerForm.reset();
  
      this.msg = response['msg'];
      this.bgcolor = response['bgcolor'];
      this.msgview = true;
    
    //    this.data.viewdepartment().subscribe(
    //     data => this.calltype$ = data  
    //     );
    this.data.viewknowldgebasemaster().subscribe(
      data => this.viewknowldgebasemaster$ = data  
    );

    });

  }

  msgclose()
  {
   console.log('clicked');
   this.msgview = false;
  }

  editviewkm(ky)
   {
     
     this.updatedId = ky;

     this.data.doctor_name(ky).subscribe(
      data => this.viewdepartmentuser$ = data  
    );
     
    this.iscalltypebutton = false;
    this.iscalltypeupdatebutton = true;

     var edittype  = {
      callnu: ky,
      };

      this.data.editknowledgemaster(edittype).subscribe((response) => {

        this.registerForm.controls['DepartmentName'].setValue(response['department']);
        this.registerForm.controls['Doctor'].setValue(response['doctor_id']);
        this.registerForm.controls['Knowledge_base'].setValue(response['knowldge_id']);
        this.registerForm.controls['Message'].setValue(response['name']);
      
      });
  
   }

cancel_form()
 {
  this.updatedId = 0;
  this.iscalltypebutton = true;
  this.iscalltypeupdatebutton = false;
  this.registerForm.controls['DepartmentName'].setValue('');
  this.registerForm.controls['Doctor'].setValue('');
  this.registerForm.controls['Knowledge_base'].setValue('');
  this.registerForm.controls['Message'].setValue('');
  //this.registerForm.controls['DepartmentName'].setValue('');
 }
 
}
