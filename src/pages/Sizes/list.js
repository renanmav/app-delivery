import PropTypes from 'prop-types';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Types as CartActions } from '~/store/ducks/cart';

import api from '~/config/api';

import { metrics } from '~/styles';

import { Dimensions } from 'react-native';
import { TextMask } from 'react-native-masked-text';
import {
  ContainerList, Size, SizeFile, SizeName, SizePrice,
} from './styles';

const { width } = Dimensions.get('window');

export default function ListSizes({ sizes }) {
  const { products } = useSelector(state => state.product);

  const dispatch = useDispatch();

  const handleSizeClick = (size) => {
    const product = products.filter(p => p.id === size.product_id)[0];

    dispatch({
      type: CartActions.ADD_ITEM,
      payload: {
        size_id: size.id,
        item: {
          product_name: product.name,
          size_name: size.name,
          price: size.price,
          file_id: product.file_id,
          file_name: product.file.file,
        },
      },
    });
  };

  return (
    <ContainerList>
      {sizes.map((size, index) => (
        <Size
          key={size.id}
          separator={index % 2 === 0}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            minWidth: width / 2 - metrics.basePadding - metrics.baseMargin / 2,
            elevation: 15, // for Android
          }}
          onPress={() => handleSizeClick(size)}
        >
          <SizeFile source={{ uri: `${api.baseURL}/files?name=${size.file.file}` }} />
          <SizeName>{size.name}</SizeName>
          <SizePrice>
            <TextMask
              value={size.price}
              type="money"
              options={{
                precision: 2,
                separator: ',',
                delimiter: '.',
                unit: 'R$',
                suffixUnit: '',
              }}
            />
          </SizePrice>
        </Size>
      ))}
    </ContainerList>
  );
}

ListSizes.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      file: PropTypes.shape({
        file: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};
