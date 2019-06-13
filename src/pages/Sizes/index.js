import PropTypes from 'prop-types';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Types as SizeActions } from '~/store/ducks/size';

import { colors } from '~/styles';
import background from '~/assets/header-background.png';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ScrollView, StatusBar, ActivityIndicator } from 'react-native';
import {
  Background, MenuTop, ButtonMenuBack, TextMenu,
} from './styles';

import ListSizes from './list';

export default function Sizes(props) {
  const { loading, sizes } = useSelector(state => state.size);

  const dispatch = useDispatch();

  useEffect(() => {
    const { navigation } = props;
    const productId = navigation.getParam('product_id');

    dispatch({
      type: SizeActions.INDEX_REQUEST,
      payload: { product_id: productId },
    });
  }, []);

  const handleGoBack = () => props.navigation.goBack();

  return (
    <Background source={background}>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />
      <ScrollView>
        <MenuTop>
          <ButtonMenuBack onPress={handleGoBack}>
            <Icon name="chevron-left" color={colors.light} size={11} />
          </ButtonMenuBack>
          <TextMenu>Selecione um tamanho</TextMenu>
        </MenuTop>
        {loading ? <ActivityIndicator color={colors.white} /> : <ListSizes sizes={sizes} />}
      </ScrollView>
    </Background>
  );
}

Sizes.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
