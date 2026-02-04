// Libs
import styled from "styled-components";

// Types
import type { TypographyProps } from "./types";

export const Typography = styled.label<TypographyProps>`
  font-size: ${({ fontSize = "1rem" }) => fontSize};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  font-family: ${({ fontFamily = "Poppins" }) => fontFamily};
  line-height: ${({ lineHeight = "normal" }) => lineHeight};
  color: ${({ color = "#fff" }) => color};
`;
