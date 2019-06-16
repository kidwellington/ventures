import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-perspective',
  templateUrl: './perspective.component.html',
  styleUrls: ['./perspective.component.scss']
})
export class PerspectiveComponent implements OnInit {

  @Input() entry: Entry<any>;
  @Input() parentEntry: Entry<any>;

  constructor() { }

  ngOnInit() {
    //console.log(this.entry.fields)
  }

}
