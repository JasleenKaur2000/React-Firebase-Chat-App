import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyDnXFBSPGDNYgcnEoq9jNrFaGkuxeQiecE',
  authDomain: 'chat-web-app-e1abd.firebaseapp.com',
  databaseURL: 'https://chat-web-app-e1abd-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-e1abd',
  storageBucket: 'chat-web-app-e1abd.appspot.com',
  messagingSenderId: '74974881071',
  appId: '1:74974881071:web:d0fa662894fbd404842dda',
};

// eslint-disable-next-line no-unused-vars
const app = firebase.initializeApp(config);
