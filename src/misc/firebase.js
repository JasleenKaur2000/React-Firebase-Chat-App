import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyDnXFBSPGDNYgcnEoq9jNrFaGkuxeQiecE',
  authDomain: 'chat-web-app-e1abd.firebaseapp.com',
  databaseURL: 'https://chat-web-app-e1abd-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-e1abd',
  storageBucket: 'chat-web-app-e1abd.appspot.com',
  messagingSenderId: '74974881071',
  appId: '1:74974881071:web:d0fa662894fbd404842dda',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BGvdwON3Yjex5iziR4wixWX0NbVjBxm1a6cQcOXz42SbRWrGM3yaZqe0Gh7Cd6edq48v_eRxsGGtdypSZ9TvF34'
  );

  messaging.onMessage(data => {
    console.log(data);
  });
}
