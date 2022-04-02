import * as S from "./styles";
import { useRef, useState } from "react";

import InputsLogin from "components/globalComponents/InputsLogin";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useUserContext } from "hooks/userContext";
import { requestGetUser, requestPostResult } from "api/requestsApi";

const schema = Yup.object({
  user: Yup.string()
    .required("Por favor digite um nome de usuário")
    .min(3, "O nome deve ter mais de 3 letras"),
  password: Yup.string()
    .required("Por favor digite uma senha")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
}).required();

type FormData = {
  user: string;
  password: string;
};

const FormValidation = () => {
  const { verifyDataEquals } = useUserContext();
  const [errorUserName, setErrorUserName] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const formRef = useRef<HTMLFormElement>(null);

  const getUserBd = async ({ user, password }: FormData) => {
    try {
      const data: requestPostResult = await requestGetUser(user, password);

      data.errorMessage && setErrorPassword(data.errorMessage);
      data.user && verifyDataEquals(data.user);
    } catch (e) {
      setErrorUserName("Erro ao buscar usúario");
      console.log(e);
    }
  };

  const onSubmit = handleSubmit((user) => getUserBd(user));

  return (
    <S.Form onSubmit={onSubmit} ref={formRef}>
      <InputsLogin error={errors.user && errors.user.message}>
        <S.Inputs
          id="user"
          type="text"
          placeholder="Digite seu nome de usuário"
          {...register("user", {
            required: "Por favor digite seu nome de usuário",
          })}
        />
      </InputsLogin>
      {errorUserName && <S.Error>{errorUserName}</S.Error>}
      {}

      <div style={{ margin: "3rem 0" }} />

      <InputsLogin error={errors.password && errors.password.message}>
        <S.Inputs
          id="password"
          type="password"
          placeholder="Digite sua senha"
          {...register("password", {
            required: "Por favor digite sua senha",
          })}
        />
      </InputsLogin>
      {errorPassword && <S.Error>{errorPassword}</S.Error>}
      <S.Button type="submit" value="Enviar" />
    </S.Form>
  );
};

export default FormValidation;
