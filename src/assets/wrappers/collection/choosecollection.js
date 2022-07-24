import styled from "styled-components"


const Wrapper = styled.aside`

 .collection-content.display-none{
    z-index: -2;
    display: none;
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
        display: flex;
        flex-direction: column;
        gap: 3px;
        cursor: pointer;
        & > .single-item{
            display: flex;
            justify-content: space-between;
            text-align: start;
            align-items: center;

            & > h6{
                text-align: start;
            }

            & > img{
                width: 40px;
                aspect-ratio: 1/1;
            }
        }
    }

    .add-collection-btn{
        cursor: pointer;
    }
 }

`

export default Wrapper