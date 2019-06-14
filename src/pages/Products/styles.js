import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const ContainerList = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Product = styled.TouchableOpacity`
  height: 200px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
  box-shadow: 5px 5px 5px ${colors.darkTransparent};
  padding: ${metrics.basePadding}px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: ${props => (props.separator ? metrics.baseMargin : '0')}px;
  margin-bottom: ${props => (props.separator ? metrics.baseMargin : '0')}px;
`;

export const ProductFile = styled.Image`
  width: 100%;
  min-height: 110px;
`;

export const ProductName = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.background};
  letter-spacing: 0px;
  margin-top: ${metrics.baseMargin};
`;
