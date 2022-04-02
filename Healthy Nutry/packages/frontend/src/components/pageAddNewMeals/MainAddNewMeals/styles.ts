import styled, { css } from "styled-components";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const Container = styled.div`
  ${({ theme }) => css``}
`;
export const ReturnToListMeals = styled(Link)``;
export const Redirect = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
`;
export const IconGoToBack = styled(FaArrowLeft)`
  margin: 1rem 1.7rem 0 0;
  color: ${({ theme }) => theme.colors.primary};
`;
export const Divider = styled.div`
  margin-bottom: 1rem;
`;
