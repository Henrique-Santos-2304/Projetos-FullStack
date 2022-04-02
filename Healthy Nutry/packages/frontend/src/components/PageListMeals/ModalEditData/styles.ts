import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  `}
`;
export const ButtonEdit = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.1rem;
  font-size: 1.6rem;
  margin: 0.3rem 0;
  padding: 0.7rem 2rem;
  transition: all 0.5s;

  border-radius: 1.4rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export const ButtonDelete = styled(ButtonEdit)``;
