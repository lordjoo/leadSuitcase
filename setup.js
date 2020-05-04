const app = require('fastify')({ logger: true })
const exec = require("child_process").exec;
const spawn = require("child_process").spawn;
const execSync = require("child_process").execSync;
const path = require('path')
const opn = require("opn");
const helpers = require("./helpers");

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
  await exec(`firebase projects:create ${req.body.p_id} -n "${req.body.p_name}"`,async (err,stdout,stderr) => {
    if (err) {
      res.send({
        status:"failed",
        msg:"Unable to create your project, Please enter another Project ID "
      });
    } else {
      await exec(`firebase apps:create WEB Website --project ${req.body.p_id}`, async function (err,stdout,stderr) {
        console.log(stderr);
        try {
          execSync('firebase --out _service.js apps'+stdout.split('firebase apps')[1]);
        } catch (e) {
          console.log(e);
        }
      });
      res.send({
        status:"done",
        msg:"Completed Creating The applications"
      });
    }
  });
});
app.post('/project/config',async (req,res) => {
  let config = req.body.config;
  let file = `
    import Vue from 'vue'
    const config = ${config};
    Vue.prototype.$config = config; 
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
  let projectID = require("./src/firebase-config").firebaseConfig;
  if (projectID)
    projectID = projectID.projectId;
  res.send(projectID);
});
app.get('/getAllConfig', function (req, res) {
  let config = require("./src/firebase-config").firebaseConfig;
  res.send(config);
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