import styled from 'styled-components/native';

import { Dimensions, StyleSheet } from 'react-native';

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

export const Inputs = styled.View`
  margin: ${metrics.baseMargin * 2}px;
  margin-top: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
})`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius};
  padding: ${({ height }) => (!height ? `0 ${metrics.basePadding}` : metrics.basePadding)}px;
  height: ${({ height }) => height || '50'}px;
  font-size: 15px;
  color: ${colors.darker};
  margin-bottom: ${metrics.baseMargin}px;
  text-align: left;
  text-align-vertical: ${({ height }) => (height ? 'top' : 'auto')};

  elevation: 15;
  box-shadow: 5px 5px 5px ${colors.darkTransparent};
`;

export const styles = StyleSheet.create({
  cep: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    color: colors.darker,
    elevation: 15,
    fontSize: 15,
    height: 50,
    marginBottom: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
    shadowColor: colors.darkTransparent,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
  },
});
