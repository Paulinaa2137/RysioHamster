process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

// const {Client, GatewayIntentBits, Partials} = require('discord.js');

// const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
// const {User, Message, GuildMember, ThreadMember} = Partials;

// const client = new Client({
//     intents: [Guilds, GuildMembers, GuildMessages],
//     partials: [User, Message, GuildMember, ThreadMember]
// });

// client.once('ready',()=>{
//     console.log('Bot jest online')
// })
// client.config = require('./config.json')
// client.login(client.config.token)




const {Client, GatewayIntentBits, Partials} = require('discord.js');

const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;

const {User, Message, GuildMember, ThreadMember} = Partials;

const client = new Client({
intents: [Guilds, GuildMembers, GuildMessages],
partials: [User, Message, GuildMember, ThreadMember],

 http: {
 api: 'https://discord.com/api',
 version: 9,
rest: { version: 9 },
 requestTimeout: 15000,
 rejectUnauthorized: false // Add this line to bypass certificate validation
 }
});


client.once('ready',()=>{
 console.log('Bot jest online');
});


client.config = require('./config.json');
client.login(client.config.token);