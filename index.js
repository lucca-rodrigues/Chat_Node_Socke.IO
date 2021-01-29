const express = require("express");
const app = express();

const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection",(socket) => {
    socket.on("disconnect", () => {
        console.log("O usuário " + socket.id + " Foi desconectado!");
    });

    socket.on("msg", (data) => {
        io.emit("showmsg", data)
        console.log(data);
    })    
    
    socket.on("login", (data) => {
        io.emit("showmsg", data)
        console.log(data);
    })

});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

http.listen(3000, () => {
    console.log("App Started on Port 3000 ✅")
})