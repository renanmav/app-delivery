import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Types from '~/pages/Types';
import Products from '~/pages/Products';
import Sizes from '~/pages/Sizes';
import Cart from '~/pages/Cart';
import Address from '~/pages/Address';
import Orders from '~/pages/Orders';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      Types,
      Products,
      Sizes,
      Cart,
      Address,
      Orders,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
      initialRouteName: 'Login',
    },
  ),
);

export default Routes;
