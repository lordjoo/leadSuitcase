import Vue from 'vue'
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/messaging'
import 'firebase/functions'

import { firebaseConfig } from './firebase-config'
import { firestorePlugin } from 'vuefire'
firebase.initializeApp(firebaseConfig);

Vue.use(firestorePlugin)
const messaging = firebase.messaging();
Vue.prototype.$messaging = messaging;

let ask = async function () {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('User Token Is :', token);
    let sub = firebase.functions().httpsCallable('subscribe');
    let res = await sub(token);
    console.log(res);
};

messaging.onTokenRefresh(async (refresh)=>{
    console.log(refresh);
    let sub = firebase.functions().httpsCallable('subscribe');
    let res = await sub(refresh);
    console.log(res);
});

messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
});


ask();

export let db = firebase.firestore();