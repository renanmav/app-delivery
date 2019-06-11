import styled from "styled-components/native";

import { colors, metrics } from "~/styles";

export const Background = styled.ImageBackground`
  width: 100%;
  height: 50%;

  flex: 1;
`;

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;

  height: 100%;
`;

export const MenuTop = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: ${metrics.baseMargin * 2}px;
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
`;

export const ListType = styled.View`
  margin: ${metrics.baseMargin * 2}px;
  margin-top: 0;
`;

export const ImageType = styled.Image`
  height: 79px;
  width: 79px;
  margin-right: ${metrics.baseMargin}px;
`;

export const TextTypeName = styled.Text`
  font-size: 12px;
  color: ${colors.black};
  letter-spacing: 0px;
`;

export const TextTypeDescription = styled.Text`
  width: 190;
  font-size: 11px;
  color: ${colors.regular};
  line-height: 14px;
  letter-spacing: 0px;
  margin-top: 5px;
`;

export const WrapperTypeTime = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const TextTypeTime = styled.Text`
  color: ${colors.regular};
  font-size: 10px;
  letter-spacing: 0.46px;
  margin-left: 5px;
`;

export const Type = styled.TouchableOpacity`
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
