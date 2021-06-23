const api = require("./api/api.js");
const registro = require("./sistema/registro.js");
const Discord = require("discord.js");
const handler = require("./sistema/handler.js");
const client = new Discord.Client();
const manuntencao = true;

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Bot ligado!");
});

client.on("message", async (msg) => {
  await registro.registrarUsuario(msg);
  if (!msg.startsWith("pp ")) return;
  if (manuntencao && msg.author.id !== "852693531080261702") return;
  await handler.mensagem(msg);
});
