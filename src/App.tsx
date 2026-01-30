import axios from "axios";
import { useState } from "react";

type Adress = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

function App() {
  const [adressData, setAdressdata] = useState<Adress | null>(null); //Guarda o valor do retorno do endereço
  const [errorSearch, setErrorSearch] = useState<string | null>(null); //Guarda o valor que retorna um erro

  const [zipCodeInput, setZipCodeInput] = useState("");

  async function zipCodeSearch() {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${zipCodeInput}/json/`,
      );
      setAdressdata(response.data);
    } catch {
      setErrorSearch("CEP inválido");
      console.log(errorSearch);
    }
  }
  console.log(adressData);
  console.log(zipCodeInput);

  return (
    <div style={{ padding: "2rem", display: "flex", gap: "0.5rem" }}>
      <input
        type="number"
        value={zipCodeInput}
        onChange={(event) => {
          setZipCodeInput(event?.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          zipCodeSearch();
        }}
      >
        Buscar
      </button>
    </div>
  );
}

export default App;
