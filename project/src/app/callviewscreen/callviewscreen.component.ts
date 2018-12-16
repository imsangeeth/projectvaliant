import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callviewscreen',
  templateUrl: './callviewscreen.component.html',
  styleUrls: ['./callviewscreen.component.css']
})
export class CallviewscreenComponent implements OnInit {
 
  isshow:boolean = false

  constructor() { }

  ngOnInit() {
  }

  show()
  {
    this.isshow = true;
  }


}
