import PropTypes from 'prop-types';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Types as ProductActions } from '~/store/ducks/product';

import { colors } from '~/styles';

import { StatusBar, ActivityIndicator } from 'react-native';
import { Background, Container } from '~/styles/general';

import ListProducts from './list';
import Menu from '~/components/Menu';

export default function Products(props) {
  const { loading, products } = useSelector(state => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    const { navigation } = props;
    const typeId = navigation.getParam('type_id');

    dispatch({
      type: ProductActions.INDEX_REQUEST,
      payload: { type_id: typeId },
    });
  }, []);

  return (
    <Background>
      <Container>
        <StatusBar backgroundColor={colors.background} barStyle="light-content" />
        <Menu simple title="Selecione um tipo" />

        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <ListProducts products={products} />
        )}
      </Container>
    </Background>
  );
}

Products.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
