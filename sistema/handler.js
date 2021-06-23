const fs = require("fs");
const { resolve } = require("path");

function mensagem(msg) {
  return new Promise((resolve) => {
    const comando = msg.content.split(" ")[1];
    lerArquivo("./sistema/handler.json").then((data) => {
      const comandos = JSON.parse(data);
      if (comandos[comando] !== undefined) {
        const resposta = require("./comandos/" + comandos[comando]);
        resposta.run(msg).then((resp) => {
          resolve(resp);
        });
      } else {
        resolve(
          "Comando desconhecido! Digite `pp ajuda` para ver meus comandos."
        );
      }
    });
  });
}

function lerArquivo(path) {
  return new Promise((resolve) => {
    fs.readFile(path, function read(err, data) {
      if (err) {
        throw err;
      }
      resolve(data);
    });
  });
}
module.exports = {
  mensagem: mensagem
};
