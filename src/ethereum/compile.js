const path = require("path");
const buildPath = path.resolve(__dirname, "build");
const { compile } = require("./lib/compiler");
const fs = require("fs-extra");
require("dotenv").config();

fs.removeSync(buildPath);

compile(process.env.SMC_NAME + ".sol");
