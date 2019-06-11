import React, { useEffect } from "react";

import {
  ScrollView,
  StatusBar,
  Dimensions,
  ActivityIndicator
} from "react-native";

import background from "~/assets/header-background.png";

import Icon from "react-native-vector-icons/FontAwesome";
import api from "~/config/api";

import {
  Background,
  MenuTop,
  ButtonMenuBack,
  TextMenu,
  ContainerList,
  Size,
  SizeFile,
  SizeName,
  SizePrice
} from "./styles";

import { colors, metrics } from "~/styles";

const { width } = Dimensions.get("window");

const ListSizes = ({ sizes }) => (
  <ContainerList>
    {sizes.map((size, index) => (
      <Size
        key={size.id}
        separator={index % 2 == 0 ? true : false}
        style={{
          minWidth: width / 2 - metrics.basePadding - metrics.baseMargin / 2
        }}
      >
        <SizeFile
          source={{ uri: `${api.baseURL}/files?name=${size.file.file}` }}
        />
        <SizeName>{size.name}</SizeName>
        <SizePrice>{size.price}</SizePrice>
      </Size>
    ))}
  </ContainerList>
);

function Sizes(props) {
  useEffect(() => {
    const { navigation } = props;

    //const product_id = navigation.getParam("product_id");
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
          <TextMenu>Selecione um tamanho</TextMenu>
        </MenuTop>

        <ListSizes
          sizes={[
            {
              name: "PP",
              price: 32.5,
              file_id: 4,
              id: 1,
              file: {
                file: "1559968277532.png"
              }
            },
            {
              name: "PP",
              price: 32.5,
              file_id: 4,
              id: 1,
              file: {
                file: "1559968277532.png"
              }
            }
          ]}
        />
      </ScrollView>
    </Background>
  );
}

export default Sizes;
