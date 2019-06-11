import { createAppContainer, createStackNavigator } from "react-navigation";

import Login from "~/pages/Login";
import Types from "~/pages/Types";
import Products from "~/pages/Products";
import Sizes from "~/pages/Sizes";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      Types,
      Products,
      Sizes
    },
    {
      defaultNavigationOptions: {
        header: null
      },
      initialRouteName: "Sizes"
    }
  )
);

export default Routes;
