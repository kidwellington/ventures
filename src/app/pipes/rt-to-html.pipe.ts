import { Pipe, PipeTransform } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Pipe({
  name: 'rtToHtml'
})
export class RtToHtmlPipe implements PipeTransform {

  transform(document: any): any {
    return documentToHtmlString(document);
  }

}
