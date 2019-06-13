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
  justify-content: space-between;
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

export const MenuTopWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ListItem = styled.View`
  margin: ${metrics.baseMargin * 2}px;
  margin-top: 20px;
`;

export const ImageItem = styled.Image`
  height: 79px;
  width: 79px;
  margin-right: ${metrics.baseMargin}px;
`;

export const TextItemName = styled.Text`
  font-size: 12px;
  color: ${colors.black};
  letter-spacing: 0px;
`;

export const TextItemSize = styled.Text`
  font-size: 11px;
  color: ${colors.regular};
  line-height: 14px;
  letter-spacing: 0px;
  margin-top: 5px;
`;

export const TextItemPrice = styled.Text`
  font-size: 16px;
  letter-spacing: 0px;
  color: ${colors.background};
  font-weight: bold;
  margin-top: 5px;
`;

export const WrapperItemTime = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const TextItemTime = styled.Text`
  color: ${colors.regular};
  font-size: 10px;
  letter-spacing: 0.46px;
  margin-left: 5px;
`;

export const Item = styled.View`
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

export const ButtonSendWrapper = styled.View`
  padding: 0px ${metrics.basePadding}px;
  display: flex;
  align-items: flex-end;
`;

export const ButtonSend = styled.TouchableOpacity`
  background: ${colors.primary};
  height: 35px;
  width: 180px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TextButtonSend = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  letter-spacing: 0px;
  text-transform: uppercase;
  margin-right: ${metrics.baseMargin}px;
`;
