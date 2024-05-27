require("dotenv").config();
//Libs
import express, { Express } from 'express';
//Packages
import router from './src/Router';

const app: Express = express();
const port: Number = 8080;

app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Connected on port -> ${port}`));