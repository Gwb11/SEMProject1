const port = 80,

express = require("express"),
app = express();

app.get('/Version', function(req, res, next) {
    res.send("This    is version 0 of the HotBurger service");
});


app.get('/log', function(req, res, next) {
  res.send(req.url);
});

app.listen(port,() => {
  console.log("server is up and running on port 80");
});

