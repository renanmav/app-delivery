import PropTypes from 'prop-types';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Types as TypeActions } from '~/store/ducks/type';

import cartImage from '~/assets/cart.png';
import background from '~/assets/header-background.png';
import { colors } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Image, TouchableOpacity, StatusBar, ActivityIndicator,
} from 'react-native';
import {
  Container, MenuTop, TextMenu, ButtonCart, Background,
} from './styles';

import ListTypes from './list';

export default function Types(props) {
  const { navigation } = props;

  const { loading, types } = useSelector(state => state.type);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: TypeActions.INDEX_REQUEST,
    });
  }, []);

  const handleCartClick = () => {
    navigation.navigate('Cart');
  };

  return (
    <Background source={background}>
      <Container>
        <StatusBar backgroundColor={colors.background} barStyle="light-content" />
        <MenuTop>
          <TouchableOpacity>
            <Icon name="history" color={colors.white} size={24} />
          </TouchableOpacity>
          <TextMenu>Pizzaria Don Juan</TextMenu>
          <ButtonCart onPress={handleCartClick}>
            <Image source={cartImage} />
          </ButtonCart>
        </MenuTop>
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <ListTypes types={types} navigation={navigation} />
        )}
      </Container>
    </Background>
  );
}

Types.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
