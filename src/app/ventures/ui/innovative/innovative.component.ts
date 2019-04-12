import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-innovative',
  templateUrl: './innovative.component.html',
  styleUrls: ['./innovative.component.scss']
})
export class InnovativeComponent implements OnInit {

  @Input() entry: Entry<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.entry.fields)
    this.entry.fields.footer = documentToHtmlString(this.entry.fields.footer);
  }

}
