import { MealsRequest } from "api/requestsApi";
import Logo from "components/globalComponents/Logo";
import Select, { SingleValue } from "react-select";

import { useUserContext } from "hooks/userContext";
import { useState, useEffect } from "react";
import ContentMeals from "../ContentMeals";
import Pagination from "../Pagination";

import * as S from "./styles";
import { useRouter } from "next/router";

type mealsProps = {
  meals: MealsRequest[];
};

type selectProps = {
  value: string;
  label: string;
};

type isArrayLengthprops = {
  isLengthArray: boolean;
  array: MealsRequest[];
};
const optionsValues = [
  { value: "proteins", label: "Proteínas" },
  { value: "carbohydrate", label: "Carboidrato" },
  { value: "vegetable", label: "Vegetais" },
];
const MainListMeals = ({ meals }: mealsProps) => {
  const router = useRouter();

  const [valueSelected, setValueSelected] = useState<SingleValue<selectProps>>({
    value: "",
    label: "Filtre por um nutriente",
  });

  const { dataUser } = useUserContext();
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [userName, setUserName] = useState("");
  const [arrayMeals, setArrayMeals] = useState({
    isLengthArray: false,
    array: meals,
  });
  const itensPerPage = 5;

  const attPageInDeleteMeals = () => {
    console.log("Função att");
    setArrayMeals({
      isLengthArray: false,
      array: meals,
    });
  };

  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const sliceArray = (array: MealsRequest[]) =>
    array.slice(startIndex, endIndex);

  const currentItens = arrayMeals.isLengthArray
    ? sliceArray(arrayMeals.array)
    : sliceArray(meals);

  const handleSelectedItem = (selectOption: SingleValue<selectProps>) => {
    setValueSelected(selectOption);
  };
  const filterArrayFromChoice = () => {
    let newArray: MealsRequest[] = [];
    let newArrayFiltered: isArrayLengthprops = {} as isArrayLengthprops;

    const setNewArray = () =>
      (newArrayFiltered = {
        isLengthArray: true,
        array: newArray,
      });

    if (valueSelected?.value === "proteins") {
      newArray = meals.filter((meal) => meal.protein !== "");
      setNewArray();
    } else if (valueSelected?.value === "carbohydrate") {
      newArray = meals.filter((meal) => meal.carbohydrate !== "");
      setNewArray();
    } else if (valueSelected?.value === "vegetable") {
      newArray = meals.filter((meal) => meal.vegetable !== "");
      setNewArray();
    } else {
      newArray = meals;
    }

    setArrayMeals(newArrayFiltered);
  };
  const goBackLogin = () => {
    localStorage.clear();
    router.push("/");
  };

  useEffect(() => {
    const name = localStorage.getItem("TOKEN_NAME");

    if (dataUser.name) {
      setUserName(dataUser.name);
    } else {
      name && setUserName(name);
    }
  }, []);

  useEffect(() => {
    filterArrayFromChoice();
  }, [valueSelected]);

  useEffect(() => {
    console.log("");
  }, [arrayMeals]);

  return (
    <>
      <S.ContentLogo>
        <Logo />
        <S.Logout onClick={goBackLogin}>
          <S.IconGoBack />
          Fazer Logout
        </S.Logout>

        <S.UserName>
          <S.IconProfle />
          {userName}
        </S.UserName>
        <S.Content>
          <S.AddNewMeals href="/addNewMeals" passHref>
            <S.Redirect>
              <S.IconAdd />
              Adicionar nova refeição
            </S.Redirect>
          </S.AddNewMeals>

          <Select
            options={optionsValues}
            value={valueSelected}
            onChange={handleSelectedItem}
          />
        </S.Content>
      </S.ContentLogo>

      {currentItens.map((meal) => (
        <ContentMeals
          meal={meal}
          key={meal.id}
          attPageInDeleteMeals={attPageInDeleteMeals}
        />
      ))}

      {meals.length > 0 && (
        <Pagination
          limit={5}
          total={meals.length}
          offset={offset}
          setOffset={setOffset}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default MainListMeals;
