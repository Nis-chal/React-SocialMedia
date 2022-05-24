import styled from 'styled-components';

const Wrapper = styled.nav`


nav {
  width: 100%;
  background: var(--color-white);
  padding: 0.7rem 0;
  position: fixed;
  top: 0;
  z-index: 10;
}
.log{
    color: var(--color-dark);
}
nav .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 3%;
}
.search-bar {
  background: var(--color-light);
  border-radius: var(--border-radius);
  padding: var(--search-padding);
}

.search-bar input[type="search"] {
  background: transparent;
  width: 30vw;
  margin-left: 1rem;
  font-size: 0.9rem;
  color: var(--color-dark);
  border: none;
}

nav .search-bar input[type="search"]::placeholder {
  color: var(--color-gray);
}
nav .create {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.btn-none{
    border: none;
    background-color: transparent;
}
.btn-purple{
    border-radius: var(--border-radius);
    background-color: var(--color-primary);
    font-weight: bold;
    
}

 .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: max-content;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
   
  }
  .btn-container{
      position: relative;
  }

`

export default Wrapper;