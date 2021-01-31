import styled from 'styled-components';

interface WeatherProps {
  degree: number;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6vh;
  overflow-x: auto;

  h1 {
    text-align: center;
    font-size: 1.4rem;
    margin-bottom: 2vh;
  }
  h1::first-letter {
    text-transform: uppercase;
  }
`;

export const Weather = styled.div<WeatherProps>`
  min-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;

  svg {
    font-size: 42px;
    transform: rotate(${(props) => props.degree}deg);
    margin: 2vh;
  }

  @media (min-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;
