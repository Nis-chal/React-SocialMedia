import styled from "styled-components"

const Wrapper = styled.aside`

.error-proccess{
    position: relative;
    width: 100vw;
    height: 100vh;

    .heading{
        position: absolute;
        top: 10%;
        left: 17%;
        font-size: 60px;
        animation-name: fadeindown;
        
        animation-duration: 9s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        animation-fill-mode: forwards;
    }

    .error-start{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        object-fit: cover;

    }

    .error-msg{
        height: 400px;
        width:400px;
        padding: 20px;
        position: absolute;
        top:20%;
        left:15%;
        background-color: var(--post-card-color);
        backdrop-filter: blur(20);
        z-index:2;
        border-radius: 25px;
        transform: translateY(-200%);
        animation: comin;
        animation-delay: 9.3s;
        animation-duration: 5s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        animation-fill-mode: forwards;
        .searchicon{
            font-size: 90px;
        }
        & >h2{
            font-size: 50px;
            padding-bottom: 10px;
            text-decoration: underline;
            cursor: pointer;
        }

        & > h1{
        vertical-align: middle;
            font-size: 70px;
        }
        & > p{
            font-size:40px;
        vertical-align: middle;

        }


        

    }

     @keyframes fadeindown {
  0% {
    opacity: 0;


    
  }
   10% {
    opacity: 1;


    
  }
   20% {
    opacity: 0;


    
  }
   30% {
    opacity: 1;


    
  }
   40% {
    opacity: 0;


    
  }

  60% {
    opacity: 1;


  }
   75% {
    opacity: 0;


  }
   90% {
    opacity: 1;


  }

  100% {
    opacity: 0;
    display: none;
  }
}
    
    

    @keyframes fadeOut0 {
  0% {
    opacity: 1;


    
  }

  95% {
    opacity: 1;


  }

  100% {
    opacity: 1;
  }
}

@keyframes comin {

     0% {
    opacity: 0;


  }
  25%{
    opacity: 0.7;

  }

  95% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
    
}


        

}

`
export default Wrapper;

