const fs = require("fs");
const {google} = require("googleapis");
const Base64 = require("js-base64").Base64;

let mailerClass = {};

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];
const TOKEN_PATH = __dirname + "/../token.json";
let client_json = JSON.parse(fs.readFileSync(__dirname + '/../client_id.json'));
const mimemessage = require("mimemessage");


const AuthClass = {
    oAuth2client: function () {
        const {client_secret, client_id, redirect_uris} = client_json.web;
        const oAuth2Client = new google.auth.OAuth2(
            client_id,
            client_secret,
            redirect_uris[0]
        );
        return oAuth2Client;
    },
    getToken: async function (code) {
        const oAuth2Client = this.oAuth2client();
        await oAuth2Client.getToken(code, (err, token) => {
            if (err) {
                console.log(err);
                return {msg: "Error retrieving access token", error: err};
            }
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
            return new Promise(resolve => resolve({msg: 'done'}));
        });
    },
    getAuthLink: function () {
        const oAuth2Client = this.oAuth2client();
        return oAuth2Client.generateAuthUrl({
            access_type: "offline",
            scope: SCOPES
        });
    },
    auth: function () {
        const {client_secret, client_id, redirect_uris} = client_json.web;
        const oAuth2Client = new google.auth.OAuth2(
            client_id,
            client_secret,
            redirect_uris[0]
        );
        let token = fs.readFileSync(TOKEN_PATH);
        oAuth2Client.setCredentials(JSON.parse(token));
        return oAuth2Client;
    },
};

class Mailer {
    constructor() {

    }

    async send(email, recipient) {
        let oAuth2client = AuthClass.auth();
        const gmail = google.gmail({version: "v1",auth: oAuth2client});
        let base64EncodedEmail = Base64.encodeURI(
            this.createMessage(email.body, recipient, email.subject)
        );
        return gmail.users.messages.send({
                userId: "me",
                resource: {
                    raw: base64EncodedEmail
                }
            })
    }

    createMessage(messageText, recipient, subject) {
        let mimeMsg = mimemessage.factory({
            contentType: "text/html;charset=utf-8",
            body: messageText
        });
        mimeMsg.header("to", recipient);
        mimeMsg.header("subject", subject);

        return mimeMsg.toString();
    }

    checkConfig() {
        let statues;
        statues = [];
        try {
            fs.readFileSync(__dirname+'/../client_id.json');
            statues.push({
                name:"client",
                state:true,
            })
        } catch (e) {
            statues.push({
                name:"client",
                state:false,
                info:{
                    msg:"Client JSON file not found",
                    error:"miss_configuration"
                }
            });
        }
        try {
            fs.readFileSync(__dirname+'/../token.json')
            statues.push({
                name:"client",
                state:true,
            });
        } catch (e) {
            statues.push({
                name:"client",
                state:false,
                info:{
                    msg: "Authentication is required, Please ReAuthenticate the app",
                    error: "no_auth",
                    link: AuthClass.getAuthLink()
                }
            });
        }
        return statues;
    }

   static sleep(time) {
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        })
    }
}

module.exports.Auth = AuthClass;
module.exports.Mailer = Mailer;
