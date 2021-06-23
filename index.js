const api = require("./api/api.js");
const registro = require("./sistema/registro.js");
const Discord = require("discord.js");
const handler = require("./sistema/handler.js");
require("rider-discord-line-reply");
const client = new Discord.Client();
const manuntencao = true;

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Bot ligado!");
});

client.on("message", async (msg) => {
  if (manuntencao && msg.author.id !== "852693531080261702") return;
  if (!msg.content.startsWith("pp")) return;
  msg.newReply(await handler.mensagem(msg));
  console.log(await registro.registrarUsuario(msg));
});
