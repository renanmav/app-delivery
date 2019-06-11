import React from "react";

import api from "~/config/api";

import { metrics } from "~/styles";

import { Dimensions } from "react-native";
import { ContainerList, Size, SizeFile, SizeName, SizePrice } from "./styles";

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

export default ListSizes;
