// Styles
import { StyledCardSearchContainer } from "./styles";

// Types
import type { CardSearchContainerProps } from "./types";

export function CardSearchContainer({ children }: CardSearchContainerProps) {
  return <StyledCardSearchContainer>{children}</StyledCardSearchContainer>;
}
