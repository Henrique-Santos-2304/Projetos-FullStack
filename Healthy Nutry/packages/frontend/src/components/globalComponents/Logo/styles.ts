import styled, { css } from "styled-components";

export const Container = styled.div`
  width: max-content;
  height: max-content;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreText = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.GrechenFuemen};
    font-size: ${theme.font.sizes.xxbiglarge};
    color: ${theme.colors.effect};
  `}
`;

export const ProText = styled(PreText)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;
