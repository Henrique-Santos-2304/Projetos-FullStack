import "reflect-metadata";
var cors = require("cors");
const express = require("express");
import createConnection from "./database";
import { routes } from "./routes";
const app = express();

createConnection();

app.use(cors());
app.use(express.json());
app.use(routes);

export { app };
