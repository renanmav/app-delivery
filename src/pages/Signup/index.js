import PropTypes from 'prop-types';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Types as AuthActions } from '~/store/ducks/auth';

import background from '~/assets/background.png';
import logo from '~/assets/logo.png';
import { colors } from '~/styles';

import { StatusBar } from 'react-native';
import {
  Container,
  Input,
  Button,
  TextButton,
  CreateAccount,
  Background,
  Logo,
  ActivityIndicator,
  TextError,
} from './styles';

export default function Signup({ navigation }) {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });

  const { loading, error, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const { name, email, password } = credentials;

    dispatch({
      type: AuthActions.SIGNUP_REQUEST,
      payload: { name, email, password },
    });
  };

  let secondTextInput = null;
  let thirdTextInput = null;

  return (
    <Background source={background}>
      <Container>
        <StatusBar color={colors.primary} />
        <Logo source={logo} />
        <Input
          value={credentials.name}
          onChangeText={name => setCredentials({ ...credentials, name })}
          autoCorrect={false}
          placeholder="Nome completo"
          returnKeyType="next"
          onSubmitEditing={() => {
            secondTextInput.focus();
          }}
          blurOnSubmit={false}
        />
        <Input
          value={credentials.email}
          onChangeText={email => setCredentials({ ...credentials, email })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Seu e-mail"
          returnKeyType="next"
          ref={(input) => {
            secondTextInput = input;
          }}
          onSubmitEditing={() => {
            thirdTextInput.focus();
          }}
          blurOnSubmit={false}
        />
        <Input
          value={credentials.password}
          onChangeText={password => setCredentials({ ...credentials, password })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Sua senha secreta"
          secureTextEntry
          ref={(input) => {
            thirdTextInput = input;
          }}
          onSubmitEditing={handleSubmit}
        />
        <Button onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator color={colors.white} />
          ) : (
            <TextButton>Criar conta</TextButton>
          )}
        </Button>
        {error ? <TextError>{errorMessage}</TextError> : null}
        <CreateAccount onPress={() => navigation.navigate('Login')}>
          <TextButton>Já tenho login</TextButton>
        </CreateAccount>
      </Container>
    </Background>
  );
}

Signup.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
