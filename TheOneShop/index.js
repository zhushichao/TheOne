/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Main from './components/main/TOMain';
import {Navigation} from 'react-native-navigation';

import Home from './components/home/TOHome';
import More from './components/more/TOMore';
import Mine from './components/mine/TOMine';
import Shop from './components/shop/TOShop';


// Navigation.registerComponent('Home', () => Home);
// Navigation.registerComponent('More', () => More);
// Navigation.registerComponent('Mine', () => Mine);
// Navigation.registerComponent('Shop', () => Shop);


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: '首页',
                  fontSize: 12,
                  selectedFontSize: 13,
                  icon: {uri: 'icon_tabbar_homepage'},
                  selectedIcon: {uri: 'icon_tabbar_homepage_selected'},
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Shop',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: '商城',
                  fontSize: 12,
                  selectedFontSize: 13,
                  icon: {uri: 'icon_tabbar_merchant_normal'},
                  selectedIcon: {uri: 'icon_tabbar_merchant_selected'},
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Mine',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: '我的',
                  fontSize: 12,
                  selectedFontSize: 13,
                  icon: {uri: 'icon_tabbar_mine'},
                  selectedIcon: {uri: 'icon_tabbar_mine_selected'},
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'More',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: '更多',
                  fontSize: 12,
                  selectedFontSize: 13,
                  icon: {uri: 'icon_tabbar_misc'},
                  selectedIcon: {uri: 'icon_tabbar_misc_selected'},
                },
              },
            },
          },
        ],
      },
    },
  });
});

