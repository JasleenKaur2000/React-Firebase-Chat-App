/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDnXFBSPGDNYgcnEoq9jNrFaGkuxeQiecE',
  authDomain: 'chat-web-app-e1abd.firebaseapp.com',
  databaseURL: 'https://chat-web-app-e1abd-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-e1abd',
  storageBucket: 'chat-web-app-e1abd.appspot.com',
  messagingSenderId: '74974881071',
  appId: '1:74974881071:web:d0fa662894fbd404842dda',
});

firebase.messaging();
