// Styles
import { StyledInput } from "./styles";

// Types
import type { inputProps } from "./types";

export function Input({ ...props }: inputProps) {
  return <StyledInput {...props} />;
}
