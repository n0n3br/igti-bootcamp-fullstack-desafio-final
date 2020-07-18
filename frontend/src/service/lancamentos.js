import * as http from "../provider/http";

export const getPeriodos = () => http.get("lancamentos/periodos");

export const getLancamentos = (periodo) =>
  http.get(`lancamentos?periodo=${periodo}`);

export const deleteLancamento = (lancamento) =>
  http.del(`lancamentos/${lancamento._id}`);

export const postLancamento = (lancamento) =>
  http.post("lancamentos", lancamento);

export const putLancamento = (id, lancamento) =>
  http.put(`lancamentos/${id}`, lancamento);
