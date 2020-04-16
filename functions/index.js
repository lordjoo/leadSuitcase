const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);


exports.subscribe = functions.https.onCall(async data => {
   return await admin.messaging().subscribeToTopic(data,'news')
});

exports.dbNotify = functions.firestore.document('notifications').onCreate(snapshot => {
   console.log('notification event listener fired');
   console.log(snapshot);
   return 'job started';
});

exports.notifyUsers = functions.https.onCall(async ({title,body,link,icon}) => {
   let msg = {
      notification:{
         title:title,
         body:body,
         icon:icon,
         sound:"default",
         priority:"high",
         click_action:link,
         badge:"./img/badge.png"
      },
      data:{
         link:link
      }
   };
   admin.messaging().sendToTopic('news',msg,{priority:"high"}).then(res => {
      console.log("msg send ", res);
   }).catch(err => console.log("failed ith err",err));
});
