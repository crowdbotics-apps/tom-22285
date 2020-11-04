import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList167442Navigator from '../features/ArticleList167442/navigator';
import ArticleList167441Navigator from '../features/ArticleList167441/navigator';
import ArticleList167440Navigator from '../features/ArticleList167440/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList167442: { screen: ArticleList167442Navigator },
ArticleList167441: { screen: ArticleList167441Navigator },
ArticleList167440: { screen: ArticleList167440Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
