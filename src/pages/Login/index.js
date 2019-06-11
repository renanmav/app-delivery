import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Types as AuthActions } from "~/store/ducks/auth";

import background from "~/assets/background.png";
import logo from "~/assets/logo.png";
import { colors } from "~/styles";

import { StatusBar } from "react-native";
import {
  Container,
  Input,
  Button,
  TextButton,
  CreateAccount,
  Background,
  Logo,
  ActivityIndicator,
  TextError
} from "./styles";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const { loading, error } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const { email, password } = credentials;

    dispatch({
      type: AuthActions.LOGIN_REQUEST,
      payload: { email, password }
    });
  };

  return (
    <Background source={background}>
      <Container>
        <StatusBar color={colors.primary} />
        <Logo source={logo} />
        <Input
          value={credentials.email}
          onChangeText={email => setCredentials({ ...credentials, email })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Seu e-mail"
          returnKeyType={"next"}
          onSubmitEditing={() => {
            this.secondTextInput.focus();
          }}
          blurOnSubmit={false}
        />
        <Input
          value={credentials.password}
          onChangeText={password =>
            setCredentials({ ...credentials, password })
          }
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Sua senha secreta"
          secureTextEntry
          ref={input => {
            this.secondTextInput = input;
          }}
          onSubmitEditing={handleSubmit}
        />
        <Button onPress={handleSubmit}>
          {loading ? <ActivityIndicator /> : <TextButton>Entrar</TextButton>}
        </Button>
        {error ? (
          <TextError>
            Algo deu errado! Verifique suas credenciais ou tente novamente mais
            tarde.
          </TextError>
        ) : null}
        <CreateAccount>
          <TextButton>Criar conta gratuita</TextButton>
        </CreateAccount>
      </Container>
    </Background>
  );
}
