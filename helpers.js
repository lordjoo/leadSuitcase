const fs = require("fs");
let helpers = {};

helpers.writeFirebaseConfigFile = function () {
    let file = fs.readFileSync(__dirname+'/_service.js','utf-8');
    let after = file.replace('// See https://firebase.google.com/docs/web/setup for more details.\n','').replace('','');
    after = after.replace('// You will also need to load the Firebase SDK.\n','');
    after = after.replace('// Copy and paste this into your JavaScript code to initialize the Firebase SDK.\n','');
    after = after.replace('firebase.initializeApp(','')
        .replace(')','');
    let newFile = `
        const firebaseConfig = ${after}
        module.exports.firebaseConfig = firebaseConfig;
    `;
    process.nextTick(()=>{
        fs.writeFile(__dirname+'/src/firebase-config.js',newFile,function () {
            let projectID = require("./src/firebase-config").firebaseConfig.projectId;            
    
            let initProject = `
            {
              "projects": {
                "default": "${projectID}"
              }
            }`;
            fs.writeFileSync(__dirname+'/.firebaserc',initProject);
        });
    });

    let publicFile = `
        importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js');
        importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js');
        ${file}
            
        const messaging = firebase.messaging();
        
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
    `;
    fs.writeFileSync(__dirname+'/public/firebase-messaging-sw.js',publicFile);
    fs.unlinkSync(__dirname+'/_service.js');
};

module.exports = helpers;
