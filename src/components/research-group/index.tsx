// Libs
import { IoSearch } from "react-icons/io5";

// Components
import { Input } from "../input";
import { Button } from "../button";
import { Typography } from "../typography";

// Styles
import { StyledResearchGroup } from "./styles";

// Types
import type { ResearchGroupProps } from "./types";

export function ResearchGroup({ onChange, onSubmit }: ResearchGroupProps) {
  return (
    <StyledResearchGroup onSubmit={onSubmit}>
      <IoSearch className="icon-search" size={34} color="#487dcb" />
      <Input
        inputMode="numeric"
        placeholder="Digite o CEP desejado"
        type="text"
        maxLength={9}
        onChange={onChange}
      />

      <Button type="submit">
        <Typography
          color="#e0e8f8"
          fontWeight="400"
          style={{ cursor: "pointer" }}
        >
          Buscar
        </Typography>
      </Button>
    </StyledResearchGroup>
  );
}
