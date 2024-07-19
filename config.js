//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Arusha,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Fred1e/Fredi_md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a8b74780a8d18240b1d82.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255686745716,255764182801,255620814108";
global.owner = process.env.OWNER_NUMBER || "255686745716";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VUNlA1cjFUZU9MbDB6ZTJrTWl1eU9NMWFoNWNsanFHdERCNTJaNTNIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUt6SHJuZ3NRdWNYcmVkVnI4S1pGbEFzR09IejBESGJiRW5NYlh5QU9Vaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJS1dRMGE1T2tLMjVCU1UzN0J1MUM2bUJuT3hVYWZ4UjRBTDFuNnRpS1VnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEV1V6RXByKzBVSW5LS1UxZVBKcFo0TldpYmlNZ3lUUzBvbmF2VVJwZ1ZrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HUGFiRDJzZ1psWE0xUE94QWM4bko4RElhM1hISGc5YVNDdExYaTVYbHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVvbDQrZXI4T1FVNFRrU01waGhHSndHSHVCZnc3YThSVFNrVzlrYUxVVWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUZKckdWTjZCV3FhNm90djVxek5MTlhXMERJZnFjMjZ1UUYyMWpmZTkwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTZIZVZ1ZTc1cWdlTURYdDVxbGsweFpwY1E0UVFTb3J5WFJJWU45Ni94MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ4dUNVNEhTZCtNQ1lkWkQ5REFQV05QMDF1Mm9IYWRqR3FDMHZGcG1XRVRUZkFXTm1FRm1LWHJsWE5HcnBzcE5Ed1IrKzZudzRmU0xYWGV6aEVuQWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6IjgwUjRzRVRITXZtOGNaN1psTTNuaGFvcDJTTTJmUkxOSEwrZUw5MjRpNzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NjEyNzkyNDc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ4RTM5RTQ4RkE4NUQ2MTdEOTMxRkYwMzZBNjdFRkQ4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjEzNzg4OTF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkkwLUFPTlhRVEFlVXBBX1ZoaGxWUnciLCJwaG9uZUlkIjoiZDU0Nzg3MTQtMTM4My00YTFmLTgwNGQtZDc5ODgxYWUxYzM0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjgvT1k2L0N0NC84OTZGcloyTFRmcjlEN0dqWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQWm4yWHhOUVpIVU55N1FmSnEwdXRxSURadGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWk1URThCRFEiLCJtZSI6eyJpZCI6IjI1NTYxMjc5MjQ3NzozM0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlA4ck9RRUVMdlE2TFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUUNLaTM5aTVJdysrejRqUWp2T3RWSFdXMHRMK2x0RWNmam9pOVZMMmExYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiekRGNGttN2gxaXVCWEFVS3lDcTRJK3o5S092Q2tMbXpOckdxdkpWMThIZTY3eXFZY3Rya0lMYTJRb2JYVGJkREc0eDR1RGZoQzVub1RSU0IxMklsQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImxDTmMrcnFXUm9VdHlpeXl0WUFkTTRSdGc3SFNPSXFNSXpDVUtSQ2lqbWZwN2IzZnNMR1RJNFJFQXF1UmZGMjFzU01RVzc4UFlVVzdaUGZEMCt0eWhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjEyNzkyNDc3OjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVBaW90L1l1U01QdnMrSTBJN3pyVlIxbHRMUy9wYlJISDQ2SXZWUzltdFgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjEzNzg4ODcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUG9XIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is FREDI_MD",
  author: process.env.PACK_AUTHER || "FREDI_MD",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FREDI_MD",
  ownername: process.env.OWNER_NAME || "FREDI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FREDI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
