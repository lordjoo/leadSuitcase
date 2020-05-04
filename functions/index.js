const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const notify = require("./notify").notifyFromDB;
const {Mailer,Auth} = require("./app/mailer");
const fs = require("fs");

exports.subscribe = functions.https.onCall(async data => {
   return await admin.messaging().subscribeToTopic(data,'news')
});

exports.notify = notify;

exports.mailerCheck = functions.https.onCall(_=>{
   return new Mailer().checkConfig();
});

exports.addClientJSON = functions.https.onCall(json_data => {
   fs.writeFileSync(__dirname+'/client_id.json',json_data);
   return 'done';
});

exports.authoriseWithCode = functions.https.onCall(code =>{
   try {
      Auth.getToken(code);
      return {msg:"done"};
   } catch (e) {
      return {msg:"failed"};
   }
});

exports.mailerRuner = functions.firestore.document('mailer/{id}').onCreate(async snap => {
   let camp = snap.data();
   let log = [];
   for (const mail of camp.to) {
      new Mailer().send({subject:camp.email_subject,body:camp.email_body},mail.email).then(async _ =>{
         log.push({email:mail.email,status:"Successful"});
         await admin.firestore().collection('mailer').doc(snap.id).update({
            "log":log
         });
      }).catch(async err =>{
         log.push({email:mail.email,status:"Failed"});
         await admin.firestore().collection('mailer').doc(snap.id).update({
            "log":log
         });
         console.log(err)
      });
      await Mailer.sleep(5000);
   }
   await admin.firestore().collection('mailer').doc(snap.id).update({
      "to":log,
      "status":"Successful"
   });
   return {
      msg:"done"
   };
});