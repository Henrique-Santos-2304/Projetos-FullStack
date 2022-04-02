import { requestPostMeals } from "api/requestsApi";
import { useUserContext } from "hooks/userContext";
import { useEffect, useState } from "react";
import {
  optionsCarbohydrates,
  optionsMealTypes,
  optionsProteins,
  optionsVegetables,
} from "utils/apiOptions";
import SelectComponent from "../SelectComponent";
import * as S from "./styles";

export type optionSelectFood = {
  value: string;
  label: string;
  quantityFood: string;
};

type sendDataApi = {
  name: string;
  protein: null | string;
  quantityProtein: null | string;
  carbohydrate: null | string;
  quantityCarbohydrate: null | string;
  vegetable: null | string;
  quantityVegetable: null | string;
  user_id: string;
};
const ContentSelects = () => {
  const { dataUser } = useUserContext();
  const [message, setMessage] = useState("");
  let requestForApi: sendDataApi = {
    name: "",
    user_id: dataUser.id,
    protein: "",
    quantityProtein: "",
    carbohydrate: "",
    quantityCarbohydrate: "",
    vegetable: "",
    quantityVegetable: "",
  };

  const sendData = async () => {
    const oneTypeMealsIsTrue =
      (requestForApi.protein && requestForApi.protein != "") ||
      (requestForApi.carbohydrate && requestForApi.carbohydrate != "") ||
      (requestForApi.vegetable && requestForApi.vegetable != "");
    if (
      requestForApi.name &&
      requestForApi.user_id &&
      requestForApi.user_id != "" &&
      oneTypeMealsIsTrue
    ) {
      const result = await requestPostMeals(requestForApi);
      !result
        ? setMessage("Erro ao enviar os dados. Por favor verifique os campos")
        : setMessage("Dados enviados com sucesso");
    } else {
      setMessage(`Preencha nome e pelo menos um tipo `);
    }
  };

  const callbackMealsType = (option: optionSelectFood) => {
    if (option?.value && option?.value != "") {
      requestForApi = { ...requestForApi, name: option?.label };
    }
  };

  const callbackProteinSelected = (option: optionSelectFood) => {
    if (
      option?.value &&
      option?.value != "" &&
      option?.quantityFood &&
      option?.quantityFood != ""
    ) {
      requestForApi = {
        ...requestForApi,
        protein: option?.label,
        quantityProtein: option?.quantityFood,
      };
    }
  };

  const callbackCarbohydrateSelected = (option: optionSelectFood) => {
    if (
      option?.value &&
      option?.value != "" &&
      option?.quantityFood &&
      option?.quantityFood != ""
    ) {
      requestForApi = {
        ...requestForApi,
        carbohydrate: option?.label,
        quantityCarbohydrate: option?.quantityFood,
      };
    }
  };

  const callbackVegetableSelected = (option: optionSelectFood) => {
    if (
      option?.value &&
      option?.value != "" &&
      option?.quantityFood &&
      option?.quantityFood != ""
    ) {
      requestForApi = {
        ...requestForApi,
        vegetable: option?.label,
        quantityVegetable: option?.quantityFood,
      };
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("TOKEN_USER_ID");
    if (dataUser.id) {
      requestForApi = { ...requestForApi, user_id: dataUser.id };
    } else if (user) {
      requestForApi = { ...requestForApi, user_id: user };
    }
  }, []);

  useEffect(() => {
    console.log("");
  }, [message]);

  return (
    <S.Container>
      {message && <S.Error colorMessage={message}>{message}</S.Error>}
      <S.ContentSelects>
        <SelectComponent
          callbackSelectedItem={callbackMealsType}
          optionsValues={optionsMealTypes}
          defaultValue="Selecione o tipo da refeição"
          isQuantityFood={false}
        />
        <SelectComponent
          callbackSelectedItem={callbackProteinSelected}
          optionsValues={optionsProteins}
          defaultValue="Adicionar Proteína"
          isQuantityFood={true}
        />
        <SelectComponent
          callbackSelectedItem={callbackCarbohydrateSelected}
          optionsValues={optionsCarbohydrates}
          defaultValue="Adicionar Carboidrato"
          isQuantityFood={true}
        />
        <SelectComponent
          callbackSelectedItem={callbackVegetableSelected}
          optionsValues={optionsVegetables}
          defaultValue="Adicionar Verduras"
          isQuantityFood={true}
        />
      </S.ContentSelects>

      <S.ButtonSend onClick={sendData}>Enviar</S.ButtonSend>
    </S.Container>
  );
};

export default ContentSelects;
