import { createAppContainer, createStackNavigator } from "react-navigation";

import Login from "~/pages/Login";
import Types from "~/pages/Types";
import Products from "~/pages/Products";
import Sizes from "~/pages/Sizes";
import Cart from "~/pages/Cart";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      Types,
      Products,
      Sizes,
      Cart
    },
    {
      defaultNavigationOptions: {
        header: null
      },
      initialRouteName: "Types"
    }
  )
);

export default Routes;
