import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Types as TypeActions } from '~/store/ducks/type';

import { colors } from '~/styles';

import { StatusBar, ActivityIndicator } from 'react-native';
import { Container, Background } from '~/styles/general';

import ListTypes from './list';
import Menu from '~/components/Menu';

export default function Types() {
  const { loading, types } = useSelector(state => state.type);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: TypeActions.INDEX_REQUEST,
    });
  }, []);

  return (
    <Background>
      <Container>
        <StatusBar backgroundColor={colors.background} barStyle="light-content" />
        <Menu type="home" />

        {loading ? <ActivityIndicator color={colors.white} /> : <ListTypes types={types} />}
      </Container>
    </Background>
  );
}
