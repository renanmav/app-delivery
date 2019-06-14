import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import { metrics } from '~/styles';
import background from '~/assets/header-background.png';

const { width, height } = Dimensions.get('window');

export const Background = styled.ImageBackground.attrs({
  source: background,
})`
  position: absolute;
  width: ${width}px;
  height: ${height}px;
`;

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: ${metrics.basePadding}px;
`;

export const ListWrapper = styled.ScrollView`
  margin: 0 ${-metrics.baseMargin * 2}px;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
`;
