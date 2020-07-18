import React from "react";
import { Select, Label, Button, Container } from "./styled";
import { ChevronRight, ChevronLeft } from "@styled-icons/feather";

const Periodos = (props) => {
  const { periodo, setPeriodo, periodos } = props;

  const handleChange = (event) => setPeriodo(event.target.value);
  const index = periodos.map((periodo) => periodo.value).indexOf(periodo);

  const handleShift = (value) => {
    if (index === 0 && value === -1) return;
    if (index === periodos.length - 1 && value === 1) return;
    setPeriodo(periodos[index + value].value);
  };

  return (
    <Container>
      <Button onClick={() => handleShift(-1)} disabled={index === 0}>
        <ChevronLeft size={24} />
      </Button>
      <Label>Período</Label>
      <Select value={periodo} onChange={handleChange}>
        {periodos.map((periodo) => (
          <option value={periodo.value} key={periodo.value}>
            {periodo.text}
          </option>
        ))}
      </Select>
      <Button
        onClick={() => handleShift(1)}
        disabled={index === periodos.length - 1}
      >
        <ChevronRight size={24} />
      </Button>
    </Container>
  );
};

export default Periodos;
