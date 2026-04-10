// Libs
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// Components
import {
  Flex,
  Typography,
  Loading,
  ResearchGroup,
  CardSearchContainer,
  CardResultSearch,
} from "./components";

// Requests
import { zipCodeSearch } from "./requests/get/get-zip";

// Types
import type { Adress } from "./requests/get/get-zip/types";

function App() {
  const [adressData, setAdressdata] = useState<Adress>(); //Guarda o valor do retorno do endereço
  const [isZipError, setIsZipError] = useState(false); //Guarda o valor que retorna um erro

  const [zipCodeInput, setZipCodeInput] = useState(""); //Guarda o valor digitado no input

  const [hasCopied, setHasCopied] = useState(false);

  // const DEBUG_ERROR = true; // Forçar um erro ao copiar o texto para teste

  const fullAdress = `${adressData?.logradouro}, ${adressData?.bairro}, ${adressData?.localidade}/${adressData?.uf} - ${adressData?.cep}`;

  const [loading, setLoading] = useState(false);

  console.log({ adressData, zipCodeInput, isZipError, loading });

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
          color: "#af8383",
          display: "flex",
          gap: "5px",
          lineHeight: "20px",
          fontSize: "0.95rem",
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
          color: "#958f76",
          display: "flex",
          gap: "5px",
          lineHeight: "20px",
          fontSize: "0.95rem",
        },
      },
    );

  const notifySuccessCopiedAdress = () =>
    toast.success("Endereço copiado com sucesso!", {
      style: {
        fontFamily: "Poppins",
        color: "#5a7d5b",
        fontSize: "0.95rem",
      },
      autoClose: 4000,
    });

  const notifyErrorCopiedAdress = () =>
    toast.error(
      "Não foi possível copiar o endereço. Tente novamente ou copie manualmente.",
      {
        style: {
          fontFamily: "Poppins",
          color: "#af8383",
          fontSize: "0.95rem",
        },
        autoClose: 4000,
      },
    );

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (loading) return;

    if (zipCodeInput.length === 0) {
      notifyWarning();
      return;
    }
    if (zipCodeInput.length !== 9) {
      notifyError();
      return;
    }
    if (adressData && zipCodeInput.length === 9) return;

    try {
      const response = await zipCodeSearch(zipCodeInput, () => {
        setIsZipError(true);
      });

      if (!zipCodeInput) {
        notifyError();
      }

      if (response && response.erro !== "true") {
        setAdressdata(response);
      }
    } finally {
      setLoading(false);
    }
  }

  const copyFullAdress = async () => {
    try {
      // if (DEBUG_ERROR) {
      //   throw new Error("Erro simulado");
      // }

      await navigator.clipboard.writeText(fullAdress);

      setHasCopied(true);
      notifySuccessCopiedAdress();

      setTimeout(() => {
        setHasCopied(false);
      }, 3000);
    } catch {
      notifyErrorCopiedAdress();
    }
  };

  const urlGoogleMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAdress)}`;

  return (
    <Flex
      className="background_image"
      justifyContent="center"
      alignItems="center"
    >
      <ToastContainer position="top-right" theme="light" limit={1} />

      <Flex
        justifyContent="space-around"
        alignItems="center"
        direction="column"
        gap="3rem"
        style={{ width: "90%", height: "100%" }}
      >
        <Flex
          className="title-container"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Typography fontSize="2rem" fontWeight="500" color="#445063">
            Buscador de CEP
          </Typography>
          <Typography fontSize="1.10rem" fontWeight="400" color="#445063">
            Encontre o endereço completo com facilidade.
          </Typography>
        </Flex>

        <CardSearchContainer>
          <ResearchGroup
            onSubmit={handleSubmit}
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

          {adressData ? (
            <CardResultSearch
              cep={adressData.cep}
              bairro={adressData.bairro}
              logradouro={adressData.logradouro}
              uf={adressData.uf}
              localidade={adressData.localidade}
              fullAdress={fullAdress}
              hasCopied={hasCopied}
              urlGoogleMaps={urlGoogleMaps}
              onClick={() => {
                copyFullAdress();
              }}
            />
          ) : (
            <Flex
              className="result-container"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              {loading ? (
                <Loading />
              ) : (
                <Flex
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="1.5rem"
                >
                  <img
                    className="search-location_icon"
                    src="public/assets/icons/search-location-icon.png"
                    alt=""
                  />
                  <Flex
                    direction="column"
                    gap="0.5rem"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      fontSize="1.375rem"
                      fontWeight="500"
                      color="#445063"
                      style={{ textAlign: "center" }}
                    >
                      Seu resultado aparecerá aqui!
                    </Typography>
                    <Typography
                      fontSize="1.05rem"
                      fontWeight="400"
                      color="#445063"
                      style={{ textAlign: "center" }}
                    >
                      Digite um CEP no campo acima para buscar informações.
                    </Typography>
                  </Flex>
                </Flex>
              )}
            </Flex>
          )}
        </CardSearchContainer>
      </Flex>
    </Flex>
  );
}

export default App;
