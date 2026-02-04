// Libs
import styled from "styled-components";

// Types
import type { flexProps } from "./types";

export const Flex = styled.div<flexProps>`
  display: flex;
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
  align-items: ${({ alignItems = "center" }) => alignItems};
  flex-direction: ${({ direction = "row" }) => direction};
  flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};
  gap: ${({ gap = "0" }) => gap};
`;
