import express from "express";
import * as LancamentosController from "../controller/index.js";
const router = express.Router();

router.get("/", LancamentosController.getLancamentos);
router.get("/periodos", LancamentosController.getPeriodos);
router.post("/", LancamentosController.postLancamento);
router.put("/:id", LancamentosController.putLancamento);
router.delete("/:id", LancamentosController.deleteLancamento);
export default router;
