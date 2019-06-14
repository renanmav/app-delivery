import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Types as OrderActions } from '~/store/ducks/order';

import { colors } from '~/styles';

import { StatusBar, ActivityIndicator } from 'react-native';
import { Background, Container } from '~/styles/general';

import Menu from '~/components/Menu';
import ListOrders from './list';

export default function Orders() {
  const { orders, loading } = useSelector(state => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: OrderActions.INDEX_REQUEST,
    });
  }, []);

  return (
    <Background>
      <Container>
        <StatusBar backgroundColor={colors.background} barStyle="light-content" />
        <Menu type="simple" title="Meus pedidos" />

        {loading ? <ActivityIndicator color={colors.white} /> : <ListOrders orders={orders} />}
      </Container>
    </Background>
  );
}
