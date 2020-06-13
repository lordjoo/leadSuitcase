const express = require('express');
const execSync = require("child_process").execSync;
const exec = require("child_process").exec;
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = 8009;
const path = require('path')
const opn = require("opn");
const helpers = require("./helpers").helpers;
const AuthClient = require("./helpers").auth;
const fs = require("fs");
app.use(express.static('setup'));
app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

/* Setting Up The Project Config */

// Creating Firebase Project
app.post('/firebase/create', async (req,res) => {
    try {
        execSync(`firebase projects:create ${req.body.p_id} -n "${req.body.p_name}"`);
        let o = execSync(`firebase apps:create WEB Website --project ${req.body.p_id}`);
        await exec('firebase --out _service.js apps' + o.toString().split('firebase apps')[1]);
        res.send({'status':"done"});
    } catch (e) {
        console.log(e.toString())
        res.send({
            status: "failed",
            msg: "Unable to create your project, Please enter another Project ID "
        });
    }
});

// initialize a project
app.post('/firebase/init',async (req, res) => {
    console.log(req);
    try {
        let c1 = execSync(`firebase apps:create WEB Website --project ${req.body.p_id} `);
        await    exec('firebase --out _service.js apps' + c1.toString().split('firebase apps')[1]);
        res.send({'status':"done"});
    } catch (e) {
        return res.send({'status':"failed","msg":`Failed To Initialise ${req.body.p_id} Project `});
    }
});

// save website main cinfig file
app.post('/project/config',async (req,res) => {
    let config = req.body.config;
    let file = `const config = ${config};
module.exports.config = config;`;
    try {
        fs.writeFileSync(__dirname+'/src/config.js',file);
        helpers.writeFirebaseConfigFile();
        res.send({status:"done"});
    } catch (e) {
        console.log(e)
        res.send({status:"failed"});
    }
});

app.get('/getProjectID', (req, res) => {
    try {
        let projectID = require("./firebase-config").firebaseConfig;
        if (projectID)
            projectID = projectID.projectId;
        res.send(projectID);
    } catch (e) {
        res.send({"status":"failed"});
    }
});
app.get('/getAllConfig', function (req, res) {
    try {
        let config = require("./firebase-config").firebaseConfig;
        res.send(config);
    } catch (e) {
        res.send({"status":"failed"});
    }
});

app.post("/addClient",(req,res) => {
    let client = req.body.client;
    fs.writeFileSync(__dirname+'/functions/client_id.json',client);
    res.send("done");
});
app.get("/getAuthURL",(req,res)=>{
    let link = AuthClient.getAuthLink();
    console.log(link);
    res.send(link);
});
app.post("/addAuthToken",async (req, res)=>{
    await AuthClient.getToken(req.body.code);
    res.send({status:"done"});
});

app.get("*",(req,res)=>{
    res.sendFile('setup/index.html');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
