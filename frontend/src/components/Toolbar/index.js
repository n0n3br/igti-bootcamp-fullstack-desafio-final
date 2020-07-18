import React from "react";
import { Button, Input, Container, Shrink, Grow } from "./styled";
import { Plus } from "@styled-icons/feather";
const Toolbar = (props) => {
  const { search, setSearch, toogleModal } = props;

  const handleChange = (event) => setSearch(event.target.value);
  return (
    <Container>
      <Shrink>
        <Button onClick={toogleModal}>
          <Plus size={24} /> &nbsp; Novo Lançamento
        </Button>
      </Shrink>
      <Grow>
        <Input
          placeholder="Pesquisar"
          value={search}
          onChange={handleChange}
        ></Input>
      </Grow>
    </Container>
  );
};

export default Toolbar;
