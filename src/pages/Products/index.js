import React, { useEffect } from "react";

import { ScrollView, StatusBar, Dimensions } from "react-native";

import background from "~/assets/header-background.png";

import Icon from "react-native-vector-icons/FontAwesome";

import {
  Background,
  MenuTop,
  ButtonMenuBack,
  TextMenu,
  ContainerList,
  Product,
  ProductFile,
  ProductName
} from "./styles";

import { colors, metrics } from "~/styles";

const { width } = Dimensions.get("window");

function Products(props) {
  useEffect(() => {
    const { navigation } = props;
    console.tron.log(navigation.getParam("type_id"));
  }, []);

  handleGoBack = () => {
    props.navigation.goBack();
  };

  return (
    <Background source={background}>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />
      <ScrollView>
        <MenuTop>
          <ButtonMenuBack onPress={this.handleGoBack}>
            <Icon name="chevron-left" color={colors.light} size={11} />
          </ButtonMenuBack>
          <TextMenu>Selecione um tipo</TextMenu>
        </MenuTop>

        <ListProducts />
      </ScrollView>
    </Background>
  );
}

const ListProducts = () => (
  <ContainerList>
    <Product
      separator={true}
      style={{
        minWidth: width / 2 - metrics.basePadding - metrics.baseMargin / 2
      }}
    />
    <Product
      style={{
        minWidth: width / 2 - metrics.basePadding - metrics.baseMargin / 2
      }}
    >
      <ProductFile />
      <ProductName>Portuguesa</ProductName>
    </Product>
    <Product
      separator={true}
      style={{
        minWidth: width / 2 - metrics.basePadding - metrics.baseMargin / 2
      }}
    />
    <Product
      style={{
        minWidth: width / 2 - metrics.basePadding - metrics.baseMargin / 2
      }}
    />
  </ContainerList>
);

export default Products;
