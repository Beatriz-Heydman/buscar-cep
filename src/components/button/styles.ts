// Libs
import styled from "styled-components";

export const StyledButton = styled.button`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 0.75rem;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 600;
  color: #e4e4e4;
  border: 2px solid #5754be;
  background: linear-gradient(to top, #3330a2, #6765e8);
  box-shadow:
    inset -10px 6px 3px -8px rgba(255, 255, 255, 0.3),
    inset 10px -6px 3px -8px rgba(255, 255, 255, 0.3);
  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    scale: 0.99;
    box-shadow:
      inset -10px -7px 3px -8px rgba(255, 255, 255, 0.395),
      inset 10px 7px 3px -8px rgba(255, 255, 255, 0.393);
    background: linear-gradient(to top, #2d2a8d, #6361d7);
  }

  &:active {
    transform: translateY(3px);
  }
`;
