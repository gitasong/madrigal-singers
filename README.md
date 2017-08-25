# Madrigal Singers

Web app for a semi-fictitious (real in concept, not yet in execution) madrigal group that allows users to view the roster of singers and click on individual singers to navigate to a detail page. Admins can additionally add new singers, edit singers' details, and delete singers.

#### By Nicole Freed

## Specs / User Stories
* Users can view a roster of all singers.
* Users can click a singer's entry in the roster to visit their profile page, which displays further details about the singer.
* Users can visit an "About" page that explains more about the group and what it does.
* All data is stored in a database, so it's always there when needed.
* Administrators can add new users to the roster. (No admin authentication currently.)
* Administrator can edit or update singer profiles.
* Administrators can delete individual singers.

## Prerequisites

  You will need the following platforms, apps, and languages properly installed on your computer.

  * [Git](https://git-scm.com/)
  * [Node.js](https://nodejs.org/) (with NPM)
  * [TypeScript](http://www.typescriptlang.org):
    * install via npm with `npm install typescript -g`
    * check installation with `tsc -v`; you should see a version number

In addition, you will need to set up a Firebase account:

  * [Firebase](https://firebase.google.com)

## Installation (in Terminal)

  * `git clone https://github.com/gitasong/madrigal-singers`
  * `cd madrigal-singers`
  * `npm install`
  * `bower install`

## Database Setup (REQUIRED) (Firebase)

  * User dashboard area: choose `Create a New Project`.
  * Provide a name for the project (`madrigal-singers` will do, but you may choose any name).
  * Choose your country/region from the dropdown.
  * Overview area: choose `Add Firebase to your web app`.
  * Save the information in the popup modal that appears. You'll need it for the API Keys step.
  * Database area (see left-hand nav bar): click on RULES in the blue navbar reading Realtime Database.
  * Change both the ".read", and ".write" properties to "true", like so:
  >`{`
  >>`"rules": {`
    >>>`".read": "true",`<br/>
    >>>`".write": "true"`<br/>

  >>`}`<br/>

  >`}`<br/>

## API Keys (REQUIRED)

  * In the `madrigal-singers` project directory, create a new file called `api-keys.ts` in the `src/app` directory.
  * Insert your Firebase credentials from the modal popup as follows (replace the `xxxx` with your specific credentials):

  > `export var masterFirebaseConfig = {`<br/>
    >>`apiKey: "xxxx",`<br/>
    `authDomain: "xxxx.firebaseapp.com",`<br/>
    `databaseURL: "https://xxxx.firebaseio.com",`<br/>
    `storageBucket: "xxxx.appspot.com",`<br/>
    `messagingSenderId: "xxxx"`<br/>

  >`};`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Forking / Further Development

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known Bugs

No known bugs.

## Support and Contact details

You can contact me with questions or inquiries at gitasong@github.io.

## Technologies Used

  * HTML 5
  * CSS 3
  * Bootstrap 3
  * Google Fonts
  * TypeScript 2.4.2
  * ECMAScript (JavaScript) 5 & 6
  * Node.js 8.2.1
  * npm (Node package manager) 5.3.0
  * Bower (front-end dependency manager) 1.8.0
  * Angular2.js
  * Angular-CLI 1.0.0
  * AngularFire2 4.0.0-rc.0 (database connectivity/integration)
  * Google Firebase (database service)

  * This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

  ### License

  This project is licensed under the MIT license.

  Copyright (c) 2017 Nicole Freed. All rights reserved.
