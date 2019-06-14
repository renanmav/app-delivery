import React from 'react';

import { colors } from '~/styles';

import { StatusBar } from 'react-native';
import { Background, Container } from '~/styles/general';
import Menu from '~/components/Menu';

export default function Orders() {
  return (
    <Background>
      <Container>
        <StatusBar backgroundColor={colors.background} barStyle="light-content" />
        <Menu type="simple" title="Meus pedidos" />
      </Container>
    </Background>
  );
}
