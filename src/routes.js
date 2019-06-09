import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "~/pages/Login";
import Types from "~/pages/Types";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Types
  })
);

export default Routes;
