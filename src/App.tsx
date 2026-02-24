// Libs
import { useState } from "react";
import { BiSolidMap } from "react-icons/bi";

// Components
import { Button } from "./components/button";
import { Flex } from "./components/flex";
import { Input } from "./components/input";
import { SearchContainer } from "./components/search-container";
import { Typography } from "./components/typography";

// Requests
import { zipCodeSearch } from "./requests/get/get-zip";

// Types
import type { Adress } from "./requests/get/get-zip/types";

function App() {
  const [adressData, setAdressdata] = useState<Adress>(); //Guarda o valor do retorno do endereço
  const [errorSearch, setErrorSearch] = useState(""); //Guarda o valor que retorna um erro

  const [zipCodeInput, setZipCodeInput] = useState("");

  console.log(adressData?.erro);
  console.log(adressData);

  return (
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
          <Input
            type="text"
            placeholder="Digite o CEP"
            maxLength={9}
            onChange={(event) => {
              const value = event?.currentTarget.value;
              event.currentTarget.value = value.replace(/[^0-9&-]/g, "");
              setZipCodeInput(value);

              if (value.length === 5) {
                event.currentTarget.value = value + "-";
              }
              if (value.slice(5) === "-") {
                event.currentTarget.value = value.replace("-", "");
              }
            }}
          />

          <Button
            onClick={async () => {
              const response = await zipCodeSearch(zipCodeInput, () => {
                setErrorSearch(errorSearch);
              });

              if (response) {
                setAdressdata(response);
              }
            }}
          >
            Buscar
          </Button>
        </Flex>

        <div className="dividing deshed-horizontal"></div>
        {adressData ? (
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
                  {adressData?.logradouro}
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
                  {adressData?.bairro}
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
                  {adressData?.localidade} - {adressData?.uf}
                </Typography>
              </Flex>
            </Flex>

            <div className="deshed-vertically"></div>

            <Flex
              alignItems="center"
              justifyContent="center"
              gap="1rem"
              direction="column"
              style={{ width: "100%" }}
            >
              <Typography
                fontSize="1.25rem"
                fontWeight="600"
                color="#5a459e"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                Localização:
              </Typography>
              <img className="maps_image" src="" alt="imagem" />
              <Button style={{ width: "100%" }}>
                <BiSolidMap size={23} />
                <Typography color="#f2f2f2">Abrir no Google Maps</Typography>
              </Button>
            </Flex>
          </Flex>
        ) : (
          <Flex justifyContent="center" alignItems="center" direction="column">
            <img
              className="file-box_image"
              src="../public/assets/images/file-box.png"
              alt=""
            />

            <Flex
              justifyContent="center"
              alignItems="center"
              direction="column"
              gap="0.5rem"
            >
              <Typography color="#397eba" fontSize="1.2rem" fontWeight="600">
                Seu resultado aparecerá aqui!
              </Typography>
              <Typography color="#397eba" fontSize="1rem" fontWeight="400">
                Digite um CEP no campo acima para buscar informações.
              </Typography>
            </Flex>
          </Flex>
        )}
      </SearchContainer>
    </div>
  );
}

export default App;
