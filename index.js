const api = require("./api/api.js");
const registro = require("./sistema/registro.js");
const Discord = require("discord.js");
const client = new Discord.client();

client.login(process.env.TOKEN);
