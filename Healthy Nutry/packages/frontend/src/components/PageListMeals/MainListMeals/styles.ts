import styled from "styled-components";
import Link from "next/link";
import { FaPlus, FaUserAlt, FaAngleLeft } from "react-icons/fa";

export const ContentLogo = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const IconAdd = styled(FaPlus)`
  margin-right: 1.6rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;
export const AddNewMeals = styled(Link)``;
export const Redirect = styled.a`
  color: ${({ theme }) => theme.colors.primary};
`;
export const UserName = styled.h3`
  color: ${({ theme }) => theme.colors.effect};
  margin-bottom: 1rem;
`;

export const IconProfle = styled(FaUserAlt)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 1.2rem;
`;

export const IconGoBack = styled(FaAngleLeft)`
  font-size: 1.6rem;
  margin-right: 1.6rem;
`;

export const Content = styled.div``;
export const InputFilterMeals = styled.input``;
export const Logout = styled(UserName)`
  &:hover {
    cursor: pointer;
  }
`;
