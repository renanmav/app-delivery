import React from "react";
import api from "~/config/api";

import { colors } from "~/styles";
import Icon from "react-native-vector-icons/MaterialIcons";

import { View } from "react-native";
import {
  Type,
  ImageType,
  ListType,
  TextTypeName,
  TextTypeDescription,
  WrapperTypeTime,
  TextTypeTime
} from "./styles";

const handleTypeClick = (type_id, navigation) => {
  navigation.navigate("Products", {
    type_id
  });
};

const TypesList = ({ types, navigation }) => (
  <ListType>
    {types.map(type => (
      <Type
        key={type.id}
        onPress={() => handleTypeClick(type.id, navigation)}
        style={{ elevation: 15 }}
      >
        <ImageType
          source={{
            uri: `${api.baseURL}/files?name=${type.file.file}`
          }}
        />
        <View>
          <TextTypeName>{type.name}</TextTypeName>
          <TextTypeDescription>{type.description}</TextTypeDescription>
          <WrapperTypeTime>
            <Icon name="alarm" color={colors.light} size={14} />
            <TextTypeTime>{type.time} mins</TextTypeTime>
          </WrapperTypeTime>
        </View>
      </Type>
    ))}
  </ListType>
);

export default TypesList;
