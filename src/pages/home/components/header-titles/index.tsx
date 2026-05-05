import { Flex, Typography } from "../../../../components";

export function HomeHeaderTitles() {
  return (
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
  );
}
