// Styles
import { FaLocationDot } from "react-icons/fa6";
import { StyledCardResultSearch } from "./styles";
import { Typography } from "../typography";
import type { CardResultSearchProps } from "./types";
import { Flex } from "../flex";
import { FaDotCircle } from "react-icons/fa";
import { Button } from "../button";
import { LuArrowUpRight, LuCopy, LuCopyCheck } from "react-icons/lu";

export function CardResultSearch({
  bairro,
  cep,
  localidade,
  logradouro,
  uf,
  fullAdress,
  onClick,
  hasCopied,
  urlGoogleMaps,
}: CardResultSearchProps) {
  return (
    <StyledCardResultSearch>
      <div className="result-header">
        <FaLocationDot className="icon-location" size={20} color="#487dcb" />
        <Typography color="#676d74" fontWeight="400" fontSize="1.125rem">
          Resultados para:
        </Typography>
        <Typography color="#464a50" fontWeight="600" fontSize="1.125rem">
          {cep}
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
              {logradouro}
            </Typography>
          </div>

          <div className="result-item">
            <Typography color="#464a50" fontWeight="600">
              Bairro:
            </Typography>
            <Typography color="#676d74" fontWeight="400">
              {bairro}
            </Typography>
          </div>

          <div className="result-item">
            <Typography color="#464a50" fontWeight="600">
              Cidade:
            </Typography>
            <Typography color="#676d74" fontWeight="400">
              {localidade}
            </Typography>
          </div>

          <div className="result-item">
            <Typography color="#464a50" fontWeight="600">
              Estado:
            </Typography>
            <Typography color="#676d74" fontWeight="400">
              {uf}
            </Typography>
          </div>
        </Flex>

        <Flex direction="column" gap="1.5rem" style={{ width: "100%" }}>
          <Flex className="full-address" gap="0.5rem" direction="row">
            <Flex
              gap="0.5rem"
              justifyContent="flex-start"
              alignItems="center"
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >
              <FaDotCircle color="#487dcb" size={18} />
              <Typography
                color="#3f4349"
                fontWeight="600"
                style={{
                  width: "100%",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {fullAdress}
              </Typography>
            </Flex>
            <Button
              type="button"
              title="Copiar"
              style={{ padding: " 0.5rem 0.75rem" }}
              onClick={onClick}
            >
              {hasCopied ? <LuCopyCheck /> : <LuCopy />}
            </Button>
          </Flex>
        </Flex>

        <Flex
          justifyContent="center"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <a
            href={urlGoogleMaps}
            className="link-google-maps"
            target="blank"
            rel="noopener noreferrer"
          >
            Abrir no Google Maps
            <LuArrowUpRight size={20} />
          </a>
        </Flex>
      </Flex>
    </StyledCardResultSearch>
  );
}
