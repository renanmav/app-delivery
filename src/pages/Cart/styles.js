import styled from "styled-components/native";

import { colors, metrics } from "~/styles";

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
