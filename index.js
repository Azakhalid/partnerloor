const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'setup') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**Please you go to the voice🐱**'); 

} 

} 

});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "Slaw reklam ") {
    msg.reply("**tkaiia rawasta takU wlammt dadretaua kissing_cat: ");
  }
}); 


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "سلاو رێکلام ") {
    msg.reply("**تکایە راوەستە تاکوو وڵام دەدرێیتەوە kissing_cat: ");
  }
}); 



client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`  https://discord.gg/gw7yj32tf3`) ///Link Server Never ///RaWeN
    
  client.channels.get("989934198724911124").send(
`> By: <@${message.author.id}> 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Send Me Linke Your Server`) 
});




client.login("OTkyNDczMzkxODA4Mzg5MTYw.Gwg5T5.-ZYYHJ4xYhmOkN9jzPU1KaDTob0cyUkMFzoL6U");///FiiX ///Token
