import styled, { css } from "styled-components";
import Link from "next/link";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const GoToLoginScreen = styled(Link)``;

export const Redirect = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.effect};
  }
`;
