import userSettings from "../../Story/settings";
import settings from "../settings";
import * as fs from "fs";
import path = require("path");
import isIFIDVersion from "ifid/dist/node.es6/TypeGuards/isIFIDVersion";
import {IFID} from "ifid/dist/node.es6";
import {IFIDVersions} from "ifid/dist/node.es6";


const filepath = path.resolve(__dirname, './../system/ifid.json');
const ifidGameString = fs.readFileSync(filepath, 'utf8');
const ifidGame = JSON.parse(ifidGameString);

if (userSettings.project.name === settings.app.defaultName)
    throw Error("You didn't set project name. Set it in ./src/Story/settings.ts");

if (userSettings.project.debug)
    throw Error("Debug mode is on. Turn it off in ./src/Story/settings.ts for building final version.");

if (!isIFIDVersion(ifidGame.ifid)) {
    const ifid =  new IFID({version: IFIDVersions.UUIDv4});
    ifidGame.ifid = ifid.toString();
    ifidGame.name = userSettings.project.name;
    fs.writeFileSync(filepath, JSON.stringify(ifidGame, null, 2));
    console.log('ifid version has been successfully set');
} else {
    console.log('ifid version already exists');
}