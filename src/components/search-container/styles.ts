// Libs
import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  width: 900px;
  height: 600px;
  padding: 1.5rem 2.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #cce1ff8c;
  backdrop-filter: blur(4px);
  border-radius: 2rem;
  border: 2px solid #ebd9ffeb;
  box-shadow: 0 15px 30px rgba(44, 0, 154, 0.549);
  position: relative;

  .map-search_image {
    width: 350px;
    height: 250px;
    position: absolute;
    top: -150px;
  }
`;
