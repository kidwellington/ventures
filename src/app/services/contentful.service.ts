import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  public cdaClient = createClient({
    space: environment.contentful.space,
    environment: environment.contentful.environment,
    accessToken: environment.contentful.token,
    host: environment.contentful.hostUrl
  })

  constructor() { }

   // fetch bios
   getBios(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'bio'
    }, query))
    .then(res => res.items);
  }

  // fetch bios with a given slug
  // and return one of them
  getBio(slug: string): Promise<Entry<any>> {
    return this.getBios({ 'fields.slug': slug })
    .then(items => items[0])
  }

  // fetch categories
  getCategories(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'category'
    }, query))
    .then(res => res.items);
  }

  // fetch perspectives
  getPerspectives(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'perspective'
    }, query))
    .then(res => res.items);
  }
  

}
