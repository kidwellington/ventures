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
    accessToken: environment.contentful.deliveryToken
  })

  constructor() { }

}
