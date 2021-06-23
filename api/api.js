const app = require("express")();

app.listen(2525);
//negocio pra pingar com uptime robots
app.get("/", (req, res) => {
  res.send("ola");
  console.log(`Ping UptimeRobots recebido as ${Date.getHours}`);
});
