import React from "react";

import { Image, TouchableOpacity, StatusBar, Text, View } from "react-native";

import cartImage from "~/assets/cart.png";
import headerBackground from "~/assets/header-background.png";
import foto from "~/assets/foto.png";

import Icon from "react-native-vector-icons/MaterialIcons";

import {
  Container,
  MenuTop,
  TextMenu,
  ButtonCart,
  Background,
  Type,
  ImageType,
  ListType,
  TextTypeName,
  TextTypeDescription,
  WrapperTypeTime,
  TextTypeTime
} from "./styles";

import { colors } from "~/styles";

const TypesList = () => (
  <ListType>
    <Type>
      <ImageType source={foto} />
      <View>
        <TextTypeName>Massas</TextTypeName>
        <TextTypeDescription>
          10 tipos de massas com diferentes molhos para te satisfazer.
        </TextTypeDescription>
        <WrapperTypeTime>
          <Icon name="alarm" color={colors.light} size={14} />
          <TextTypeTime>30 mins</TextTypeTime>
        </WrapperTypeTime>
      </View>
    </Type>
  </ListType>
);

const Types = () => (
  <Background source={headerBackground} style={{ height: "30%" }}>
    <Container>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />
      <MenuTop>
        <TouchableOpacity>
          <Icon name="history" color={colors.white} size={24} />
        </TouchableOpacity>
        <TextMenu>Pizzaria Don Juan</TextMenu>
        <ButtonCart>
          <Image source={cartImage} />
        </ButtonCart>
      </MenuTop>

      <TypesList />
    </Container>
  </Background>
);

export default Types;
