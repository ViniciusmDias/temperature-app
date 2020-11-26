import styled, { css } from 'styled-components';

interface ErrorProps {
  hasError: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form<ErrorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 6vh auto 2vh;

  button {
    background-color: var(--e-global-color-items-background);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 15px;
    border-radius: 5px 0 0 5px;
    border: 0;
  }

  input + button {
    border-radius: 0 5px 5px 0;
    background-color: var(--e-global-color-primary);
  }

  input {
    padding: 1vh 2vw;
    height: 50px;
    flex: 1;
    border: 2px solid var(--e-global-color-items-background);

    ${(props) =>
      props.hasError &&
      css`
        border-color: var(--e-global-color-items-error);
      `}

    &::placeholder {
      color: var(--e-global-color-items-background);
    }
  }
`;
export const Error = styled.span`
  display: block;
  color: var(--e-global-color-items-error);
  width: 90%;
  margin: 1vh auto 2vh;
`;

export const Subtitle = styled.h2<ErrorProps>`
  text-align: center;
  padding: 1vh 2vw;
  font-size: 0.8rem;
  color: var(--e-global-color-items-background);
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;

  ${(props) =>
    props.hasError &&
    css`
      box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px;
    `};
`;
