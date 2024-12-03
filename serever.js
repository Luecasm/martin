const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// Serve static files from the "public" folder
app.use(express.static("public"));

// Socket.io logic
io.on("connection", (socket) => {
    console.log("A user connected");
});

// Listen on the port Render assigns
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
