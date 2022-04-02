import Api from "./Api";

export type MealsRequest = {
  id: string;
  name: string;
  protein: string | null;
  quantity_proteins: string | null;
  carbohydrate: string | null;
  quantity_carbohydrate: string | null;
  vegetable: string | null;
  quantity_vegetable: string | null;
  createdAt: string;
  user_id: string;
};

type createMealsProps = {
  name: string;
  protein: string | null;
  quantityProtein: string | null;
  carbohydrate: string | null;
  quantityCarbohydrate: string | null;
  vegetable: string | null;
  quantityVegetable: string | null;
  user_id: string;
};

export type createUserProps = {
  name: string;
  email: string;
  username: string;
  password: string;
};

type userResult = {
  id: string;
  name: string;
  username: string;
};

export type requestPostResult = {
  errorMessage?: string;
  user?: userResult;
};

export const requestGetUser = async (user: string, password: string) => {
  const { data } = await Api.get<requestPostResult>(
    `user-get/${user}/${password}`
  );

  return data;
};

export const requestGetMeals = async (id: string) => {
  const { data } = await Api.get<MealsRequest[]>(`meals-get/${id}`);

  return data;
};

export const requestPostMeals = async (meals: createMealsProps) => {
  try {
    await Api.post(`meals`, meals);

    return true;
  } catch (err) {
    return false;
  }
};

export const requestPostUser = async (user: createUserProps) => {
  try {
    const { data } = await Api.post<requestPostResult>(`user`, user);

    return data;
  } catch (err) {
    return { errorMessage: "Erro no Servidor" };
  }
};

export const requestDeleteMeals = async (id: string) => {
  try {
    const { data } = await Api.delete<string | Error>(`meals-del/${id}`);

    return data;
  } catch (err) {
    return { errorMessage: "Erro no Servidor" };
  }
};
