import styled from "styled-components";

const Wrapper = styled.aside`
  .slideimages {
    width: 550px;
    aspect-ratio: 1/0.7;
    border: none;
  

    & .slideimg {
      width: 550px;
      aspect-ratio: 1/0.7;
      object-fit: cover !important;
    }
  }
`;
export default Wrapper;
