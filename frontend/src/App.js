import React, { useState, useEffect } from "react";
import Carregando from "./components/Carregando";
import Lancamento from "./components/Lancamento";
import Lista from "./components/Lista";
import Periodos from "./components/Periodos";
import Resumo from "./components/Resumo";
import Titulo from "./components/Titulo";
import Toolbar from "./components/Toolbar";
import {
  getPeriodos,
  getLancamentos,
  deleteLancamento,
  postLancamento,
  putLancamento,
} from "./service/lancamentos";
import "./App.css";
function App() {
  const [periodos, setPeriodos] = useState([]);
  const [periodo, setPeriodo] = useState("");
  const [lancamentos, setLancamentos] = useState([]);
  const [lancamentosFiltrados, setLancamentosFiltrados] = useState([]);
  const [lancamentoSelecionado, setLancamentoSelecionado] = useState({});
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPeriodos().then((data) => {
      setPeriodos(
        data.map((d) => ({
          value: d,
          text: textoPeriodo(d),
        }))
      );
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setPeriodo(
      `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(
        2,
        "0"
      )}`
    );
  }, []);

  useEffect(() => {
    if (!periodo) return;
    setLoading(true);
    getLancamentos(periodo).then((data) => {
      setLoading(false);
      setLancamentos(data);
    });
  }, [periodo]);

  useEffect(() => {
    setLancamentosFiltrados(
      lancamentos.filter(
        (lancamento) => !search || lancamento.description.includes(search)
      )
    );
  }, [lancamentos, search]);

  useEffect(() => {
    if (!modal) setLancamentoSelecionado({});
  }, [modal]);

  const textoPeriodo = (anoMes) =>
    `${new Date(anoMes.slice(0, 4), Number(anoMes.slice(5, 7)) - 1, 1)
      .toLocaleDateString(undefined, { month: "short" })
      .replace(/\./g, "")}/${new Date(
      anoMes.slice(0, 4),
      Number(anoMes.slice(5, 7)) - 1,
      1
    ).getFullYear()}`;

  const handleDeleteLancamento = (lancamento) => {
    setLoading(true);

    deleteLancamento(lancamento).then(() => {
      setLancamentos(lancamentos.filter((l) => l._id !== lancamento._id));
      setLoading(false);
    });
  };

  const handleEdit = (lancamento) => {
    setLancamentoSelecionado(lancamento);
    setModal(true);
  };

  const handleSaveLancamento = (lancamento) => {
    setLoading(true);
    if (!lancamento._id)
      return postLancamento(lancamento).then((data) => {
        setLoading(false);
        if (
          data.year === lancamentos[0].year &&
          data.month === lancamentos[0].month
        )
          setLancamentos([...lancamentos, data].sort((a, b) => a.day - b.day));
      });

    const { _id } = lancamento;
    delete lancamento._id;
    putLancamento(_id, lancamento).then((data) => {
      if (data) {
        setLancamentos(
          [
            ...lancamentos.filter((lancamento) => lancamento._id !== _id),
            { _id, ...lancamento },
          ].sort((a, b) => a.day - b.day)
        );
        setLoading(false);
      }
    });
  };
  return (
    <>
      {loading && <Carregando />}
      <Titulo />
      <Periodos periodos={periodos} setPeriodo={setPeriodo} periodo={periodo} />
      <Resumo lancamentos={lancamentosFiltrados} />
      <Toolbar
        search={search}
        setSearch={setSearch}
        toogleModal={() => setModal(!modal)}
      />
      <Lista
        lancamentos={lancamentosFiltrados}
        handleDeleteLancamento={handleDeleteLancamento}
        handleEdit={handleEdit}
      />
      <Lancamento
        open={modal}
        save={handleSaveLancamento}
        close={() => setModal(false)}
        lancamento={lancamentoSelecionado}
        periodo={periodo}
      />
    </>
  );
}

export default App;
