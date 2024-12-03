const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());

mongoose
.connect(
    "mongodb+srv://aasthagandhi201:RMUXP91F5aERVgY3@asus.8qi1h.mongodb.net/?retryWrites=true&w=majority&appName=asus",
    {}
)
.then(() => {
    console.log("Connected to database");
});

// Routes
const userRoute = require("./route/user.route");
const todoRoute = require("./route/todo.route");
app.use("/user", userRoute);
app.use("/todo",todoRoute);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
 console.log(`Server is running on port http://localhost:${PORT}`);
});