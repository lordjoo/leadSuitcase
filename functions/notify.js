const functions = require('firebase-functions');
const admin = require('firebase-admin');

module.exports.notifyFromDB = functions.firestore.document('notifications/{id}').onCreate(async snap => {
    let data = snap.data();
    let doc = snap.id;
    let notObj = {};
    notObj.title = data.title;
    notObj.body = data.body;
    notObj.icon = data.icon;
    notObj.click_action = data.link;
    notObj.badge="./img/badge.png"
    let notification = {
       notification:notObj,
       data:{
          link:data.link
       }
    };
    await admin.firestore().collection('notifications').doc(doc).update({
       statues:"Sending",
    });
    admin.messaging().sendToTopic('news',notification,{priority:"high"}).then(res => {
       admin.firestore().collection('notifications').doc(doc).update({
          statues:"Successful"
       }).then( _ => console.log("done")).catch(err => console.log('Firestore: failed with err',err));
    }).catch(err => {
       admin.firestore().collection('notifications').doc(doc).update({
          statues:"Failed",
       }).catch(err => console.log('failed with err',err));
       console.log('Messaging: failed with err',err)
    });
 });
 