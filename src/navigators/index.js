/* @flow */
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {AUTH_SCREENS, INIT_SCREEN, MAIN_SCREENS} from "./routes";
import ConnectedLoginComponent from "../login/containers";

let appRouteConfiguration = {};
appRouteConfiguration[INIT_SCREEN] = {screen: ConnectedLoginComponent};
// appRouteConfiguration[AUTH_SCREENS] = {screen: AuthNavigator};
// appRouteConfiguration[MAIN_SCREENS] = {screen: MainNavigator};

const appStackNavigatorConfiguration = {
  initialRouteName: INIT_SCREEN
};

const AppNavigator = createSwitchNavigator(
  appRouteConfiguration,
  appStackNavigatorConfiguration
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
