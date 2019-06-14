import PropTypes from 'prop-types';

import React from 'react';
import { useSelector } from 'react-redux';

import { colors } from '~/styles';
import background from '~/assets/header-background.png';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StatusBar } from 'react-native';
import { TextMask } from 'react-native-masked-text';

import { ButtonNextWrapper, ButtonNext, TextButtonNext } from './styles';
import { Background, Container } from '~/styles/general';

import ListItems from './list';
import Menu from '~/components/Menu';

export default function Cart(props) {
  const { navigation } = props;

  const { total_price: totalPrice, items } = useSelector(state => state.cart);

  return (
    <Background source={background}>
      <Container>
        <StatusBar backgroundColor={colors.background} barStyle="light-content" />

        <Menu type="money" title="Carrinho">
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
        <ListItems items={items} />
        {items.length ? (
          <ButtonNextWrapper>
            <ButtonNext onPress={() => navigation.navigate('Address')}>
              <TextButtonNext>Realizar pedido</TextButtonNext>
              <Icon name="chevron-right" color={colors.white} size={11} />
            </ButtonNext>
          </ButtonNextWrapper>
        ) : null}
      </Container>
    </Background>
  );
}

Cart.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
