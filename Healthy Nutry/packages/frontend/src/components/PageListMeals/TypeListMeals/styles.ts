import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ContentTypes = styled.div`
  width: 50%;
  padding-left: 5rem;
`;

export const TypeList = styled.p`
  color: #e1e1e1;
`;
export const FoodName = styled.span`
  color: rgba(255, 255, 255, 0.7);
`;
export const QuantityFood = styled(TypeList)`
  margin-bottom: 2rem;
`;
export const FoodByWeight = styled(FoodName)``;
