import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "~/pages/Login";
import Types from "~/pages/Types";

const Routes = createAppContainer(
  createSwitchNavigator({
    Types,
    Login
  })
);

export default Routes;
