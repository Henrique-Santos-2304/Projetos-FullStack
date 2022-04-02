import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
`;

export const ContentInput = styled.div`
  align-self: flex-end;
  display: flex;
  margin-top: 1.5rem;
`;

export const QuantityFood = styled.input`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 900;
  font-size: 1.6rem;
`;
export const Textg = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 1rem;
`;
export const TextQuantity = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 1rem;
`;
