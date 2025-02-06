import express, { json } from "express"
import cors from "cors"
import userRoutes from "./routes/usersRoutes.js"

const app = express();

app.use(express,json());
app.use(cors());

app.use("/getUsers", userRoutes)

app.listen(8080);