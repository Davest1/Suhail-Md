const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_46_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1LFxuICAgICAgICAyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQzLFxuICAgICAgICA2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICA3NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxODksXG4gICAgICAgIDE3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxd2F3K2QrZUh6bm1oNjlUTHBBSVFqZ3J1U0RYUEd6TTBSY21OWXFVMHpVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMzk3Njk3MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMxMzJEOTQzRDEwOUEwQzgzMkI2QkE2RkI5QjA4ODY1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDcyMzYwOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTcHY5UVZ4dVJXNnhQMFRFTGhhcC1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQxNmQ0YTRlLTZlZWYtNGNjOS05M2MzLTRmN2UwMWEwZDc4N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDE5MSxcbiAgICAgIDQ1LFxuICAgICAgNzcsXG4gICAgICAyNyxcbiAgICAgIDIxMixcbiAgICAgIDE4NyxcbiAgICAgIDk3LFxuICAgICAgMjUzLFxuICAgICAgOTMsXG4gICAgICAxOTgsXG4gICAgICAyNDIsXG4gICAgICAxNSxcbiAgICAgIDEwMCxcbiAgICAgIDU5LFxuICAgICAgMyxcbiAgICAgIDQsXG4gICAgICAxOTMsXG4gICAgICAzNyxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcxLFxuICAgICAgMTYwLFxuICAgICAgMTM1LFxuICAgICAgMTI1LFxuICAgICAgMTg4LFxuICAgICAgMTMwLFxuICAgICAgMTU5LFxuICAgICAgMTQ0LFxuICAgICAgOTEsXG4gICAgICAxODUsXG4gICAgICAxOTQsXG4gICAgICAxNzEsXG4gICAgICAxNDIsXG4gICAgICAyNDAsXG4gICAgICA3NixcbiAgICAgIDIzLFxuICAgICAgMjMyLFxuICAgICAgNzMsXG4gICAgICAyNDksXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTJUTjVYU1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzk3Njk3Mzk6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDU5MDIxNjIzMzE5ODo0NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMQ1YzU0VRanRIQXRBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhYdDhZejRKQTc4Z0NiYUhMaWw2bzBHZzJiTFg1RDVweFJFUzVqZ0FpWEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidTRnS09qYXdtSkRsQ29FTEZ3WnhsNTNTejBoWnZIYWgvNDB6UUNDbzZzaGJEQ3o0RldpdWdseGQ5OWREUUM2MmhFSEFpa0lLWmVaRFZOeHpkZzFVRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibU00azRXZnlTZnEzSVpoUE1UZU9vdldmYmF3OE10UXEzeDNUMDR5ZUp4S1FOdkNYQVFDYWZyTUlUNXRMNHhIL2JydDlPbUo2b1ZtQ2c2S2Z1TllQanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzOTc2OTczOTo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDcyMzYwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQ3NBQUxTalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFDc0FBTFNqLmpzb24iOiAie1wia2V5RGF0YVwiOlwibG0ycmFWcVFpRXBXZFBnTlJmOHlnekhhWFBVaDRkSlBSOFd5RUt2c05OUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDczMjQ2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDYzNzc2NzA0MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
