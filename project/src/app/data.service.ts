import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private base = "http://localhost/valiantApi/";

  viewcalltype()
  {
    return this.http.get(this.base+'Api/index.php/user/viewcalltype');
  }

  viewcallreason()
  {
    return this.http.get(this.base+'Api/index.php/user/viewcallreason');
  }

  createcalltype(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createcalltype',contact);
  }

  smssend(contact)
  {
    return this.http.post(this.base+'sendsmstoclient.php',contact);
  }

  editcalltype(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/editcalltype/',phaseId);
  }

  editcallreason(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/editcallreason/',phaseId);
  }

  deletecalltype(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/deletecalltype/',phaseId);
  }

  deletecallreason(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/deletecallreason/',phaseId);
  }

  createcallreason(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createcallreason',contact);
  }

  createknowldgemaster(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createknowldgemaster',contact);
  }


  
  viewdepartment()
  {
    return this.http.get(this.base+'Api/index.php/user/viewdepartment');
  }

  viewknowldgebasename()
  {
    return this.http.get(this.base+'Api/index.php/user/viewknowldgebasename');
  }


  viewdepartmentuser()
  {
    return this.http.get(this.base+'Api/index.php/user/viewdepartmentuser');
  }

  view_smstemplate()
  {
    return this.http.get(this.base+'Api/index.php/user/view_smstemplate');
  }

  view_smstemplate_single(ky)
  {
    return this.http.get(this.base+'Api/index.php/user/view_smstemplate_single/'+ky);
  }

  

  createnewdepartment(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createnewdepartment',contact);
  }

  editdepartment(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/editdepartment',contact);
  }

  editdepartmentuser(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/editdepartmentuser',contact);
  }
  deletedepartment(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/deletedepartment',contact);
  }

  deletedepartmentuser(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/deletedepartmentuser/',phaseId);
  }
  createdepartmentuser(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createdepartmentuser',contact);
  }

  deletedknowldgemaster(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/deletedknowldgemaster',contact);
  }

  called_user_details(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/called_user_details',contact);
  }

  addcallcallnote(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/addcallcallnote',contact);
  }

  ktdetails(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/ktdetails',contact);
  }

  editknowledgemaster(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/editknowledgemaster',contact);
  }

  createknowldge(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createknowldge',contact);
  }

  editknow(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/editknow',contact);
  }

  deletedknowldge(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/deletedknowldge',contact);
  }

  genrate_ticket(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/genrate_ticket',contact);
  }

  office_department_user($ky){
    return this.http.get(this.base+'Api/index.php/user/office_department_user/'+$ky);
  }

  viewknowldgebasemaster(){
    return this.http.get(this.base+'Api/index.php/user/viewknowldgebasemaster');
  }

  viewsmstemplate(){
    return this.http.get(this.base+'Api/index.php/user/viewsmstemplate');
  }

  doctor_name(ky){
    return this.http.get(this.base+'Api/index.php/user/doctor_name/'+ky);
  }

  viewcall_note(ky){
    return this.http.get(this.base+'Api/index.php/user/viewcall_note/'+ky);
  }


  



  



  






}
