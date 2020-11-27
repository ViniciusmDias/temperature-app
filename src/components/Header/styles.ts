import styled from 'styled-components';

export const HeaderMenu = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 10vh;
  margin-bottom: 2vh;

  a {
    padding: 2vh;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 800;
    color: var(--e-global-color-text);
    transition: opacity 0.2s ease-in-out;
  }

  a:hover {
    opacity: 0.8;
  }

  div {
    a {
      position: relative;
      color: var(--e-global-color-items-background);
      font-size: 1.5rem;
    }

    a.active {
      color: var(--e-global-color-text);
    }

    a.active:after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 100%;
      height: 0.2rem;
      background-color: black;
      -webkit-transition: width 0.2s;
      transition: width 0.2s;
    }

    a + a {
      margin-left: 2vw;
    }

    @media (min-width: 760px) {
      margin-top: 0;
    }
  }

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
