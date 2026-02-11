// Styles
import { StyledButton } from "./styles";

// Types
import type { ButtonProps } from "./types";

export function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
