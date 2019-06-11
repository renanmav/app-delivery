import React from "react";

import api from "~/config/api";

import { metrics } from "~/styles";

import { Dimensions } from "react-native";
import { ContainerList, Product, ProductFile, ProductName } from "./styles";

const { width } = Dimensions.get("window");

const handleProductClick = (product_id, navigation) => {
  navigation.navigate("Sizes", {
    product_id
  });
};

const ListProducts = ({ products, navigation }) => (
  <ContainerList>
    {products.map((product, index) => (
      <Product
        key={product.id}
        separator={index % 2 == 0 ? true : false}
        style={{
          minWidth: width / 2 - metrics.basePadding - metrics.baseMargin / 2
        }}
        onPress={() => handleProductClick(product.id, navigation)}
      >
        <ProductFile
          source={{ uri: `${api.baseURL}/files?name=${product.file.file}` }}
        />
        <ProductName>{product.name}</ProductName>
      </Product>
    ))}
  </ContainerList>
);

export default ListProducts;
