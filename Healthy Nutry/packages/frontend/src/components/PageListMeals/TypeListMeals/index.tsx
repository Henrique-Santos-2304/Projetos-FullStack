import * as S from "./styles";

type foodType = "Proteína" | "Carboidrato" | "Verdura";

type Props = {
  foodType: foodType;
  foodName: string | null;
  weightsFood: string | null;
};

const TypeListMeals = ({ foodType, foodName, weightsFood }: Props) => {
  const toCapitalize = (txt: string) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1);
  };
  return (
    <S.Container>
      <S.ContentTypes>
        <S.TypeList>
          {`${toCapitalize(foodType)}`}:{" "}
          <S.FoodName>
            {foodName ? `  ${toCapitalize(foodName)}  ` : null}
          </S.FoodName>
        </S.TypeList>
      </S.ContentTypes>

      <S.ContentTypes>
        <S.QuantityFood>
          Quantidade:
          <S.FoodByWeight>
            {weightsFood ? `  ${toCapitalize(weightsFood)}` : null}g
          </S.FoodByWeight>
        </S.QuantityFood>
      </S.ContentTypes>
    </S.Container>
  );
};

export default TypeListMeals;
