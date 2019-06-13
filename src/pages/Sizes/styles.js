import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Background = styled.ImageBackground`
  width: 100%;
  height: 50%;
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
  padding: ${metrics.basePadding}px;
`;

export const Size = styled.TouchableOpacity`
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

export const SizeFile = styled.Image`
  width: 90px;
  min-height: 90px;
`;

export const SizeName = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.background};
  letter-spacing: 0px;
  margin-top: ${metrics.baseMargin * 2};
`;

export const SizePrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.background};
  letter-spacing: 0px;
  margin-top: 3px;
  opacity: 0.6;
`;
