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
      justify-content: center;
      align-items: center;
      text-decoration: none;
      width: 100%;
      height: 10vh;
      font-weight: 700;
      font-size: 1rem;
    }
  }
  @media (min-width: 760px) {
    justify-content: center;
  }
`;
