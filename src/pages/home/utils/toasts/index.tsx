import { toastError, toastWarn } from "../../../../shared/utils/toast";

export function cepToastError() {
  toastError(
    <>
      CEP inválido!
      <br />
      Certifique-se de que está correto e tente novamente.
    </>,
  );
}

export function cepToastWarn() {
  toastWarn(
    <>
      O campo está vazio!
      <br />
      Digite um CEP para buscar informações.
    </>,
  );
}
