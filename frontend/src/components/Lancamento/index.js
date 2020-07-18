import React, { useState, useEffect } from "react";
import {
  Modal,
  Card,
  CardTitle,
  CardContent,
  CardActions,
  Button,
  Input,
  Radio,
  InputContainer,
  Row,
  Col,
} from "./styled";
import { X, Check } from "@styled-icons/feather";

const Lancamento = (props) => {
  const { lancamento = {}, save, close, open, periodo } = props;
  const [novoLancamento, setNovoLancamento] = useState({
    description: "",
    category: "",
    value: "",
    type: "",
    date: "",
  });
  const [podeSalvar, setPodeSalvar] = useState(false);

  useEffect(() => {
    setNovoLancamento({
      description: "",
      category: "",
      value: "",
      type: "",
      date: new Date(periodo.slice(0,4), Number(periodo.slice(5, 7))-1,1).toISOString().slice(0,10),  
    })
    if (!lancamento._id) return;
    setNovoLancamento({
      ...lancamento,
      date: new Date(lancamento.year, lancamento.month - 1, lancamento.day)
        .toISOString()
        .slice(0, 10),
    });
  }, [lancamento, periodo]);

  useEffect(() => {
    setPodeSalvar(Object.values(novoLancamento).every((value) => value));
  }, [novoLancamento]);

  const mode = !lancamento ? "" : lancamento._id ? "edit" : "create";
  const titulo = (mode === "edit" ? "Alteração" : "Criação") + " de Lançamento";
  const tipos = [
    { text: "Despesa", value: "-" },
    {
      text: "Receita",
      value: "+",
    },
  ];

  const handleChange = (event) => {
    setNovoLancamento({
      ...novoLancamento,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = () => {
    if (!podeSalvar) return;
    const lancamento = {
      ...novoLancamento,
      year: Number(novoLancamento.date.slice(0, 4)),
      month: Number(novoLancamento.date.slice(5, 7)),
      day: Number(novoLancamento.date.slice(9, 11)),
      value: Number(novoLancamento.value),
    };
    delete lancamento.date;
    save(lancamento);
    close();
  };
  if (!open) return null;

  return (
    <Modal>
      <Card>
        <CardTitle>
          <span>{titulo}</span>
          <button onClick={close}>
            <X size={24} />
          </button>
        </CardTitle>
        <CardContent>
          <div>
            {tipos.map((t) => (
              <Radio key={t.value}>
                <input
                  type="radio"
                  name="type"
                  disabled={mode === "edit"}
                  value={t.value}
                  checked={novoLancamento.type === t.value}
                  onChange={handleChange}
                ></input>
                {t.text}
              </Radio>
            ))}
          </div>
          <InputContainer>
            <label>Descrição</label>
            <Input
              type="text"
              name="description"
              value={novoLancamento.description}
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            <label>Categoria</label>

            <Input
              name="category"
              type="text"
              value={novoLancamento.category}
              onChange={handleChange}
            />
          </InputContainer>
          <Row>
            <Col grow={1}>
              <InputContainer>
                <label>Valor</label>
                <Input
                  type="number"
                  name="value"
                  caption="Valor"
                  value={novoLancamento.value}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                />
              </InputContainer>
            </Col>
            <Col grow={1}>
              <InputContainer>
                <label>Data</label>
                <Input
                  type="date"
                  name="date"
                  value={novoLancamento.date}
                  onChange={handleChange}
                />
              </InputContainer>
            </Col>
          </Row>
        </CardContent>
        <CardActions>
          <Button onClick={handleSave} disabled={!podeSalvar}>
            <Check size={20} />
            &nbsp;Salvar
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default Lancamento;
