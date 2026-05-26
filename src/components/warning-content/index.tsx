// Styles
import { StyledWarningContent } from "./styles";

// Components
import { Flex } from "../flex";
import { Typography } from "../typography";

export function WarningContent() {
  return (
    <StyledWarningContent>
      <img
        className="search-location_icon"
        src="/assets/icons/search-location-icon.png"
        alt="Ícone de globo com marcadores de localização"
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
    </StyledWarningContent>
  );
}
