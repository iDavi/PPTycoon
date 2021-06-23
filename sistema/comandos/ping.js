function run(msg) {
  return new Promise((resolve) => {
    resolve(
      `🏓 Eu demoro **${
        Date.now() - msg.createdTimestamp
      }ms** pra ler sua mensagem.`
    );
  });
}
module.exports = {
  run: run
};
