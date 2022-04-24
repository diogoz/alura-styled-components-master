import React from "react";
import { Box, Botao } from "../UI";
import { extratoLista } from "../../info";
import Items from "../Items";

export const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items key={id} from={from} type={type} value={value} date={date} />
        );
      })}
      <Botao>Ver mais</Botao>
    </Box>
  );
};
