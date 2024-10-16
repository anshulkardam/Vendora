import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(
    cors({
        origin: "http://localhost:5173/",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(cookieParser())
app.use(express.json())
app.get("/", (req, res) => {
    res.json("hello mumboo ilysm");
});

app.listen(3000,()=>{
    console.log("server started!")
});
