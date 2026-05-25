const express=require("express");
const cors=require("cors");
const app=express();

require("dotenv").config();
const db_connect=require("./db_connect");

db_connect();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/user", require("./routes/user"))
app.use("/product", require("./routes/product"))
app.listen(process.env.PORT, (err)=>err?console.log(err):console.log("server is running"));