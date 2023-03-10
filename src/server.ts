import { app } from "./app";
import dotenv from 'dotenv';

const port = process.env.PORT || 3000;



app.get('/', (req, res) => res.send('Hello World 100!'))

app.listen(port, () => console.log("Visao runing in PORT " + port));