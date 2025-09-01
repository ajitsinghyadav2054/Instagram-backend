import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;


//MiddleWares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));  //To access form data
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOptions));


app.get("/", (__, res) => {
    return res.status(200).json({
        message: "I'm coming from backend!",
        success: true
    });
});


app.listen(PORT, () => {
    connectDB();
    console.log(`Server listening at Port: ${PORT}`);
})