// Libs
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";

// Components
import { Button } from "./components/button";
import { Flex } from "./components/flex";
import { Input } from "./components/input";
import { Typography } from "./components/typography";

// Requests
import { zipCodeSearch } from "./requests/get/get-zip";

// Types
import type { Adress } from "./requests/get/get-zip/types";

function App() {
  const [adressData, setAdressdata] = useState<Adress>(); //Guarda o valor do retorno do endereço
  const [isZipError, setIsZipError] = useState(false); //Guarda o valor que retorna um erro

  const [zipCodeInput, setZipCodeInput] = useState(""); //Guarda o valor digitado no input

  console.log({ adressData, zipCodeInput, isZipError });

  const notifyError = () =>
    toast.error(
      <>
        CEP inválido!
        <br />
        Certifique-se de que está correto e tente novamente.
      </>,

      {
        style: {
          fontFamily: "Poppins",
          color: "#b74c4c",
          display: "flex",
          gap: "5px",
          lineHeight: "20px",
        },
      },
    );

  const notifyWarning = () =>
    toast.warning(
      <>
        O campo está vázio!
        <br />
        Digite um CEP para buscar informações.
      </>,

      {
        style: {
          fontFamily: "Poppins",
          color: "#9d7e00",
          display: "flex",
          gap: "5px",
          lineHeight: "20px",
        },
      },
    );

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const response = await zipCodeSearch(zipCodeInput, () => {
      setIsZipError(true);

      if (zipCodeInput.length === 0) {
        notifyWarning();
      } else {
        notifyError();
      }
    });

    if (response && response.erro !== "true") {
      setAdressdata(response);
    }
  }

  return (
    <div className="background_image">
      <ToastContainer position="top-right" theme="light" />

      <Flex
        justifyContent="space-around"
        alignItems="center"
        direction="column"
        gap="3rem"
        style={{ width: "90%", height: "100%" }}
      >
        <div className="title-container">
          <Typography fontSize="2rem" fontWeight="500" color="#445063">
            Buscador de CEP
          </Typography>
          <Typography fontSize="1.10rem" fontWeight="400" color="#445063">
            Encontre o endereço completo com facilidade.
          </Typography>
        </div>

        <div className="search-container">
          <form className="search-content" onSubmit={handleSubmit}>
            <Flex justifyContent="flex-start" alignItems="center">
              <IoSearch className="icon-search" size={34} color="#487dcb" />
              <Input
                inputMode="numeric"
                placeholder="Digite o CEP desejado"
                type="text"
                maxLength={9}
                onChange={(event) => {
                  setAdressdata(undefined);

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
            </Flex>
            <Button type="submit">
              <Typography
                color="#e0e8f8"
                fontWeight="400"
                style={{ cursor: "pointer" }}
              >
                Buscar
              </Typography>
            </Button>
          </form>

          <div className="result-container">
            <div
              className="result-header"
              style={{ backgroundColor: "f3f4f7" }}
            >
              <FaLocationDot
                className="icon-location"
                size={20}
                color="#487dcb"
              />
              <Typography color="#676d74" fontWeight="400" fontSize="1.125rem">
                Resultados para:
              </Typography>
              <Typography color="#464a50" fontWeight="600" fontSize="1.125rem">
                {adressData?.cep}
              </Typography>
            </div>

            <Flex
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              gap="1rem"
              style={{ padding: "0 1rem 1rem 1rem" }}
            >
              <Flex
                className="result-content"
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                gap="0.5rem"
              >
                <div className="result-item">
                  <Typography color="#464a50" fontWeight="600">
                    Rua:
                  </Typography>
                  <Typography color="#676d74" fontWeight="400">
                    {adressData?.logradouro}
                  </Typography>
                </div>

                <div className="result-item">
                  <Typography color="#464a50" fontWeight="600">
                    Bairro:
                  </Typography>
                  <Typography color="#676d74" fontWeight="400">
                    {adressData?.bairro}
                  </Typography>
                </div>

                <div className="result-item">
                  <Typography color="#464a50" fontWeight="600">
                    Cidade:
                  </Typography>
                  <Typography color="#676d74" fontWeight="400">
                    {adressData?.localidade}
                  </Typography>
                </div>

                <div className="result-item">
                  <Typography color="#464a50" fontWeight="600">
                    Estado:
                  </Typography>
                  <Typography color="#676d74" fontWeight="400">
                    {adressData?.uf}
                  </Typography>
                </div>
              </Flex>

              <Flex direction="column" gap="0.5rem" style={{ width: "100%" }}>
                <Flex className="full-address" gap="0.5rem" direction="row">
                  <Flex gap="0.5rem" style={{ width: "100%" }}>
                    <FaDotCircle color="#487dcb" size={18} />
                    <Typography
                      color="#3f4349"
                      fontWeight="600"
                      style={{
                        width: "100%",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {adressData?.logradouro}, {adressData?.bairro},
                      {adressData?.localidade}/{adressData?.uf} -
                      {adressData?.cep}
                    </Typography>
                  </Flex>
                  <Button>
                    <Typography
                      color="#e0e8f8"
                      fontWeight="400"
                      style={{ cursor: "pointer" }}
                    >
                      Copiar
                    </Typography>
                  </Button>
                </Flex>

                <Button className="button-google-maps">
                  <Typography
                    color="#e0e8f8"
                    fontWeight="400"
                    style={{ cursor: "pointer" }}
                  >
                    Abrir no Google Maps
                  </Typography>
                </Button>
              </Flex>
            </Flex>
          </div>
        </div>
      </Flex>
    </div>
  );
}

export default App;
