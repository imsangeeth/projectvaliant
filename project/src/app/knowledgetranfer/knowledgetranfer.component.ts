import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledgetranfer',
  templateUrl: './knowledgetranfer.component.html',
  styleUrls: ['./knowledgetranfer.component.css']
})
export class KnowledgetranferComponent implements OnInit {

  isshow:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  show()
  {
    this.isshow = true;
  }


}
