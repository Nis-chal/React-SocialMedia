import styled from "styled-components"

const Wrapper = styled.aside`
   


.explore-content{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    column-gap: 1px;
    border-radius: 2%;
    padding:3% 5%;
    margin-right: 2%;
    background-color: var(--post-card-color);
    height: 90vh;
    overflow-y: scroll;
    .profile-posts-link{
      color: white;

      & > .profile-posts-content{
        position: relative;
        
        & > img {
        aspect-ratio: 1/1;
      }
      & > .multipleimage{
        position: absolute;
        top: 7%;
        right: 7%;
        color:white;
        font-size: 20px;
      }
    }
}

}
`

export default Wrapper;