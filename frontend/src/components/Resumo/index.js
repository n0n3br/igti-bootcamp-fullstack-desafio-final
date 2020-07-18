import React from "react";
import { Ul, Li, Valor } from "./styled";
const Resumo = (props) => {
  const { lancamentos } = props;

  const quantidadeLancamentos = lancamentos.length;
  const receitas = lancamentos
    .filter((lancamento) => lancamento.type === "+")
    .reduce((memo, lancamento) => memo + lancamento.value, 0);
  const despesas = lancamentos
    .filter((lancamento) => lancamento.type === "-")
    .reduce((memo, lancamento) => memo + lancamento.value, 0);
  const saldo = receitas - despesas;

  const formatNumber = (number, decimals = 2) => {
    if (!number) return "";
    return number.toLocaleString("pt-br", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <Ul>
      <Li>
        Lançamentos <Valor>{formatNumber(quantidadeLancamentos, 0)}</Valor>
      </Li>
      <Li>
        Receitas <Valor value="+">R$ {formatNumber(receitas, 2)}</Valor>
      </Li>
      <Li>
        Despesas <Valor value="-"> R$ {formatNumber(despesas)}</Valor>
      </Li>
      <Li>
        Saldo
        <Valor value={saldo >= 0 ? "+" : "-"}>R$ {formatNumber(saldo)}</Valor>
      </Li>
    </Ul>
  );
};

export default Resumo;
