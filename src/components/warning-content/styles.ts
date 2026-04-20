// Libs
import styled from "styled-components";

export const StyledWarningContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 1.5rem;

  .search-location_icon {
    width: 70px !important;
    height: 70px !important;
    opacity: 0.8;

    @media (max-width: 400px) {
      width: 60px;
      height: 60px;
    }
  }
`;
