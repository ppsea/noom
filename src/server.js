import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

// route
app.get("/", (req, res) => res.render("home"));

const handleListen = (port) => console.log(`server listen on ${port}`);

const PORT = 3000;
app.listen(PORT, handleListen(PORT));
