import Logo from "components/globalComponents/Logo";
import FormValidateRegister from "../FormValidateRegister";
import * as S from "./styles";

const MainRegister = () => (
  <S.Container>
    <Logo />
    <FormValidateRegister />
    <S.GoToLoginScreen href="/" passHref>
      <S.Redirect>Faça Login</S.Redirect>
    </S.GoToLoginScreen>
  </S.Container>
);

export default MainRegister;
