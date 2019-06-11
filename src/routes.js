import { createAppContainer, createStackNavigator } from "react-navigation";

import Login from "~/pages/Login";
import Types from "~/pages/Types";
import Products from "~/pages/Products";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      Types,
      Products
    },
    {
      defaultNavigationOptions: {
        header: null
      },
      initialRouteName: "Login"
    }
  )
);

export default Routes;
