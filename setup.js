const app = require('fastify')({ logger: true })
const exec = require("child_process").exec;
const spawn = require("child_process").spawn;
const execSync = require("child_process").execSync;
const path = require('path')
const opn = require("opn");
const helpers = require("./helpers").helpers;
const AuthClient = require("./helpers").auth;

app.register(require('fastify-static'), {
  root: path.join(__dirname, '/setup/'),
});
app.register(require('fastify-cors'), {
  origin:true
});

const fs = require("fs");

// Declare a route
app.get('/', (request, res) => {
  res.sendFile("/index.html");
});
app.post('/firebase/create',async (req,res) => {
  console.log(req.body);
  exec(`firebase projects:create ${req.body.p_id} -n "${req.body.p_name}"`, async (err, stdout, stderr) => {
    if (err) {
      res.send({
        status: "failed",
        msg: "Unable to create your project, Please enter another Project ID "
      });
    } else {
      await exec(`firebase apps:create WEB Website --project ${req.body.p_id}`, async function (err,stdout,stderr) {
        console.log(stderr);
        try { 
          execSync('firebase --out _service.js apps' + stdout.split('firebase apps')[1]);
        }
        catch (e) {
          console.log(e);
        }
      });
      res.send({
        status: "done",
        msg: "Completed Creating The applications"
      });
    }
  });
});
app.post('/project/config',async (req,res) => {
  let config = req.body.config;
  let file = `
    const config = ${config};
    module.exports.config = config;
  `;
  try {
    fs.writeFileSync(__dirname+'/src/config.js',file);
    helpers.writeFirebaseConfigFile();
    res.send({status:"done"});
  } catch (e) {
    res.send({status:"failed"});
  }
});
app.get('/getProjectID', function (req, res) {
  let projectID = require("./firebase-config").firebaseConfig;
  if (projectID)
    projectID = projectID.projectId;
  res.send(projectID);
});
app.get('/getAllConfig', function (req, res) {
  let config = require("./firebase-config").firebaseConfig;
  res.send(config);
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





// Run the server!
const start = async () => {
  try {
    await app.listen(8009)
    console.log(`server listening on ${app.server.address().port}`)
    opn('http://localhost:8009');
  } catch (err) {
    process.exit(1)
  }
};
start();