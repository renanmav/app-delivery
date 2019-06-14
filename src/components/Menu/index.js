import PropTypes from 'prop-types';

import React from 'react';
import { useSelector } from 'react-redux';

import { withNavigation } from 'react-navigation';

import { colors } from '~/styles';
import cartImage from '~/assets/cart.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity, Image } from 'react-native';
import {
  MenuTop, TextMenu, ButtonCart, HasItems, ButtonMenuBack, MenuTopWrapper,
} from './styles';

function Menu({
  navigation, title, type, children,
}) {
  const { items } = useSelector(state => state.cart);

  const handleGoBack = () => navigation.goBack();

  const renderProperMenu = (menuType) => {
    switch (menuType) {
      case 'home':
        return (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
              <Icon name="history" color={colors.white} size={24} />
            </TouchableOpacity>
            <TextMenu>Pizzaria Don Juan</TextMenu>
            <ButtonCart onPress={() => navigation.navigate('Cart')}>
              {items.length ? <HasItems /> : null}
              <Image source={cartImage} />
            </ButtonCart>
          </>
        );
      case 'money':
        return (
          <>
            <MenuTopWrapper>
              <ButtonMenuBack onPress={handleGoBack}>
                <Icon name="chevron-left" color={colors.light} size={11} />
              </ButtonMenuBack>
              <TextMenu>{title}</TextMenu>
            </MenuTopWrapper>
            <TextMenu>{children}</TextMenu>
          </>
        );
      default:
        return (
          <>
            <ButtonMenuBack onPress={handleGoBack}>
              <Icon name="chevron-left" color={colors.light} size={11} />
            </ButtonMenuBack>
            <TextMenu>{title}</TextMenu>
          </>
        );
    }
  };

  return <MenuTop simple={type === 'simple'}>{renderProperMenu(type)}</MenuTop>;
}

Menu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element,
};

Menu.defaultProps = {
  type: 'simple',
  title: '',
  children: null,
};

export default withNavigation(Menu);
