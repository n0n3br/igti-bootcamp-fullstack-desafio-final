import React from "react";
import { Trash2 as Trash, Edit2 as Pencil } from "@styled-icons/feather";
import {
  Container,
  Card,
  Row,
  Col,
  Dia,
  Titulo,
  Subtitulo,
  Valor,
  IconButton,
} from "./styled";

const Lista = (props) => {
  const { lancamentos, handleDeleteLancamento, handleEdit } = props;
  const formatNumber = (number, decimals = 2) => {
    if (!number) return "";
    return number.toLocaleString("pt-br", {
      format: "currency",
      currency: "BRL",
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <Container>
      {lancamentos.map((lancamento) => (
        <Card key={lancamento._id} type={lancamento.type}>
          <Row>
            <Col grow={0}>
              <Dia>{String(lancamento.day).padStart(2, "0")}</Dia>
            </Col>
            <Col grow={1}>
              <Titulo>{lancamento.category}</Titulo>
              <Subtitulo>{lancamento.description}</Subtitulo>
            </Col>
            <Col grow={0}>
              <Valor>R$ {formatNumber(lancamento.value)}</Valor>
            </Col>
            <Col grow={0}>
              <IconButton
                type={lancamento.type}
                onClick={() => handleEdit(lancamento)}
              >
                <Pencil size={20} />
              </IconButton>
              <IconButton
                type={lancamento.type}
                onClick={() => handleDeleteLancamento(lancamento)}
              >
                <Trash size={20} />
              </IconButton>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default Lista;
