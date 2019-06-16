import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.scss']
})
export class CircularComponent implements OnInit {

  @Input() entry: Entry<any>;
  @Input() parentEntry: Entry<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.entry.fields);
  }

}
