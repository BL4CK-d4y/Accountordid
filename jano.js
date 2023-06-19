const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://spam-1-20.glitch.me/`);
}, 280000);

// 50 token dane
//
const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./config.json");
const prefix = config.prefix;
const jano = new Discord.Client();
const jano2 = new Discord.Client();
const jano3 = new Discord.Client();
const jano4 = new Discord.Client();
const jano5 = new Discord.Client();
const jano6 = new Discord.Client();
const jano7 = new Discord.Client();
const jano8 = new Discord.Client();
const jano9 = new Discord.Client();
const jano10 = new Discord.Client();
const jano11 = new Discord.Client();
const jano12 = new Discord.Client();
const jano13 = new Discord.Client();
const jano14 = new Discord.Client();
const jano15 = new Discord.Client();
const jano16 = new Discord.Client();
const jano17 = new Discord.Client();
const jano18 = new Discord.Client();
const jano19 = new Discord.Client();
const jano20 = new Discord.Client();
const jano21 = new Discord.Client();
const jano22 = new Discord.Client();
const jano23 = new Discord.Client();
const jano24 = new Discord.Client();
const jano25 = new Discord.Client();
const jano26 = new Discord.Client();
const jano27 = new Discord.Client();
const jano28 = new Discord.Client();
const jano29 = new Discord.Client();
const jano30 = new Discord.Client();
const help = `**
    Devjano
**`;
// dev 

const err = `** \`\`\`  [ERORR] : لازم تسوي رتبة بـ اسم  \`\`\`
         \`\`  \`\` **`;

// ======= [ settings JSON   ] ======== //
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
jano.on("message", async msg => {
  if (!msg.guild) return;
  if (msg.author.bot) return;
  if (!dinfo)
    dinfo = {
      // 
      owner: config.kahrbaaid,
      serverid: "NONE",
      channelid: "NONE", 
      timespam: "NONE",
      timestop: "NONE"
    };
  if (msg.content.startsWith(config.prefix + "setownerID")) {
    
    if (msg.channel.type == "dm")
    
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.owner = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لصاحب التوكانات __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh");
  }
  if (msg.content.startsWith(config.prefix + "setserverID")) {
    if (msg.channel.type == "dm")
      
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص  .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); //  "jano"
    dinfo.serverid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لسيرفر الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "setchannelID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.channelid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لروم الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeSpam")) {

    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع وقت الاسبام بـ الثواني **");
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); //  "jano"
    dinfo.timespam = args;
    await msg
      .reply(`** __ تم اضافة مدة ارسال الاسبام ب الثواني __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeStop")) {
    // جمــيع الحقوق محفوظة لدي "jano"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return msg.channel.send(
        "** قم بوضع وقت توقف البوت بعد بداء الاسبام بـ الساعات **"
      );
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // "jano"
    dinfo.timestop = args;
    await msg
      .reply(`** __ تم اضافة مدة توقف الاسبام بـ الساعات  __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
}); 

jano.on("message", async message => {
  if (message.content === prefix + "reset") {
    if (!dinfo.owner.includes(message.author.id)) return; 
    dinfo.serverid = "NONE";
    dinfo.channelid = "NONE";
    dinfo.timespam = "NONE"; 
    dinfo.timestop = "NONE";
    message.channel.send(`**⚠️ restsettings , <@${dinfo.owner}>**`);
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh"); 
  }
});

// ======= [ settings JSON - END   ] ======== //


// ======= [ Reload JSON   ] ======== //
jano.on("message", async message => {
  if (message.author.id !== dinfo.owner) return;
  if (message.content === config.prefix + "reload") {
    await cmd.run("refresh");
    await message.channel.send("Done,");
  }
});
// ======= [ Reload JSON - END   ] ======== //

