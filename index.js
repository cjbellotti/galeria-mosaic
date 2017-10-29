const Express = require('express');

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(Express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log(`Sever listening on port ${PORT}...`);
});
