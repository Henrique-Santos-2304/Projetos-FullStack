import styled from "styled-components";
type colorMessageProps = {
  colorMessage: string;
};
export const Container = styled.div`
  width: 40vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const ContentSelects = styled.div``;
export const ButtonSend = styled.button`
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  transition: all 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors.effect};
  }
`;

export const Error = styled.p<colorMessageProps>`
  width: 100%;
  text-align: center;
  color: ${({ theme, colorMessage }) =>
    colorMessage ? theme.colors.attention : theme.colors.effect};
`;
