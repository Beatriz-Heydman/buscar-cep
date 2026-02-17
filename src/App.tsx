// Libs
// import { useState } from "react";

// Components
import { Button } from "./components/button";
import { Flex } from "./components/flex";
import { Input } from "./components/input";
import { SearchContainer } from "./components/search-container";
import { Typography } from "./components/typography";

// Requests
// import { zipCodeSearch } from "./requests/get/get-zip";

// Types
// import type { Adress } from "./requests/get/get-zip/types";

function App() {
  // const [adressData, setAdressdata] = useState<Adress>(); //Guarda o valor do retorno do endereço
  // // const [errorSearch, setErrorSearch] = useState(""); //Guarda o valor que retorna um erro

  // const [zipCodeInput, setZipCodeInput] = useState("");

  // console.log(adressData);
  // console.log(zipCodeInput);

  return (
    // <div style={{ padding: "2rem", display: "flex", gap: "0.5rem" }}>
    //   <input
    //     type="text"
    //     maxLength={9}
    //     onChange={(event) => {
    //       const value = event?.currentTarget.value;
    //       event.currentTarget.value = value.replace(/[^0-9&-]/g, "");
    //       setZipCodeInput(value);

    //       if (value.length === 5) {
    //         event.currentTarget.value = value + "-";
    //       }
    //       if (value.slice(5) === "-") {
    //         event.currentTarget.value = value.replace("-", "");
    //       }
    //     }}
    //   />
    //   <button
    //     onClick={async () => {
    //       const response = await zipCodeSearch(zipCodeInput);

    //       if (response) {
    //         setAdressdata(response);
    //       }
    //     }}
    //   >
    //     Buscar
    //   </button>

    // </div>
    <div className="background_image">
      <SearchContainer>
        <img
          className="map-search_image"
          src="./public/assets/images/map-search.png"
          alt=""
        />
        <Typography
          fontSize="42px"
          fontWeight="600"
          color="#5a459e"
          style={{ paddingTop: "2.5rem" }}
        >
          Buscar CEP
        </Typography>

        <Flex gap="0.5rem" style={{ width: "100%", padding: "0 2rem" }}>
          <Input type="text" placeholder="Digite o CEP" />
          <Button>Buscar</Button>
        </Flex>

        <div className="dividing deshed-horizontal"></div>

        <Flex
          gap="1.5rem"
          style={{ width: "100%", height: "fit-content", padding: "0 2rem" }}
        >
          <Flex direction="column" gap="1rem" style={{ width: "100%" }}>
            <Flex
              alignItems="flex-start"
              justifyContent="center"
              gap="0.5rem"
              direction="column"
              style={{ width: "100%" }}
            >
              <Typography fontSize="1.25rem" fontWeight="600" color="#5a459e">
                Endereço:
              </Typography>
              <Typography fontSize="1.10rem" fontWeight="500">
                Praça da Sé
              </Typography>
            </Flex>

            <div className="dividing line"></div>

            <Flex
              alignItems="flex-start"
              justifyContent="center"
              gap="0.5rem"
              direction="column"
              style={{ width: "100%" }}
            >
              <Typography fontSize="1.25rem" fontWeight="600" color="#5a459e">
                Bairro:
              </Typography>
              <Typography fontSize="1.10rem" fontWeight="500">
                Sé
              </Typography>
            </Flex>

            <div className="dividing line"></div>

            <Flex
              alignItems="flex-start"
              justifyContent="center"
              gap="0.5rem"
              direction="column"
              style={{ width: "100%" }}
            >
              <Typography fontSize="1.25rem" fontWeight="600" color="#5a459e">
                Cidade:
              </Typography>
              <Typography fontSize="1.10rem" fontWeight="500">
                São Paulo - SP
              </Typography>
            </Flex>
          </Flex>

          <div className="deshed-vertically"></div>

          <Flex direction="column" style={{ width: "100%" }}>
            <Typography> Localização:</Typography>
            <img src="" alt="imagem" />
            <Button>
              <Typography>Abrir no Google Maps</Typography>
            </Button>
          </Flex>
        </Flex>
      </SearchContainer>
    </div>
  );
}

export default App;
