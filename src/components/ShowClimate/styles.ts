import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6vh;
  overflow-x: scroll;

  h1 {
    text-align: center;
    font-size: 1.4rem;
    margin-bottom: 2vh;
  }
  h1::first-letter {
    text-transform: uppercase;
  }
`;

export const Weather = styled.div`
  min-width: 650px;
  width: 100%;
  display: flex;
  align-self: flex-start;

  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: center;
    align-items: center;

    li {
      border-top: 1px solid var(--e-global-color-items-background);
      border-bottom: 1px solid var(--e-global-color-items-background);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      width: 100%;
      height: 10vh;
      font-weight: 400;
      font-size: 1rem;

      & + li {
        border-top: none;
      }

      span {
        font-size: 0.7rem;
      }

      img {
        max-width: 70px;
        width: 75%;
      }
    }

    li:nth-child(1) {
      flex-direction: row;
      font-weight: 700;
    }
  }

  ul:nth-child(1) {
    li {
      color: var(--e-global-color-primary);
      font-weight: 700;
    }
  }

  @media (min-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;
