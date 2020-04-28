const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
const Base64 = require("js-base64").Base64;

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];
const TOKEN_PATH = "token.json";

// Load client secrets from a local file.
fs.readFile("client_id.json", (err, content) => {
    authorize(JSON.parse(content), batchSend);
});

function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
    );

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getNewToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES
    });
    console.log("Authorize this app by visiting this url:", authUrl);

    oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error("Error retrieving access token", err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
            if (err) return console.error(err);
            console.log(colors.underline("Token stored to"), TOKEN_PATH);
        });
        callback(oAuth2Client);
    });
}

function batchSend(auth) {
    let failed = [];
    sendMessage(
        auth,
        { body: data, subject: answers[0] },
        submission.email,
        failed
    );
    sleep(1500);
}

function sleep(time){
    return new Promise((resolve) => {
        setTimeout(resolve,time);
    })
}

function sendMessage(auth, email, recipient, failed) {
    const gmail = google.gmail({ version: "v1", auth });
    var base64EncodedEmail = Base64.encodeURI(
        createMessage(email.body, recipient, email.subject)
    );
    var request = gmail.users.messages
        .send({
            userId: "me",
            resource: {
                raw: base64EncodedEmail
            }
        })

        .then(() => {
            console.log(colors.cyan(`Successfully Sent to ${recipient}`));
        })
        .catch(err => {
            failed.push(recipient);
            console.log(colors.red(`Couldn't send to ${recipient}`));
        });
}
function createMessage(messageText, recipient, subject) {
    let mimeMsg = mimemessage.factory({
        contentType: "text/html;charset=utf-8",
        body: messageText
    });
    mimeMsg.header("to", recipient);
    mimeMsg.header("subject", subject);

    return mimeMsg.toString();
}
const AskQuestion = (rl, question) => {
    return new Promise(resolve => {
        rl.question(colors.green(question), answer => {
            resolve(answer);
        });
    });
};

const Ask = function(questions) {
    return new Promise(async resolve => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let results = [];
        for (let i = 0; i < questions.length; i++) {
            const result = await AskQuestion(rl, questions[i]);
            results.push(result);
        }
        rl.close();
        resolve(results);
    });
};
