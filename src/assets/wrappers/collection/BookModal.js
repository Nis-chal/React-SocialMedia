import styled from "styled-components";

const Wrapper = styled.aside`

.Modal-Content{
  display: flex;
  flex-direction: column;
  background-color: var(--post-card-color);
  width: 400px;
  height: 300px;
  border-radius: 2%;
  position: absolute;
  top:20%;
  left: 20%;
  backdrop-filter: blur(20px);

   & > .Modal-Content-Body{
      display: flex;
  flex-direction: column;
  
    &> .cross-symbol{
    
    font-size:20px;
    
    justify-self: end;
    margin-left: auto;
    margin-top:6px ;
    margin-right: 9px;
  }


  &> img{
    width: 90px;
    height: 90px;
    margin: 20px auto;
  }

 
  

  z-index: 1;
  
  & > .heading{
    display: flex;
    justify-content: center;
    position: relative;
    top:0;
  


  }

  & > .modalinput{
     background-color: var(--post-card-color);
    backdrop-filter: blur(100px);
    height: 50px;
    margin-top:10px ;
    margin-inline:4%;
    padding-left: 2%;
    color: white;

    &:focus{
      outline: none;
    }
  }



  & > .save-btn{
    margin-top:30px ;

    background-color: var(--color-primary);
    outline: none;
    border: none;
    padding-block: 10px;
    color: white;
  }

   }
   

  .smallloading{
    width: 20px !important;
    height: 20px !important;
  }


}


`

export default Wrapper