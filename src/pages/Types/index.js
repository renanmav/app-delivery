import React, { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TypeActions } from "~/store/ducks/type";

import {
  Image,
  TouchableOpacity,
  StatusBar,
  View,
  ActivityIndicator
} from "react-native";

import cartImage from "~/assets/cart.png";
import background from "~/assets/header-background.png";

import api from "~/config/api";

import Icon from "react-native-vector-icons/MaterialIcons";

import {
  Container,
  MenuTop,
  TextMenu,
  ButtonCart,
  Background,
  Type,
  ImageType,
  ListType,
  TextTypeName,
  TextTypeDescription,
  WrapperTypeTime,
  TextTypeTime
} from "./styles";

import { colors } from "~/styles";

const handleTypeClick = (type_id, navigation) => {
  navigation.navigate("Products", {
    type_id
  });
};

const TypesList = ({ types, navigation }) => (
  <ListType>
    {types.map(type => (
      <Type key={type.id} onPress={() => handleTypeClick(type.id, navigation)}>
        <ImageType
          source={{
            uri: `http://10.0.3.2:8080/files?name=${type.file.file}`
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

function Types(props) {
  useEffect(() => {
    const { indexRequest } = props;
    indexRequest();
  }, []);

  const { loading, types } = props.type;

  return (
    <Background source={background}>
      <Container>
        <StatusBar
          backgroundColor={colors.background}
          barStyle="light-content"
        />
        <MenuTop>
          <TouchableOpacity>
            <Icon name="history" color={colors.white} size={24} />
          </TouchableOpacity>
          <TextMenu>Pizzaria Don Juan</TextMenu>
          <ButtonCart>
            <Image source={cartImage} />
          </ButtonCart>
        </MenuTop>
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <TypesList types={types} navigation={props.navigation} />
        )}
      </Container>
    </Background>
  );
}

const mapStateToProps = state => ({
  type: state.type
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TypeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Types);
