import styled from "styled-components"


const Wrapper = styled.aside`

 .collection-content.display-none{
    z-index: -2;
 }

 .collection-content{
    position: absolute;
    top: -250px;
    right: -20px;
    width: 200px;
    z-index: 1;
    background-color: var(--post-card-color);
    backdrop-filter: blur(20px);
    border-radius: 2%;
clip-path: polygon(50% 0, 100% 1%, 100% 92%, 58% 92%, 50% 100%, 44% 93%, 0 92%, 0 0);    
   
    & > .collection-heading{
        display: flex;
        align-items: center;
        padding-block:5px ;
        padding-inline: 5px;
        gap: 5px;

        & > h4{
            font-size: 10px;
        }

    }
    & > .collection-list{
        height: 200px;
        padding-inline: 2%;
        overflow-y: scroll;
    }

    .add-collection-btn{
        cursor: pointer;
    }
 }

`

export default Wrapper