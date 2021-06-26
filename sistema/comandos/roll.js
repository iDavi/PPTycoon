const wixData = require("uo-wix-data");
const hoje = new Date().getDate();
const horas = new Date().getHours();
wixData.setup("odavi20527", "my-site", process.env.WIXTOKEN);

function run(msg) {
  return new Promise((resolve) => {
    const podePegar = false;
    wixData
      .query("personagens")
      .isEmpty("dono")
      .find()
      .then((results) => {
        const sorteado =
          results.items[Math.floor(Math.random() * results.items.length)];
        wixData
          .query("usuarios")
          .eq("title", msg.author.id)
          .find()
          .then((usuario) => {
            if (usuario.items[0] === undefined) {
              resolve("tenta dnv desculpa lmfao");
              return;
            } else if (usuario.items[0]["energias"] < 1) {
              resolve(
                "Você precisa de energias para usar seu roll. Colete energias com pp energia."
              );
              return;
            } else if (
              usuario.items[0]["cooldowns"]["claim"] === undefined ||
              usuario.items[0]["cooldowns"]["claim"] != horas
            ) {
              podePegar = true;
            }
            if (podePegar) {
              usuario.items[0]["energias"] -= 1;
            } else {
              resolve("Você já coletou um personagem hoje, volte daqui a 1 hora.");
            }
          });
      });
  });
}

function getFullImageURL(imageSRC) {
  let strReturnImage = "";
  if (imageSRC.startsWith("image:")) {
    let wixImageURL = "";
    wixImageURL = "https://static.wixstatic.com/media/";
    let wixLocalURL = "";
    wixLocalURL = imageSRC.replace("image://v1/", "");
    wixLocalURL = wixLocalURL.substr(0, wixLocalURL.indexOf("/"));
    strReturnImage = wixImageURL + wixLocalURL;
  } else {
    strReturnImage = imageSRC;
  }
  return strReturnImage;
}

module.exports = {
  run: run
};
