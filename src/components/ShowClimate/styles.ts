import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6vh;

  h1 {
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 2vh;
  }
  h1::first-letter {
    text-transform: uppercase;
  }
`;

export const Weather = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;

  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      width: 100%;
      height: 10vh;
      font-weight: 400;
      font-size: 1rem;
      span {
        font-size: 0.7rem;
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

  @media (min-width: 760px) {
    justify-content: center;
  }
`;
