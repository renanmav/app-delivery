/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-return-assign */
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useDebounce } from 'use-debounce';
import api from '~/services/cepApi';

import { colors, metrics } from '~/styles';
import background from '~/assets/header-background.png';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StatusBar, ScrollView, Dimensions, View,
} from 'react-native';
import { TextMask, TextInputMask } from 'react-native-masked-text';
import {
  Background,
  MenuTop,
  ButtonMenuBack,
  TextMenu,
  MenuTopWrapper,
  Inputs,
  Input,
  ButtonNextWrapper,
  ButtonNext,
  TextButtonNext,
  styles,
} from './styles';

const { width: w } = Dimensions.get('window');

export default function Address({ navigation }) {
  const [observation, setObservation] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');

  const [cepDebounce] = useDebounce(cep, 1000);

  async function fetchCep() {
    if (cep !== '') {
      try {
        const { data } = await api.get(`/${cep}/json/`);

        if (data) {
          setStreet(data.logradouro);
          setDistrict(data.bairro);
        }
      } catch (err) {
        console.tron.log(err);
      }
    }
  }

  useEffect(() => {
    fetchCep();
  }, [cepDebounce]);

  const { total_price: totalPrice } = useSelector(state => state.cart);

  const handleGoBack = () => navigation.goBack();

  const disableButtonNext = !(street.length && number.length && district.length);

  const inputs = {
    first: null,
    second: null,
    third: null,
    fourth: null,
    fifth: null,
  };

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
            value={observation}
            height={120}
            onChangeText={obs => setObservation(obs)}
            multiline
            ref={first => (inputs.first = first)}
            onSubmitEditing={() => inputs.second.focus()}
            blurOnSubmit={false}
          />
          <TextInputMask
            type="zip-code"
            placeholder="Qual seu CEP?"
            value={cep}
            style={styles.cep}
            onChangeText={c => setCep(c)}
            ref={second => (inputs.second = second)}
            onSubmitEditing={() => inputs.third.focus()}
            blurOnSubmit={false}
          />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Input
              placeholder="Rua"
              value={street}
              onChangeText={strt => setStreet(strt)}
              style={{ flex: 1, marginRight: metrics.baseMargin }}
              ref={third => (inputs.third = third)}
              onSubmitEditing={() => inputs.fourth.focus()}
              blurOnSubmit={false}
            />
            <Input
              placeholder="Nº"
              value={number}
              onChangeText={n => setNumber(n)}
              style={{ width: w / 3 }}
              ref={fourth => (inputs.fourth = fourth)}
              onSubmitEditing={() => inputs.fifth.focus()}
              blurOnSubmit={false}
              keyboardType="number-pad"
            />
          </View>
          <Input
            placeholder="Bairro"
            value={district}
            onChangeText={d => setDistrict(d)}
            ref={fifth => (inputs.fifth = fifth)}
          />
        </Inputs>

        <ButtonNextWrapper>
          <ButtonNext disabled={disableButtonNext}>
            <TextButtonNext>Finalizar</TextButtonNext>
            <Icon name="chevron-right" color={colors.white} size={11} />
          </ButtonNext>
        </ButtonNextWrapper>
      </ScrollView>
    </Background>
  );
}

Address.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
