import { MealsRequest } from "api/requestsApi";
import { useState } from "react";
import ModalEditData from "../ModalEditData";
import TypeListMeals from "../TypeListMeals";
import * as S from "./styles";

type mealProps = {
  meal: MealsRequest;
  attPageInDeleteMeals: () => void;
};
const ContentMeals = ({ meal, attPageInDeleteMeals }: mealProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <S.Container>
      <S.ContentTitleOptions>
        <S.MealShift>
          {meal.name.charAt(0).toUpperCase() + meal.name.substring(1)}
        </S.MealShift>
        <S.ButtonItem onClick={() => setModalVisible(true)}>
          <S.IconsOptions />
        </S.ButtonItem>
      </S.ContentTitleOptions>

      {meal.protein && (
        <TypeListMeals
          foodType="Proteína"
          foodName={meal.protein ? meal.protein : null}
          weightsFood={meal.quantity_proteins ? meal.quantity_proteins : null}
        />
      )}
      {meal.carbohydrate && (
        <TypeListMeals
          foodType="Carboidrato"
          foodName={meal.carbohydrate ? meal.carbohydrate : null}
          weightsFood={
            meal.quantity_carbohydrate ? meal.quantity_carbohydrate : null
          }
        />
      )}
      {meal.vegetable && (
        <TypeListMeals
          foodType="Carboidrato"
          foodName={meal.vegetable ? meal.vegetable : null}
          weightsFood={meal.quantity_vegetable ? meal.quantity_vegetable : null}
        />
      )}
      {modalVisible && (
        <S.ContentModal onClick={() => setModalVisible(false)}>
          <ModalEditData
            id={meal.id}
            attPageInDeleteMeals={attPageInDeleteMeals}
          />
        </S.ContentModal>
      )}
    </S.Container>
  );
};

export default ContentMeals;
