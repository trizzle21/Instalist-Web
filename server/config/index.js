
const fs = require('fs');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;

configBuffer = null;

switch(NODE_ENV){
    case "dev":  
        configBuffer = fs.readFileSync(path.resolve(__dirname, 'dev.json'), 'utf-8');
    case "prod":
        configBuffer = fs.readFileSync(path.resolve(__dirname, 'prod.json'), 'utf-8');
    default:
        configBuffer = fs.readFileSync(path.resolve(__dirname, 'dev.json'), 'utf-8');

}

config = JSON.parse(configBuffer);
module.exports = config;