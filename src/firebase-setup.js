import Vue from 'vue'
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/messaging'
import 'firebase/functions'

import { firebaseConfig } from './firebase-config'
import { firestorePlugin } from 'vuefire'
firebase.initializeApp(firebaseConfig);
firebase.functions().useFunctionsEmulator('http://localhost:5001')
//firebase.firestore().settings({host: "localhost:8080", ssl: false});

Vue.use(firestorePlugin)
const messaging = firebase.messaging();
Vue.prototype.$messaging = messaging;

messaging.onTokenRefresh(async (refresh)=>{
    console.log("Token Refreshed");
    let sub = firebase.functions().httpsCallable('subscribe');
    let res = await sub(refresh);
    console.log("new Token",res);
});

export let db = firebase.firestore();