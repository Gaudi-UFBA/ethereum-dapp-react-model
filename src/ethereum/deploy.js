require("dotenv").config();
const env = process.env;
const deployer = require("./lib/deployer");
const contract = require("./build/" + env.REACT_APP_SMC_NAME + ".json");

deployer.deploy(contract);
