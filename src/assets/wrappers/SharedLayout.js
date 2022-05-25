import styled from 'styled-components'

const Wrapper = styled.aside`

 section{

   background: var(--color-light);
 }


.dashboard {
  width: 80%;
  margin: 0 auto;
}



main {
  position: relative;
  top: 5.4rem;
  
}
main .container {
  display: grid;
  grid-template-columns: 18vw auto 20vw;
  column-gap: 2rem;
  position: relative;
  background: var(--color-light);
  }
  .dashbaord{
      position: relative;
  }


`


export default Wrapper