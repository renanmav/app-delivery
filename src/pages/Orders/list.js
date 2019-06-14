import PropTypes from 'prop-types';

import React from 'react';

import { View } from 'react-native';
import { TextMask } from 'react-native-masked-text';
import {
  Order, TextOrderId, TextOrderTime, TextOrderPrice,
} from './styles';

export default function ListOrders({ orders }) {
  return (
    <>
      {orders.map(order => (
        // eslint-disable-next-line react-native/no-inline-styles
        <Order key={order.id} style={{ elevation: 15 }}>
          <View>
            <TextOrderId>{`Pedido #${order.id}`}</TextOrderId>
            <TextOrderTime>{order.created_at}</TextOrderTime>
            <TextOrderPrice>
              <TextMask
                value={order.total_price}
                type="money"
                options={{
                  precision: 2,
                  separator: ',',
                  delimiter: '.',
                  unit: 'R$',
                  suffixUnit: '',
                }}
              />
            </TextOrderPrice>
          </View>
        </Order>
      ))}
    </>
  );
}

ListOrders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      created_at: PropTypes.string.isRequired,
      total_price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
