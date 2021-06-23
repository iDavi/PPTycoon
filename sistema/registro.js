const wixData = require("uo-wix-data");
wixData.setup("odavi20527", "my-site", process.env.WIXTOKEN);

function registrarUsuario(msg) {
  return new Promise((resolve) => {
    wixData
      .query("usuarios")
      .eq("title", msg.author.id)
      .find()
      .then((result) => {
        if (result.items[0] === undefined) {
          const toInsert = {
            title: msg.author.id,
            dinheiros: 0,
            energias: 0,
            cooldowns: {}
          };
          resolve(`${msg.author.id} registrado !`);
          wixData.insert("usuarios", toInsert).then(() => {});
        }
        resolve(msg.content);
      });
  });
}

module.exports = {
  registrarUsuario: registrarUsuario
};
