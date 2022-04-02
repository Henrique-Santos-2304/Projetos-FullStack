import React, { useEffect, useState } from "react";

import MainListMeals from "components/PageListMeals/MainListMeals";
import { useUserContext } from "hooks/userContext";
import { MealsRequest, requestGetMeals } from "api/requestsApi";

const ListMeals = () => {
  const { dataUser } = useUserContext();
  const [meals, setMeals] = useState([] as MealsRequest[]);

  const getSaveDataMeals = async (id: string | null) => {
    if (dataUser.id) {
      const data = await requestGetMeals(dataUser.id);
      console.log("tem dataUser " + dataUser);

      setMeals(data);
    } else if (id) {
      const data = await requestGetMeals(id);
      console.log("Não tem dataUser mas tem id cache  " + id);
      setMeals(data);
      console.log(meals);
    } else {
      return;
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("TOKEN_USER_ID");

    getSaveDataMeals(user);
  }, []);

  useEffect(() => {
    console.log("");
  }, [meals]);
  return (
    <>
      <MainListMeals meals={meals} />
    </>
  );
};

export default ListMeals;
