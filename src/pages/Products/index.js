import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Types as ProductActions } from "~/store/ducks/product";

import { colors } from "~/styles";
import background from "~/assets/header-background.png";
import Icon from "react-native-vector-icons/FontAwesome";

import { ScrollView, StatusBar, ActivityIndicator } from "react-native";
import { Background, MenuTop, ButtonMenuBack, TextMenu } from "./styles";

import ListProducts from "./list";

export default function Products(props) {
  const { loading, products } = useSelector(state => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    const { navigation } = props;
    const type_id = navigation.getParam("type_id");

    dispatch({
      type: ProductActions.INDEX_REQUEST,
      payload: { type_id }
    });
  }, []);

  handleGoBack = () => props.navigation.goBack();

  const { navigation } = props;

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

        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <ListProducts products={products} navigation={navigation} />
        )}
      </ScrollView>
    </Background>
  );
}
