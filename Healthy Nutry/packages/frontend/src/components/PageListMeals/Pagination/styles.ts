import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  margin: 2rem auto 5rem;
  display: flex;
`;
export const ButtonPrev = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
  padding: 1rem;
  border-radius: 0.7rem;
  margin: 0 1rem 0;

  &:hover {
    background: ${({ theme }) => theme.colors.effect};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ButtonsPages = styled.button`
  padding: 1rem;
  font-size: 1.6rem;
  border-radius: 0.7rem;
  margin: 0 0.3rem;

  &:hover {
    background: ${({ theme }) => theme.colors.effect};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const ButtonNext = styled(ButtonPrev)``;
