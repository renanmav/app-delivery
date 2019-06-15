/* eslint-disable no-console */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-return-assign */
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Types as CartActions } from '~/store/ducks/cart';

import { useDebounce } from 'use-debounce';
import api from '~/services/cepApi';

import { colors, metrics } from '~/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StatusBar, Dimensions, View, ActivityIndicator,
} from 'react-native';
import { TextMask, TextInputMask } from 'react-native-masked-text';
import {
  Input,
  ButtonNextWrapper,
  ButtonNext,
  TextButtonNext,
  styles,
} from './styles';

import { Background, Container } from '~/styles/general';
import Menu from '~/components/Menu';

const { width: w } = Dimensions.get('window');

export default function Address() {
  const [observation, setObservation] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');

  const dispatch = useDispatch();

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

  const { total_price: totalPrice, loading } = useSelector(state => state.cart);
  const handleMakeOrder = () => dispatch({
    type: CartActions.ORDER_REQUEST,
    payload: {
      cep,
      street,
      number,
      district,
      observation,
    },
  });

  const disableButtonNext = !(street.length && number.length && district.length);

  const inputs = {
    first: null,
    second: null,
    third: null,
    fourth: null,
    fifth: null,
  };

  return (
    <Background>
      <Container>
        <StatusBar backgroundColor={colors.background} barStyle="light-content" />
        <Menu type="money" title="Realizar pedido">
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
        </Menu>

        <>
          <Input
            placeholder="Alguma observação?"
            value={observation}
            height={120}
            onChangeText={obs => setObservation(obs)}
            multiline
            ref={first => (inputs.first = first)}
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
            onSubmitEditing={handleMakeOrder}
          />
        </>

        <ButtonNextWrapper>
          <ButtonNext disabled={disableButtonNext} onPress={handleMakeOrder}>
            {loading ? (
              <ActivityIndicator color={colors.white} />
            ) : (
              <>
                <TextButtonNext>Finalizar</TextButtonNext>
                <Icon name="chevron-right" color={colors.white} size={11} />
              </>
            )}
          </ButtonNext>
        </ButtonNextWrapper>
      </Container>
    </Background>
  );
}

Address.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
