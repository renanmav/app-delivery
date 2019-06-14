import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const MenuTop = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ simple }) => (simple === true ? 'flex-start' : 'space-between')};
  margin-bottom: ${metrics.baseMargin * 3}px;
  height: 35px;
`;

export const MenuTopWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextMenu = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  letter-spacing: 0;
  font-weight: bold;
`;

export const ButtonCart = styled.TouchableOpacity`
  background: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  position: relative;
`;

export const HasItems = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background: ${colors.secondary};
  position: absolute;
  top: 0;
  right: 0;
`;

export const ButtonMenuBack = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${metrics.baseMargin}px;
`;
