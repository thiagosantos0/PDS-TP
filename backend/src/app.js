const app = require('./config');

const port = app.get("port");

app.listen(port, () => {
  console.info(`Webserver is up on port 3000`);
});