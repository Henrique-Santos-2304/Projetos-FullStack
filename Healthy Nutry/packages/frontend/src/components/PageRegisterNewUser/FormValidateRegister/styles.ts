import styled, { css } from "styled-components";

export const Form = styled.form``;
export const Inputs = styled.input`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-bottom: 0.1rem solid ${theme.colors.primary};
    font-size: 1.4rem;
    background: transparent;
    border-radius: 0.7rem;
    text-align: start;
    color: ${theme.colors.primary};
    transition: all 0.3s linear;
    ::placeholder {
      color: rgba(155, 155, 155, 0.95);
    }
    &:hover,
    &:focus {
      background: rgba(255, 255, 255, 0.1);
      border: 0.1rem solid ${theme.colors.effect};
    }
    @media (min-width: ${theme.media.medium}) {
      width: 24rem;
    }
    @media (min-width: ${theme.media.xmedium}) {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const Button = styled.input`
  ${({ theme }) => css`
    margin-bottom: 0.3rem;
    padding: 0.5rem ${theme.spacings.xsmall};
    background: transparent;
    color: ${theme.colors.effect};
    font-weight: 700;
    border-radius: 0.5rem;
    border: 0.1rem solid ${theme.colors.effect};
    transition: all 0.4s ease-in-out;
    &:hover {
      color: ${theme.colors.primary};
      border: 0.1rem solid ${theme.colors.primary};
    }
  `}
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.attention};

  text-align: center;
  margin: 1rem auto;
`;
