import FormValidation from "components/PageLogin/FormValidation";
import Logo from "components/globalComponents/Logo";
import * as S from "./styles";

const Main = () => {
  return (
    <S.Wrapper>
      <Logo />
      <FormValidation />
      <S.RegisterNow href="/registerUser" passHref>
        <S.Redirect>Cadastre-se</S.Redirect>
      </S.RegisterNow>
    </S.Wrapper>
  );
};

export default Main;
