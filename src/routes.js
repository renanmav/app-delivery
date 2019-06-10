import { createAppContainer, createStackNavigator } from "react-navigation";

import Login from "~/pages/Login";
import Types from "~/pages/Types";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      Types
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
