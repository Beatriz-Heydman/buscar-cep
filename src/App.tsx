// Libs
import { useState } from "react";

// Requests
import { zipCodeSearch } from "./requests/get/get-zip";

// Types
import type { Adress } from "./requests/get/get-zip/types";

function App() {
  const [adressData, setAdressdata] = useState<Adress>(); //Guarda o valor do retorno do endereço
  // const [errorSearch, setErrorSearch] = useState(""); //Guarda o valor que retorna um erro

  const [zipCodeInput, setZipCodeInput] = useState("");

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
        onClick={async () => {
          const response = await zipCodeSearch(zipCodeInput);

          if (response) {
            setAdressdata(response);
          }
        }}
      >
        Buscar
      </button>
    </div>
  );
}

export default App;
