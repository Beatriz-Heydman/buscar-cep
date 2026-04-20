// Libs
import styled from "styled-components";

export const StyledResearchGroup = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafad5;
  padding: 0.25rem 0.5rem 0.25rem 1rem;
  border-radius: 1rem;
  border: 2px solid #ffffff;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start !important;
    align-items: flex-start;

    & > button {
      width: 100%;
    }

    .icon-search {
      width: 25px;
    }
  }
`;
