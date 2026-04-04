export type CardResultSearchProps = AdressData & {
  fullAdress: string;
  onClick: () => void;
  hasCopied: boolean;
  urlGoogleMaps: string;
};

export type AdressData = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};
