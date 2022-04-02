import styled, { css, keyframes } from "styled-components";
import { FaEllipsisV } from "react-icons/fa";

const FadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    height: max-content;
    width: 50vw;
    margin: 2rem auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 2.5rem;

    position: relative;
    transition: all 0.5s;
  `}
`;

export const MealShift = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.effect};
`;

export const IconsOptions = styled(FaEllipsisV)`
  color: ${({ theme }) => theme.colors.primary};
`;
export const ContentTitleOptions = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const ButtonItem = styled.button`
  width: max-content;
  height: max-content;
  padding: 0.3rem;

  position: absolute;
  top: 0;
  right: 10px;
  background-color: transparent;
`;

export const ContentModal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.85);

  border-radius: 2.5rem;
  padding: 0.5rem;
  transition: all 0.5s;

  animation: ${FadeInAnimation} 0.6s linear;
`;
