// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5001/polls-85570/europe-west1/api',
  firebaseConfig: {
    apiKey: "AIzaSyDVmGjAjEpQaVqP8YME-VQtXzlylmwffFE",
    authDomain: "polls-85570.firebaseapp.com",
    databaseURL: "https://polls-85570.firebaseio.com",
    projectId: "polls-85570",
    storageBucket: "polls-85570.appspot.com",
    messagingSenderId: "67032441954",
    appId: "1:67032441954:web:381c22ae07c024a1da5d3b"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