// عیسابی ئەکاونتەکان  50 تۆکین
// ======= [ Console LOG    ] ======== //
jano.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 1`);
  console.log(`Hi ${jano.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano.guilds.size} " ]`);
});
jano2.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 2`);
  console.log(`Hi ${jano2.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano2.guilds.size} " ]`);
});
jano3.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 3`);
  console.log(`Hi ${jano3.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano3.guilds.size} " ]`);
});
jano4.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 4`);
  console.log(`Hi ${jano4.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano4.guilds.size} " ]`);
});
jano5.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 5`);
  console.log(`Hi ${jano5.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano5.guilds.size} " ]`);
});
jano6.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 6`);
  console.log(`Hi ${jano6.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano6.guilds.size} " ]`);
});
jano7.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 7`);
  console.log(`Hi ${jano7.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano7.guilds.size} " ]`);
});
jano8.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 8`);
  console.log(`Hi ${jano8.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano8.guilds.size} " ]`);
});
jano9.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 9`);
  console.log(`Hi ${jano9.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano9.guilds.size} " ]`);
});
jano10.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 10`);
  console.log(`Hi ${jano10.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano10.guilds.size} " ]`);
});
jano11.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 11`);
  console.log(`Hi ${jano11.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano11.guilds.size} " ]`);
});
jano12.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 12`);
  console.log(`Hi ${jano12.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano12.guilds.size} " ]`);
});
jano13.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 13`);
  console.log(`Hi ${jano13.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano13.guilds.size} " ]`);
});
jano14.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 14`);
  console.log(`Hi ${jano14.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano14.guilds.size} " ]`);
});
jano15.on("ready", () => {
  console.log(`[jano] : ئەکاونتی15`);
  console.log(`Hi ${jano15.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano15.guilds.size} " ]`);
});
jano16.on("ready", () => {
  console.log(`[jano] : ئەکاونتی16`);
  console.log(`Hi ${jano16.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano16.guilds.size} " ]`);
});
jano17.on("ready", () => {
  console.log(`[jano] : ئەکاونتی17`);
  console.log(`Hi ${jano17.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano17.guilds.size} " ]`);
});
jano18.on("ready", () => {
  console.log(`[jano] : ئەکاونتی18`);
  console.log(`Hi ${jano18.user.tag} , This Code by : jano`);
  console.log(`i Have  [ " ${jano18.guilds.size} " ]`);
});
jano19.on("ready", () => {
  console.log(`[jano] : ئەکاونتی19`);
  console.log(`Hi ${jano19.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano19.guilds.size} " ]`);
});
jano20.on("ready", () => {
  console.log(`[jano] : ئەکاونتی20`);
  console.log(`Hi ${jano20.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano20.guilds.size} " ]`);
});
jano21.on("ready", () => {
  console.log(`[jano] : ئەکاونتی21`);
  console.log(`Hi ${jano21.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano21.guilds.size} " ]`);
});
jano22.on("ready", () => {
  console.log(`[jano] : ئەکاونتی22`);
  console.log(`Hi ${jano22.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano22.guilds.size} " ]`);
});
jano23.on("ready", () => {
  console.log(`[jano] : ئەکاونتی23`);
  console.log(`Hi ${jano23.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano23.guilds.size} " ]`);
});

