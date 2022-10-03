import { errors } from "celebrate";
import express from "express";
import cors from "cors";
import "dotenv/config";
//import routes from './routes';
import "reflect-metadata";
import "express-async-errors";
import routes from "./routes";
import errorHandler from "./middlewares/errorHandler";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port: ${port}!`);
});
