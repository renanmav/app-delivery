import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: ${metrics.basePadding * 1.5}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
})`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius};
  padding: 0 ${metrics.basePadding}px;
  height: 50px;
  font-size: 15px;
  color: ${colors.darker};

  margin-top: ${metrics.baseMargin}px;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: ${metrics.baseRadius};
  height: 50px;
  margin-top: ${metrics.baseMargin * 2}px;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  font-weight: bold;
`;

export const CreateAccount = styled.TouchableOpacity`
  margin-top: ${metrics.baseMargin * 2}px;

  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 72px;
  width: 72px;

  margin: 0 auto;

  margin-bottom: ${metrics.baseMargin * 2}px;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  color: colors.white,
})``;

export const TextError = styled.Text`
  color: ${colors.danger};
  font-size: 15px;
  font-weight: bold;
`;
