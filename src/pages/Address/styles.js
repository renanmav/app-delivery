import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

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

export const ButtonNextWrapper = styled.View`
  margin-top: ${metrics.baseMargin}px;

  display: flex;
  align-items: flex-end;
`;

export const ButtonNext = styled.TouchableOpacity`
  background: ${({ disabled }) => (disabled ? colors.darkTransparent : colors.primary)};
  height: 35px;
  width: 150px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TextButtonNext = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  letter-spacing: 0px;
  text-transform: uppercase;
  margin-right: ${metrics.baseMargin}px;
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
