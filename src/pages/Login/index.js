import React, { Component } from "react";

import background from "~/assets/background.png";
import logo from "~/assets/logo.png";

import {
  Container,
  Input,
  Button,
  TextButton,
  CreateAccount,
  Background,
  Logo
} from "./styles";

export default class Login extends Component {
  state = { email: "", password: "" };

  handleSubmit = () => {
    const { email, password } = this.state;
  };

  render() {
    const { email, password } = this.state;

    return (
      <Background source={background}>
        <Container>
          <Logo source={logo} />
          <Input
            value={email}
            onChangeText={email => this.setState({ email })}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Seu e-mail"
          />
          <Input
            value={password}
            onChangeText={password => this.setState({ password })}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Sua senha secreta"
            secureTextEntry
          />
          <Button onPress={this.handleSubmit}>
            <TextButton>Entrar</TextButton>
          </Button>
          <CreateAccount>
            <TextButton>Criar conta gratuita</TextButton>
          </CreateAccount>
        </Container>
      </Background>
    );
  }
}
