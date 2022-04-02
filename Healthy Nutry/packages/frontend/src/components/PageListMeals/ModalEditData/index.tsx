import { requestDeleteMeals } from "api/requestsApi";
import { useRouter } from "next/router";
import * as S from "./styles";
type deleteMealsProps = {
  id: string;
  attPageInDeleteMeals: () => void;
};

const ModalEditData = ({ id, attPageInDeleteMeals }: deleteMealsProps) => {
  const router = useRouter();
  const editDataMeals = () => {
    console.log("Editar no BackEnd os Dados");
  };
  const deleteDataMeals = async () => {
    if (id) {
      const data = await requestDeleteMeals(id);

      if (data instanceof Error) {
        return;
      } else {
        router.reload();
      }
    }
  };
  return (
    <S.Container>
      <S.ButtonEdit onClick={editDataMeals}>Editar</S.ButtonEdit>
      <S.ButtonDelete onClick={deleteDataMeals}>Deletar</S.ButtonDelete>
    </S.Container>
  );
};

export default ModalEditData;
