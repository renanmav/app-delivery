import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const TextOrderId = styled.Text`
  font-size: 12px;
  color: ${colors.background};
  letter-spacing: 0px;
`;

export const TextOrderTime = styled.Text`
  font-size: 11px;
  color: ${colors.regular};
  line-height: 14px;
  letter-spacing: 0px;
  margin-top: 5px;
`;

export const TextOrderPrice = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  color: ${colors.background};
  letter-spacing: 0;
  font-weight: bold;
`;

export const Order = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding}px;
  height: 110px;
  margin-bottom: ${metrics.baseMargin}px;
  box-shadow: 5px 5px 5px ${colors.darkTransparent};
`;
