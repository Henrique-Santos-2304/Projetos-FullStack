import * as S from "./styles";

import Select, { SingleValue } from "react-select";
import { useEffect, useState } from "react";

import { optionSelectFood } from "../ContentSelects";

type selectedItemProps = {
  callbackSelectedItem: (option: optionSelectFood) => void;
  optionsValues: optionProps[];
  defaultValue: string;
  isQuantityFood: boolean;
};

export type optionProps = {
  value: string;
  label: string;
};
const SelectComponent = ({
  callbackSelectedItem,
  optionsValues,
  defaultValue,
  isQuantityFood,
}: selectedItemProps) => {
  const [valueSelected, setValueSelected] = useState<
    SingleValue<optionProps | null>
  >({
    value: "",
    label: defaultValue,
  });

  const [optionSelecteds, setOptionSelected] = useState({} as optionSelectFood);
  const [quantityFood, setQuantityFood] = useState("");

  const handleSelectedItem = (selectOption: SingleValue<optionProps>) => {
    setValueSelected(selectOption);
  };

  useEffect(() => {
    if (valueSelected && quantityFood) {
      setOptionSelected({
        value: valueSelected.value,
        label: valueSelected.label,
        quantityFood: quantityFood,
      });
    } else if (valueSelected) {
      setOptionSelected({
        value: valueSelected.value,
        label: valueSelected.label,
        quantityFood: "",
      });
    }
  }, [valueSelected, quantityFood]);

  useEffect(() => {
    optionSelecteds && callbackSelectedItem(optionSelecteds);
  }, [optionSelecteds]);

  return (
    <S.Container>
      <Select
        options={optionsValues}
        value={valueSelected}
        onChange={handleSelectedItem}
      />
      {isQuantityFood && (
        <S.ContentInput>
          <S.TextQuantity>Quantidade: </S.TextQuantity>
          <S.QuantityFood
            id="quantityFood"
            type="number"
            placeholder={quantityFood}
            onChange={(e) => setQuantityFood(e.target.value)}
          />
          <S.Textg>g</S.Textg>
        </S.ContentInput>
      )}
    </S.Container>
  );
};

export default SelectComponent;
