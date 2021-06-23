const app = require("express")();

//negocio pra pingar com uptime robots
app.get("/", (req, res) => {
  res.send(Date.now());
  console.log(`Ping UptimeRobots recebido as ${Date.now}`);
});
