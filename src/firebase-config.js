const Rebase = require('re-base');
const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "<apikey>",
  authDomain: "<authDomain>",
  databaseURL: "<databaseURL>",
  projectId: "<projectId>",
  storageBucket: "<storageBucket>",
  messagingSenderId: "<messagingSenderId>"
};

const app = firebase.initializeApp(firebaseConfig);
const config = Rebase.createClass(app.database());

export const storage = app.storage();

export default config;