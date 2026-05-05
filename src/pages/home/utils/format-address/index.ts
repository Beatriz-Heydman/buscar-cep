import type { Adress } from "../../../../requests/get/get-zip/types";

export function formatAddress(address: Adress | undefined) {
  if (!address) return "";
  return `${address.logradouro}, ${address.bairro}, ${address.localidade}/${address.uf} - ${address.cep}`;
}
