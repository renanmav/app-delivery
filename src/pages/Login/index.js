import React, { Component } from "react";

import { StatusBar } from "react-native";

import background from "~/assets/background.png";
import logo from "~/assets/logo.png";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AuthActions } from "~/store/ducks/auth";

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

import { colors } from "~/styles";

class Login extends Component {
  state = { email: "", password: "" };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { loginRequest } = this.props;
    loginRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { loading, error } = this.props.auth;

    return (
      <Background source={background}>
        <Container>
          <StatusBar color={colors.primary} />
          <Logo source={logo} />
          <Input
            value={email}
            onChangeText={email => this.setState({ email })}
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
            value={password}
            onChangeText={password => this.setState({ password })}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Sua senha secreta"
            secureTextEntry
            ref={input => {
              this.secondTextInput = input;
            }}
            onSubmitEditing={this.handleSubmit}
          />
          <Button onPress={this.handleSubmit}>
            {loading ? <ActivityIndicator /> : <TextButton>Entrar</TextButton>}
          </Button>
          {error ? (
            <TextError>
              Algo deu errado! Verifique suas credenciais ou tente novamente
              mais tarde.
            </TextError>
          ) : null}
          <CreateAccount>
            <TextButton>Criar conta gratuita</TextButton>
          </CreateAccount>
        </Container>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
