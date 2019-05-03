import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {
  @Input() entry: Entry<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.entry);
  }

}
