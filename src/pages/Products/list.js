import PropTypes from 'prop-types';

import React from 'react';
import api from '~/config/api';

import { metrics } from '~/styles';

import { Dimensions } from 'react-native';
import {
  ContainerList, Product, ProductFile, ProductName,
} from './styles';

const { width } = Dimensions.get('window');

export default function ListProducts({ products, navigation }) {
  const handleProductClick = (productId) => {
    navigation.navigate('Sizes', {
      product_id: productId,
    });
  };
  return (
    <ContainerList>
      {products.map((product, index) => (
        <Product
          key={product.id}
          separator={index % 2 === 0}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            minWidth: width / 2 - metrics.basePadding - metrics.baseMargin / 2,
            elevation: 15, // for Android
          }}
          onPress={() => handleProductClick(product.id)}
        >
          <ProductFile source={{ uri: `${api.baseURL}/files?name=${product.file.file}` }} />
          <ProductName>{product.name}</ProductName>
        </Product>
      ))}
    </ContainerList>
  );
}

ListProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
