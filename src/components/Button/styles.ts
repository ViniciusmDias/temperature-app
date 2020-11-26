import styled from 'styled-components';

export const Container = styled.button`
  background-color: var(--e-global-color-items-background);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1.5vh;
  border-radius: 5px 0 0 5px;
  border: 0;
  transition: all 0.4s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
