# juju

=====
## DB

Create Database (from command line)
    createdb juju
Load Schema (from command line)
    psql juju < server/db/schema.sql
Start Database Server (locally)
    node server/db/databases.js
Load MockDataSet

============================================
## Testing

to start karma from the command line
    sudo npm install -g karma-cli
    
to run tests
    karma start

=======================================
##API Keys
-put them in the .env file

-this line goes in any file you are trying to require an api key in
require('dotenv').config()
-if you add an api key, add the name of the key variable (but not the key itself) to the dotEnvTemplate file so everyone can see which APIs we are playing with
-add the api key/secret to the slack channel
 

