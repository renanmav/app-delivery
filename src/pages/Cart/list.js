import React from "react";
import { useDispatch } from "react-redux";
import { Types as CartActions } from "~/store/ducks/cart";

import api from "~/config/api";

import { colors } from "~/styles";
import Icon from "react-native-vector-icons/MaterialIcons";

import { View, TouchableOpacity } from "react-native";
import {
  ListItem,
  Item,
  ImageItem,
  TextItemName,
  TextItemSize,
  TextItemPrice
} from "./styles";

import { TextMask } from "react-native-masked-text";

export default function ListItems({ items }) {
  const dispatch = useDispatch();

  const handleDeleteItem = index => {
    dispatch({
      type: CartActions.REMOVE_ITEM,
      payload: { index }
    });
  };

  return (
    <ListItem>
      {items.map((item, index) => (
        <Item key={index} style={{ elevation: 15 }}>
          <ImageItem
            source={{
              uri: `${api.baseURL}/files?name=${item.file_name}`
            }}
          />
          <View style={{ flex: 1 }}>
            <TextItemName>{item.product_name}</TextItemName>
            <TextItemSize>Tamanho: {item.size_name}</TextItemSize>
            <TextItemPrice>
              <TextMask
                value={item.price}
                type={"money"}
                options={{
                  precision: 2,
                  separator: ",",
                  delimiter: ".",
                  unit: "R$",
                  suffixUnit: ""
                }}
              />
            </TextItemPrice>
          </View>
          <TouchableOpacity onPress={() => handleDeleteItem(index)}>
            <Icon name="delete-forever" color={colors.primary} size={20} />
          </TouchableOpacity>
        </Item>
      ))}
    </ListItem>
  );
}
