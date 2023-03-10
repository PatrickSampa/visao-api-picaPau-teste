import { app } from "./app";
import dotenv from 'dotenv';
const PORT = process.env.API_PORT;



app.get('/', (req, res) => res.send('Hello World 100!'))

app.listen(PORT, () => console.log("Visao runing in PORT " + PORT));