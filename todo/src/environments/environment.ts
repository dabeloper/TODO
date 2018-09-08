// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /*Firebase > Authentication > Web Setup*/
  firebase: {
      apiKey: "AIzaSyBC_oautl-oHWFlqb8b_nkMFWgb4epYWiA",
      authDomain: "todo-feda5.firebaseapp.com",
      databaseURL: "https://todo-feda5.firebaseio.com",
      projectId: "todo-feda5",
      storageBucket: "todo-feda5.appspot.com",
      messagingSenderId: "776431441828"
    }
};


/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
