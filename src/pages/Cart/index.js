import PropTypes from 'prop-types';

import React from 'react';
import { useSelector } from 'react-redux';

import { colors } from '~/styles';
import background from '~/assets/header-background.png';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StatusBar, ScrollView } from 'react-native';
import { TextMask } from 'react-native-masked-text';
import {
  Background,
  MenuTop,
  ButtonMenuBack,
  TextMenu,
  MenuTopWrapper,
  ButtonSendWrapper,
  ButtonSend,
  TextButtonSend,
} from './styles';

import ListItems from './list';

export default function Cart(props) {
  const { navigation } = props;

  const { total_price: totalPrice, items } = useSelector(state => state.cart);

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
            <TextMenu>Carrinho</TextMenu>
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
        <ListItems items={items} />
        {items.length ? (
          <ButtonSendWrapper>
            <ButtonSend onPress={() => navigation.navigate('Address')}>
              <TextButtonSend>Realizar pedido</TextButtonSend>
              <Icon name="chevron-right" color={colors.white} size={11} />
            </ButtonSend>
          </ButtonSendWrapper>
        ) : null}
      </ScrollView>
    </Background>
  );
}

Cart.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
