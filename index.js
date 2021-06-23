const registro = require("./sistema/registro.js");
const Discord = require("discord.js");
const handler = require("./sistema/handler.js");
require("rider-discord-line-reply");
const client = new Discord.Client();
const manuntencao = true;
require("./api/api.js");

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Bot ligado!");
});

client.on("message", async (msg) => {
  console.log(await registro.registrarUsuario(msg));
  if (!msg.content.startsWith("pp")) return;
  if (manuntencao && msg.author.id !== "852693531080261702") return;
  msg.newReply(await handler.mensagem(msg));
});
