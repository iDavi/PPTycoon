const Discord = require("discord.js");
const embedHelp = new Discord.MessageEmbed()
  .setTitle("Ajuda")
  .setDescription(
    "Sou um bot de diversão com comandos muito diversificados, com várias referencias a comunidade de jogos no PowerPoint. [Meu código fonte.](https://github.com/iDavi/PPTycoon)"
  )
  .addField(
    "**Energias**",
    "Energia serve para você sortear personagens/macros/jogos, você pode pegar 3 energias por hora. \n `pp energia // pp e` para coletar energias."
  );

function run(msg) {
  return new Promise((resolve) => {
    resolve(embedHelp);
  });
}

module.exports = {
  run: run
};
