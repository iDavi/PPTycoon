const app = require("express")();

//negocio pra pingar com uptime robots
app.get("/ping", (req, res) => {
  res.send(Date.now());
  console.log(`Ping UptimeRobots recebido as ${Date.now}`);
});
