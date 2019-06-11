import React, { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ProductActions } from "~/store/ducks/product";

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
  Product,
  ProductFile,
  ProductName
} from "./styles";

import { colors, metrics } from "~/styles";

const { width } = Dimensions.get("window");

const ListProducts = ({ products }) => (
  <ContainerList>
    {products.map((product, index) => (
      <Product
        key={product.id}
        separator={index % 2 == 0 ? true : false}
        style={{
          minWidth: width / 2 - metrics.basePadding - metrics.baseMargin / 2
        }}
      >
        <ProductFile
          source={{ uri: `${api.baseURL}/files?id=${product.file_id}` }}
        />
        <ProductName>{product.name}</ProductName>
      </Product>
    ))}
  </ContainerList>
);

function Products(props) {
  useEffect(() => {
    const { navigation, indexRequest } = props;

    const type_id = navigation.getParam("type_id");

    indexRequest(type_id);
  }, []);

  handleGoBack = () => {
    props.navigation.goBack();
  };

  const { loading, products } = props.product;

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

        {loading ? <ActivityIndicator /> : <ListProducts products={products} />}
      </ScrollView>
    </Background>
  );
}

const mapStateToProps = state => ({
  product: state.product
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
