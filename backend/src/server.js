import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import dns from "dns";

// dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

// routes Import
import userRouter from "./routes/user.routes.js";


app.use("/api/v1/users", userRouter)

export { app }