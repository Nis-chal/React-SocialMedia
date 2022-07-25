import styled from "styled-components";

const Wrapper = styled.aside`
.collection-box{
    background-color: var(--post-card-color);
    padding: 2%;
    margin-right: 2%;
}
  .collection {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: stretch;

    & > .card{
        display: flex;
        align-items: stretch;

        position: relative;
        cursor: pointer;

        & > .multiple-image{
            position: absolute;
            top: 7px;
            right: 7px;
        }
        
    }

  }
`;


export default Wrapper