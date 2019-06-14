import PropTypes from 'prop-types';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Types as SizeActions } from '~/store/ducks/size';

import { colors } from '~/styles';

import { StatusBar, ActivityIndicator } from 'react-native';
import { Background, Container } from '~/styles/general';

import ListSizes from './list';
import Menu from '~/components/Menu';

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

  return (
    <Background>
      <Container>
        <StatusBar backgroundColor={colors.background} barStyle="light-content" />
        <Menu simple title="Selecione um tamanho" />

        {loading ? <ActivityIndicator color={colors.white} /> : <ListSizes sizes={sizes} />}
      </Container>
    </Background>
  );
}

Sizes.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