jano24.on("ready", () => {
  console.log(`[jano] : ئەکاونتی24`);
  console.log(`Hi ${jano24.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano24.guilds.size} " ]`);
});
jano25.on("ready", () => {
  console.log(`[jano] : ئەکاونتی25`);
  console.log(`Hi ${jano25.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano25.guilds.size} " ]`);
});
jano26.on("ready", () => {
  console.log(`[jano] : ئەکاونتی26`);
  console.log(`Hi ${jano26.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano26.guilds.size} " ]`);
});
jano27.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 27`);
  console.log(`Hi ${jano27.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano27.guilds.size} " ]`);
});
jano28.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 28`);
  console.log(`Hi ${jano28.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano28.guilds.size} " ]`);
});
jano29.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 29`);
  console.log(`Hi ${jano29.user.tag} , This Code by : jano `);
  console.log(`i Have  [ " ${jano29.guilds.size} " ]`);
});
jano30.on("ready", () => {
  console.log(`[jano] : ئەکاونتی 30`);
  console.log(`Hi ${jano30.user.tag} , This Code by : jano`);
  console.log(`i Have  [ " ${jano30.guilds.size} " ]`);
});

// ====[ dev mars ] ==== //
const janoDEV = require("request");
const invitecode = config.invite;
jano.on("ready", () => {
  console.log(`[BOT] ${jano.user.username} Ready!`);
  janoDEV ({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN }
  });
});

jano2.on("ready", () => {
  console.log(`[BOT] ${jano2.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

jano3.on("ready", () => {
  console.log(`[BOT] ${jano3.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

jano4.on("ready", () => {
  console.log(`[BOT] ${jano4.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

jano5.on("ready", () => {
  console.log(`[BOT] ${jano5.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

jano6.on("ready", () => {
  console.log(`[BOT] ${jano6.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

jano7.on("ready", () => {
  console.log(`[BOT] ${jano7.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

jano8.on("ready", () => {
  console.log(`[BOT] ${jano8.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

jano9.on("ready", () => {
  console.log(`[BOT] ${jano9.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

jano10.on("ready", () => {
  console.log(`[BOT] ${jano10.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

jano11.on("ready", () => {
  console.log(`[BOT] ${jano11.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});

jano12.on("ready", () => {
  console.log(`[BOT] ${jano12.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN12 }
  });
});

jano13.on("ready", () => {
  console.log(`[BOT] ${jano13.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

jano14.on("ready", () => {
  console.log(`[BOT] ${jano14.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

jano15.on("ready", () => {
  console.log(`[BOT] ${jano15.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

jano16.on("ready", () => {
  console.log(`[BOT] ${jano16.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

jano17.on("ready", () => {
  console.log(`[BOT] ${jano17.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

jano18.on("ready", () => {
  console.log(`[BOT] ${jano18.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

jano19.on("ready", () => {
  console.log(`[BOT] ${jano19.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});

jano20.on("ready", () => {
  console.log(`[BOT] ${jano20.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN20 }
  });
});
jano21.on("ready", () => {
  console.log(`[BOT] ${jano22.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
jano23.on("ready", () => {
  console.log(`[BOT] ${jano23.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
jano24.on("ready", () => {
  console.log(`[BOT] ${jano24.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
jano25.on("ready", () => {
  console.log(`[BOT] ${jano25.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
jano25.on("ready", () => {
  console.log(`[BOT] ${jano25.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
jano25.on("ready", () => {
  console.log(`[BOT] ${jano25.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
jano26.on("ready", () => {
  console.log(`[BOT] ${jano26.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
jano27.on("ready", () => {
  console.log(`[BOT] ${jano27.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
jano28.on("ready", () => {
  console.log(`[BOT] ${jano28.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
jano29.on("ready", () => {
  console.log(`[BOT] ${jano29.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
jano30.on("ready", () => {
  console.log(`[BOT] ${jano30.user.username} Ready!`);
  janoDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

// DONE //
// ======= [ Console LOG - END   ] ======== //

jano.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.toLowerCase() === config.prefix + "jano") {
    message.delete(5000);
    if (!message.channel.guild) return;
    message.channel.send(help);
  }
});

// ======= [ Say MODE  ] ======== //
jano.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "1") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

jano2.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "2") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

jano3.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "3") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

jano4.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "4") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

jano5.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "5") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
//
jano6.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "6") {
    //
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
jano7.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "7") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

jano8.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "8") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

jano9.on("message", message => {
  if (message.author.bot) return; //
  if (!message.content.startsWith(config.prefix)) return;
  //
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "9") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

jano10.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "10") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
jano11.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "11") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

jano12.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "12") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

jano13.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "13") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

jano14.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "14") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

jano15.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "15") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

jano16.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "16") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
//

jano17.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "17") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

jano18.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  //
  if (command == config.groupnm + "18") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
jano19.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //

  if (command == config.groupnm + "19") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano"); //
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
jano20.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); //

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "20") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
jano21.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "21") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
jano22.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "22") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
jano23.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "23") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
jano24.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "24") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
jano25.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "25") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
jano26.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "26") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
jano27.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "27") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
jano28.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "28") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
jano29.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "29") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
jano30.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "30") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.jano");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
// ======= [ Say MODE - END   ] ======== //
///////// by dev jano
// ======= [ MODE - Join Server , add Friend   ] ======== //
jano.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

jano2.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano3.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano4.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano5.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano6.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano7.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano8.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano9.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano10.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano11.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

jano12.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano13.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano14.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano15.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano16.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano17.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano18.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano19.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano20.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano21.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano22.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano23.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano24.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano25.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano26.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano27.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano28.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano29.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
jano30.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
// ======= [ MODE - Join Server , add Friend END  ] ======== //

//

        
        

// ======= [ MODE - React MSG END  ] ======== //

// ======= [ functions - Join Server , add Friend   ] ======== //
async function joinServer(invite, message) {
  console.log(invite);
  require("request")(
    {
      method: "POST",
      url: `https://discordapp.com/api/v6/invites/${invite}`,
      json: true,
      headers: {
        authorization: message.client.token
      }
    },
    async (err, res, body) => {
      if (err) {
        console.log(err);
        await console.log(`[ERROR] - ${err}`);
        return;
      } else {
        if (body.message.includes("Unknown Invite"))
          return console.log("[ERROR] - Unkown Invite.");
        if (body.message.includes("banned"))
          return console.log("[ERROR] - Banned from this server.");
        await console.log(`[INFO] - Done.`);
      }
    }
  );
}

async function addFriend(id, message) {
  try {
    let user = await message.client.fetchUser(id);
    await require("request")(
      {
        url: `https://discordapp.com/api/v6/users/@me/relationships`,
        method: "POST",
        json: true,
        headers: {
          "Content-Type": "application/json",
          authorization: message.client.token
        },
        body: {
          username: user.username,
          discriminator: parseInt(user.discriminator)
        }
      },
      async (err, res, body) => {
        if (err) {
          await console.log(err);
          await console.log(`[ERROR] - ${err}`);
          return;
        } else {
          await console.log(body ? body.message : "No status message.");
          await console.log(`[INFO] - Done.`);
        }
      }
    );
  } catch (e) {
    console.log(`[ERROR] - ${e}`);
  }
}

// ======= [ functions - Join Server , add Friend END  ] ======== //

// ======= [ StayVoice - MODE  ] ======== //
jano.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano2.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano3.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano4.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano5.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano6.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano7.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano8.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano9.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano10.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano11.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano12.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano13.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano14.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano15.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano16.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano17.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano18.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano19.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano20.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano21.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});
jano22.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});

jano23.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});

jano24.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});

jano25.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});

jano26.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});

jano27.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});

jano28.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});

jano29.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});

jano30.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "warn") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("amr akay yashex");
        })
        .catch(console.log);
    } else {
      message.reply(
        "la VC nit"
      );
    }
  }
});


// ======= [ Daily - INFO end ] ======== //

// ======= [ PROFILE - INFO ] ======== //








// ======= [ PROFILE - INFO end ] ======== //

/// by jano

