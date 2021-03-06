<p align="center">
  <img src="http://citi.com/ventures/images/hero-v-arrow.svg?raw=true"/>
</p>

# Ventures

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Installation
```sh
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Local Environment Configuration
To get the app to pull content from Contentful, you'll need to update `environment.ts`:

```js
export const environment = {
  production: false,
  contentful: {
    hostUrl: 'preview.contentful.com',
    webappUrl: 'https://app.contentful.com',
    environment: '<environment_id>',
    space: '<space_id>',
    token: '<preview_api_token>',
    cmsEdit: true
  }
};
```

## Build Configurations
The two following configurations exist for Preview and Production builds:

Run `ng build -c pre-production` for a Preview build. Update `environment.pre-prod.ts`:

```js
export const environment = {
  production: true,
  contentful: {
    hostUrl: 'preview.contentful.com',
    webappUrl: 'https://app.contentful.com',
    environment: 'master',
    space: '<space_id>',
    token: '<preview_api_token>',
    cmsEdit: true
  }
};
```

Run `ng build -c production` for a Production build. Update `environment.prod.ts`:

```js
export const environment = {
  production: true,
  contentful: {
    hostUrl: 'cdn.contentful.com',
    webappUrl: 'https://app.contentful.com',
    environment: 'master',
    space: '<space_id>',
    token: '<delivery_api_token>',
    cmsEdit: false
  }
};
```

## Rich Text Parser

Contentful provides a helper function called `documentToHtmlString()` for parsing the response in a Rich Text field. By storing this method as a Pipe, we can easily apply this function on any field that needs to render HTML. Take this example: 

```html 
<div [innerHTML]="item.fields.description | rtToHtml"></div>
```

Add the Pipe `rtToHtml` to any element that is expecting a value from a Rich Text field, and your work is done.

## Edit Button

By default, non-Production configurations include the `<cms-edit>` button to offer a direct link back to Contentful for in-context editing.
If you dont want this element mucking up your view during development, you can turn this off in `environment.ts` by setting 
```js 
cmsEdit: false
```
