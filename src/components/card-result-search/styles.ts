// Libs
import styled from "styled-components";

export const StyledCardResultSearch = styled.div`
  width: 95%;
  height: 100%;
  border-radius: 1rem;
  background-color: #fafafad5;
  border: 2px solid #ffffff;

  @media (max-width: 400px) {
    padding: 2.5rem 1rem;
  }

  .result-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: #d5d5d54b;
    border-radius: 1rem 1rem 0 0;
    border-bottom: 2px solid #ffffff;

    @media (max-width: 400px) {
      & > label {
        font-size: 1rem;
      }

      .icon-location {
        width: 18px;
        height: 18px;
      }
    }
  }

  .result-content {
    padding-left: 1.25rem;

    @media (max-width: 400px) {
      padding-left: 0;
      padding-top: 0.5rem;
    }
  }

  .result-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 600px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 0;
    }
  }

  .full-address {
    width: 100%;

    & > button {
      width: auto;
    }

    @media (max-width: 400px) {
      flex-direction: column !important;

      & > button {
        width: 100%;
      }
    }
  }

  .link-google-maps {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    font-family: Poppins;
    font-weight: 500;
    color: #487dcb;
    transition: all ease 0.3s;
    line-height: 1.3;
    position: relative;
    text-decoration: none;

    &::before {
      content: "";
      width: 0;
      height: 2px;
      border-radius: 2px;
      background-color: #487dcb;
      position: absolute;
      bottom: -0.25rem;
      left: 0;
      transition: width 0.4s;
    }

    &:hover::before {
      width: 100%;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;
