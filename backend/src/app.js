const app = require('./config');

const db = require('./db');

const port = app.get("port");

app.listen(port, () => {
  db.buildDB();
  console.info(`Webserver is up on port 3000`);
});