import Logo from "components/globalComponents/Logo";
import { ContentLogo } from "components/PageListMeals/MainListMeals/styles";
import ContentSelects from "../ContentSelects";
import * as S from "./styles";

const MainAddNewMeals = () => {
  return (
    <S.Container>
      <ContentLogo>
        <Logo />
        <S.ReturnToListMeals href="/listMeals" passHref>
          <S.Redirect>
            <S.IconGoToBack />
            Voltar a Lista de Refeições
          </S.Redirect>
        </S.ReturnToListMeals>
      </ContentLogo>
      <S.Divider />
      <ContentSelects />
    </S.Container>
  );
};

export default MainAddNewMeals;
