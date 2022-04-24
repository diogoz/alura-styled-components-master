import {
  fundoClaro,
  fundoEscuro,
  textoFundoClaro,
  textoFundoEscuro,
  conteudoClaro,
  conteudoEscuro,
} from "./variaves";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: "",
};

export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%)",
};
