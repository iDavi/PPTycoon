const wixData = require("uo-wix-data");
wixData.setup("odavi20527", "my-site", process.env.WIXTOKEN);
const date = new Date();
function run(msg) {
  return new Promise((resolve) => {
    wixData
      .query("usuarios")
      .eq("title", msg.author.id)
      .find()
      .then((results) => {
        let cooldown = results.items[0]["cooldowns"]["energia"];
        let podePegar = false;
        if (cooldown === undefined || cooldown !== date.getHours()) {
          podePegar = true;
          results.items[0]["cooldowns"]["energia"] = date.getHours();
        }
        if (podePegar) {
          results.items[0]["energias"] += 3;
          resolve(
            "Você coletou 3 energias! Use `pp roll` para rolar personagens com essas energias."
          );
        } else {
          resolve(
            `Você só pode coletar uma energia por hora! Volte daqui a **${
              60 - date.getMinutes()
            } minutos** para coletar mais`
          );
        }
        wixData.update("usuarios", results.items[0]);
      });
  });
}

module.exports = {
  run: run
};
