import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import LancamentosModel from "./model/lancamentos.js";
import { exit } from "process";

const log = (mensagem) =>
  console.log(`[${new Date().toISOString().slice(0, 19)}] ${mensagem}`);

dotenv.config();

const reset = async () => {
  try {
    log("Tentando conexão com o banco de dados ... ");
    await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    log("Removendos dados existentes ...");
    await LancamentosModel.deleteMany();
    log("Lendo arquivo de entrada ...");
    const arquivo = await fs.promises.readFile(
      path.join("src", "assets", "data", "lancamentos.json")
    );
    const json = JSON.parse(arquivo);
    log("Inserindos lançamentos ...");
    await LancamentosModel.insertMany(json);
    log("Importação finalizada");
    return true;
  } catch (error) {
    log(error.message);
    return false;
  }
};

reset();
