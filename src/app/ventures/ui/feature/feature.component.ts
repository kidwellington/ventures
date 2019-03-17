import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() entry: Entry<any>;

  public rowContent: Entry<any>[];

  public itemContent: any;

  
  constructor() { }

  ngOnInit() {
    
    console.log(this.entry.fields);
    //documentToHtmlString(this.entry.fields);
    this.entry.fields.footer = documentToHtmlString(this.entry.fields.footer);
    console.log("Footer string", this.entry.fields.footer);
    this.entry.fields.rowData[0].fields.itemData[0].fields.description = documentToHtmlString(this.entry.fields.rowData[0].fields.itemData[0].fields.description);
    console.log("Description string", this.entry.fields.rowData[0].fields.itemData[0].fields.description);

    
  }

}
