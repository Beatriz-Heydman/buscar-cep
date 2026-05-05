// Libs
import { useState, useEffect, type SubmitEvent } from "react";

// Components
import {
  Flex,
  CardSearchContainer,
  ResearchGroup,
  Loading,
  CardResultSearch,
  WarningContent,
} from "../../components";
import { HomeHeaderTitles } from "./components/header-titles";

// Utils
import { zipCodeSearch } from "../../requests/get/get-zip";
import { formatCep, sanitizeCep } from "../../shared/utils/format-cep";
import { formatGoogleURLMaps } from "../../shared/utils/format-google-url-maps";
import { toastSuccess, toastError } from "../../shared/utils/toast";
import { formatAddress } from "./utils/format-address";
import { cepToastWarn, cepToastError } from "./utils/toasts";

// Types
import type { Adress } from "../../requests/get/get-zip/types";

// Constants
import { CEP_LENGTH } from "./constants/cep";

export function HomeView() {
  const [addressData, setAdressdata] = useState<Adress>(); //Guarda o valor do retorno do endereço
  const [loading, setLoading] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const [zipCodeInput, setZipCodeInput] = useState(""); //Guarda o valor digitado no input

  const fullAddress = formatAddress(addressData);

  async function fetchCEP(cep = "") {
    if (loading) return;

    const sanitizedCep = sanitizeCep(cep);

    if (addressData && sanitizedCep.length === CEP_LENGTH) return;

    setLoading(true);

    try {
      const response = await zipCodeSearch(sanitizedCep);
      if (response && response.erro !== "true") {
        setAdressdata(response);
      }
    } catch {
      cepToastError();
    } finally {
      setLoading(false);
    }
  }

  async function copyFullAdress() {
    try {
      await navigator.clipboard.writeText(fullAddress);

      setHasCopied(true);
      toastSuccess("Endereço copiado com sucesso!");

      setTimeout(() => {
        setHasCopied(false);
      }, 3000);
    } catch {
      toastError(
        "Não foi possível copiar o endereço. Tente novamente ou copie manualmente.",
      );
    }
  }

  function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const sanitizedCep = sanitizeCep(zipCodeInput);

    if (sanitizedCep.length === 0) {
      cepToastWarn();
      return;
    }
    if (sanitizedCep.length < CEP_LENGTH) {
      cepToastError();
      return;
    }

    fetchCEP(zipCodeInput);
  }

  const urlGoogleMaps = formatGoogleURLMaps(fullAddress);

  useEffect(() => {
    const params = window.location.search;
    const urlParams = new URLSearchParams(params);

    const cepURLParam = urlParams.get("cep") as string;

    if (cepURLParam) {
      fetchCEP(cepURLParam);
    }
  }, []);

  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      direction="column"
      gap="3rem"
      style={{ width: "90%", height: "100%" }}
    >
      <HomeHeaderTitles />

      <CardSearchContainer>
        <ResearchGroup
          onSubmit={onSubmit}
          onChange={(event) => {
            const value = event?.currentTarget.value;
            setAdressdata(undefined);
            setZipCodeInput(value);
            event.currentTarget.value = formatCep(value);
          }}
        />

        {loading ? (
          <Loading />
        ) : addressData ? (
          <CardResultSearch
            cep={addressData.cep}
            bairro={addressData.bairro}
            logradouro={addressData.logradouro}
            uf={addressData.uf}
            localidade={addressData.localidade}
            fullAdress={fullAddress}
            hasCopied={hasCopied}
            urlGoogleMaps={urlGoogleMaps}
            onClick={copyFullAdress}
          />
        ) : (
          <WarningContent />
        )}
      </CardSearchContainer>
    </Flex>
  );
}
