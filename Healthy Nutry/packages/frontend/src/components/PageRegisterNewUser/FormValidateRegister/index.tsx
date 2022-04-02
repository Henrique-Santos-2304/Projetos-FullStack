import InputsLogin from "components/globalComponents/InputsLogin";
import * as S from "./styles";
import { useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  createUserProps,
  requestPostResult,
  requestPostUser,
} from "api/requestsApi";
import { useRouter } from "next/router";

const schema = Yup.object({
  name: Yup.string()
    .required("Por favor digite um nome de usuário")
    .min(3, "O nome deve ter mais de 3 letras"),
  username: Yup.string()
    .required("Por favor digite um nome de usuário")
    .min(1, "O nome deve ter mais de 1 letras"),
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Por favor digite seu e-mail"),
  password: Yup.string()
    .required("Por favor digite uma senha")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: Yup.string()
    .required("A confirmação da senha é obrigatória")
    .oneOf([Yup.ref("password")], "As senhas devem corresponder"),
}).required();

type FormData = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const FormValidateRegister = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const redirectLoginScreen = () => {
    setMessage("Dados salvos com sucesso. Redirecionando...");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const requestNewUser = async (user: createUserProps) => {
    const result: requestPostResult = await requestPostUser(user);
    result.errorMessage && setMessage(result.errorMessage);
    result.user && redirectLoginScreen();
  };

  const onSubmit = handleSubmit((data) => {
    if (data.name && data.email && data.password && data.confirmPassword) {
      requestNewUser({
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
      });
    }
    reset();
  });

  return (
    <>
      {message && <S.Message>{message}</S.Message>}
      <S.Form onSubmit={onSubmit} ref={formRef}>
        <InputsLogin error={errors.name && errors.name.message}>
          <S.Inputs
            id="name"
            type="text"
            placeholder="Digite seu nome "
            {...register("name")}
          />
        </InputsLogin>

        <div style={{ margin: "3rem 0" }} />

        <InputsLogin error={errors.username && errors.username.message}>
          <S.Inputs
            id="username"
            type="text"
            placeholder="Digite seu nome de usuário"
            {...register("username")}
          />
        </InputsLogin>

        <div style={{ margin: "3rem 0" }} />

        <InputsLogin error={errors.email && errors.email.message}>
          <S.Inputs
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
        </InputsLogin>

        <div style={{ margin: "3rem 0" }} />

        <InputsLogin error={errors.password && errors.password.message}>
          <S.Inputs
            id="password"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
        </InputsLogin>

        <div style={{ margin: "3rem 0" }} />

        <InputsLogin
          error={errors.confirmPassword && errors.confirmPassword.message}
        >
          <S.Inputs
            id="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
        </InputsLogin>

        <S.Button type="submit" value="Enviar" />
      </S.Form>
    </>
  );
};

export default FormValidateRegister;
