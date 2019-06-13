import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import { colors, metrics } from '~/styles';

const d = Dimensions.get('window');

export const Background = styled.ImageBackground`
  position: absolute;
  width: ${d.width}px;
  height: ${d.height}px;
  flex: 1;
`;

export const MenuTop = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: ${metrics.baseMargin * 2}px;
`;

export const ButtonMenuBack = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${metrics.baseMargin}px;
`;

export const TextMenu = styled.Text`
  font-size: 18px;
  letter-spacing: 0px;
  color: ${colors.white};
  font-weight: bold;
`;

export const ContainerList = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: ${metrics.baseMargin * 2}px;
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
