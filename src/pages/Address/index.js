/* eslint-disable no-return-assign */
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';

import { colors } from '~/styles';
import background from '~/assets/header-background.png';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StatusBar, ScrollView } from 'react-native';
import { TextMask, TextInputMask } from 'react-native-masked-text';
import {
  Background,
  MenuTop,
  ButtonMenuBack,
  TextMenu,
  MenuTopWrapper,
  Inputs,
  Input,
  styles,
} from './styles';

export default function Address({ navigation }) {
  const [address, setAddress] = useState({
    observations: '',
    cep: '',
    street: '',
    number: '',
    district: '',
  });

  useEffect(() => {
    if (address.cep !== '') axios.get(`https://viacep.com.br/ws/${address.cep}/json/`);
  }, [address.cep]);

  const { total_price: totalPrice } = useSelector(state => state.cart);

  const handleGoBack = () => navigation.goBack();

  return (
    <Background source={background}>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />
      <ScrollView>
        <MenuTop>
          <MenuTopWrapper>
            <ButtonMenuBack onPress={handleGoBack}>
              <Icon name="chevron-left" color={colors.light} size={11} />
            </ButtonMenuBack>
            <TextMenu>Realizar pedido</TextMenu>
          </MenuTopWrapper>
          <TextMenu>
            <TextMask
              value={totalPrice}
              type="money"
              options={{
                precision: 2,
                separator: ',',
                delimiter: '.',
                unit: 'R$',
                suffixUnit: '',
              }}
            />
          </TextMenu>
        </MenuTop>
        <Inputs>
          <Input
            placeholder="Alguma observação?"
            value={address.observations}
            height={120}
            onChangeText={observations => setAddress({ observations })}
            multiline
          />
          <TextInputMask
            type="zip-code"
            placeholder="Qual seu CEP?"
            value={address.cep}
            style={styles.cep}
            onChangeText={cep => setAddress({ cep })}
          />
          <Input
            placeholder="Rua"
            value={address.street}
            onChangeText={street => setAddress({ street })}
          />
        </Inputs>
      </ScrollView>
    </Background>
  );
}

Address.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
