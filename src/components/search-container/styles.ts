// Libs
import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  width: 900px;
  height: 600px;
  padding: 1.5rem 2.5rem;
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #cce1ff8c;
  backdrop-filter: blur(5px);
  border-radius: 2rem;
  border: 2px solid #ebd9ffeb;
  box-shadow: 0 15px 30px rgba(44, 0, 154, 0.549);
  position: relative;

  .map-search_image {
    width: 280px;
    height: 200px;
    position: absolute;
    top: -100px;
  }

  .maps_image {
    width: 100%;
    height: 170px;
    background-color: #8282ff;
    border-radius: 0.75rem;
  }

  .file-box_image {
    width: 250px;
    height: 150px;
  }

  .search-content {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    padding: 0 2rem;
  }
`;
