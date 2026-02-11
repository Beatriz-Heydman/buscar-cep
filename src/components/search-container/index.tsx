// Styles
import { StyledSearchContainer } from "./styles";

// Types
import type { SearchContainerProps } from "./types";

export function SearchContainer({ children }: SearchContainerProps) {
  return <StyledSearchContainer>{children}</StyledSearchContainer>;
}
