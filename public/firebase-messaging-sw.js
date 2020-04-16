// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAB0DijCJbsdbS0hov-cVXc-wHdnXhI2hM",
    authDomain: "leadsuitcase.firebaseapp.com",
    databaseURL: "https://leadsuitcase.firebaseio.com",
    projectId: "leadsuitcase",
    storageBucket: "leadsuitcase.appspot.com",
    messagingSenderId: "35194101590",
    appId: "1:35194101590:web:ad98ab8443ec84ebff80f7",
    measurementId: "G-KY4DVZ4Y70",
});

const messaging = firebase.messaging();
console.log('hi from fcm sw');

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon,
        vibrate: [200, 100, 200],
        tag:"leadSuitCase",
        renotify:true,
        data:{
            link: payload.notification.data.link ?? ''
        }
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});

self.addEventListener("notificationclick",function (event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.data.url + "?notification_id=" + event.data.id)
    );
});
