# Installation
the installation for the script is very simple, just a few steps and you will e live  <br>
you just need to have <a href='https://nodejs.org/'>NodeJS</a> installed oon your computer and ready ,
simply go to <a href='https://nodejs.org/'>NodeJS</a> Website and download it .

## Clone the repo 
Download the repo from Github by visiting this URL <a href="https://github.com/lordjoo/leadSuitcase">Here</a> , Or <br>
clone it by using this command 

```
git clone https://github.com/lordjoo/leadSuitcase
```

## Running The Script Command 
Now you have to open a terminal window on linux or a cmd on Windows , then navigate to the project folder 
then write this command to install all dependencies we need 
```
npm run get
```  

after this command completed run the setup command 
```
npm run setup
```

this script will mke some actions 
1. Logging You into Firebase 
2. Opening a setup wizard

<br>
After the setup is completed, your website is now ready for being deployed to firebase .
th setup will walk you throw 3 main steps 

1. Creating a firebase project 
2. Adding the main information for the website like name, color and short description 
3. Choosing where you want to store your data and enable the authentication  

## Test Before deploying 
if you want to test the website before deploying it run this command 
```
npm run test
```

## Deploy To Firebase 
just run this command and your project is now live .
```
npm run deploy
```  
now your app is live and you can share it with students 
<br><br>

**Extra Tip:** Read how to get .ml domain for your club website [here](/get-ml-domain) 