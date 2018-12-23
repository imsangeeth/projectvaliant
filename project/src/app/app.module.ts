import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatCheckboxModule,MatNativeDateModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CallviewscreenComponent } from './callviewscreen/callviewscreen.component';
import { UiModule } from './ui/ui.module';
import { KnowledgetranferComponent } from './knowledgetranfer/knowledgetranfer.component';
import { ReportsComponent } from './reports/reports.component';
import { MasterpagecallnoteComponent } from './masterpagecallnote/masterpagecallnote.component';
import { MasterpagektComponent } from './masterpagekt/masterpagekt.component';
import { HomeComponent } from './home/home.component';
import { HeaderuserComponent } from './headeruser/headeruser.component';
import { MasterdepartmentComponent } from './masterdepartment/masterdepartment.component';
import { MastersmstempComponent } from './mastersmstemp/mastersmstemp.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CallviewscreenComponent,
    KnowledgetranferComponent,
    ReportsComponent,
    MasterpagecallnoteComponent,
    MasterpagektComponent,
    HomeComponent,
    HeaderuserComponent,
    MasterdepartmentComponent,
    MastersmstempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
