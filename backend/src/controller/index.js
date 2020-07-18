import LancamentosModel from "../model/lancamentos.js";

export const getPeriodos = async (req, res) => {
  try {
    const periodos = await LancamentosModel.distinct("yearMonth");
    res.status(200).send(periodos.sort());
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getLancamentos = async (req, res) => {
  const { periodo } = req.query;
  if (!periodo)
    return res.status(400).send({
      message: "não foi informado o parâmetro perîodo no formato AAAA-MM ",
    });
  try {
    const lancamentos = await LancamentosModel.find({
      yearMonth: periodo,
    })
      .map((l) => {
        delete l.__v;
        return l;
      })
      .sort({ day: 1, _id: -1 });
    res.status(200).send(lancamentos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const postLancamento = async (req, res) => {
  try {
    console.log(req.body);
    const date = new Date(req.body.year, req.body.month - 1, req.body.day);
    const yearMonth = date.toISOString().slice(0, 7);
    const yearMonthDay = date.toISOString().slice(0, 10);
    const novoLancamento = {
      ...req.body,
      yearMonth,
      yearMonthDay,
    };
    const lancamento = await LancamentosModel.create(novoLancamento);
    res.status(201).send(lancamento);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const putLancamento = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ message: "id não informado" });
    const novoLancamento = { ...req.body };
    if (novoLancamento.type) delete novoLancamento.type;
    await LancamentosModel.updateOne({ _id: id }, novoLancamento);
    res.status(204).end();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const deleteLancamento = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ message: "id não informado" });
    await LancamentosModel.deleteOne({ _id: id });
    res.status(204).end();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
