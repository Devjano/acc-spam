const Discord = require("discord.js");
const myid = ['681553671364018196'] // id xot da bne 
const jano = new Discord.Client();
const jano2 = new Discord.Client();
const jano3 = new Discord.Client();
const jano4 = new Discord.Client();
const jano5 = new Discord.Client();
const jano6 = new Discord.Client();


///////// id vc dane hata bcheta vc 


jano.on("ready", () => {
  var join = jano.channels.get(""); /// id voice
  if (join) join.join();
});
///////////////////
jano2.on("ready", () => {
  var join = jano2.channels.get(""); /// id voice
  if (join) join.join();
});
///////////////////
jano3.on("ready", () => {
  var join = jano3.channels.get(""); /// id voice
  if (join) join.join();
});
///////////////////
jano4.on("ready", () => {
  var join = jano4.channels.get(""); /// id voice
  if (join) join.join();
});
///////////////////
jano5.on("ready", () => {
  var join = jano5.channels.get(""); /// id voice
  if (join) join.join();
});
///////////////////
jano6.on("ready", () => {
  var join = jano6.channels.get(""); /// id voice
  if (join) join.join();
});


//////// playing or dnd  streaming ////////

jano.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`JUST ALLAH`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano2.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`JUST ALLAH`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano2.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano3.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`JUST ALLAH`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano3.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////
//////// playing or dnd  streaming ////////

jano4.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`JUST ALLAH`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano5.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`JUST ALLAH`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano2.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano6.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`JUST ALLAH`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano3.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////




////// spam krdn ba acc

jano.on('message', message => {
if (message.content === 'owo') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`owo daily`)
          .then(m => {
            count++;
          })
          
        }
      }
});
////

jano2.on('message', message => {
if (message.content === 'owo') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`owo daily`)
          .then(m => {
            count++;
          })
          
        }
      }
});
///////
jano3.on('message', message => {
if (message.content === 'owo') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`owo daily`)
          .then(m => {
            count++;
          })
          
        }
      }
});

////////

jano4.on('message', message => {
if (message.content === 'owo') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`owo daily`)
          .then(m => {
            count++;
          })
          
        }
      }
});


//////

jano5.on('message', message => {
if (message.content === 'owo') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`owo daily`)
          .then(m => {
            count++;
          })
          
        }
      }
});


///////
jano6.on('message', message => {
if (message.content === 'owo') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`owo daily`)
          .then(m => {
            count++;
          })
          
        }
      }
});


jano.login("");
jano2.login("");
jano3.login("");
jano4.login("");
jano5.login("");
jano6.login("");
