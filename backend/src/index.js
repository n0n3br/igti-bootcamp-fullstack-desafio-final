import express from "express";
import cors from "cors";
import { connect } from "./database/index.js";
import router from "./router/index.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/lancamentos", router);
connect();

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
