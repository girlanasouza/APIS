import express, {Response, Request} from "express";
import dotenv from "dotenv";

import validateEnv from "./utils/validateEnv";

dotenv.config();

validateEnv();

const app = express();
const PORT = process.env.PORT || 4444;

app.get("/", (req:Request, res:Response)=>{
    res.json({msg:"oiiii"});
});

app.listen(PORT, ()=>{
    console.log(`Express app iniciada na porta ${PORT}.`);
})