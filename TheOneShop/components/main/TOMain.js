import React, { Component } from 'react';
import { View, StyleSheet, Image, NavigatorIOS, Text } from 'react-native';

import Home from '../home/TOHome';
import More from '../more/TOMore';
import Mine from '../mine/TOMine';
import Shop from '../shop/TOShop';



export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    }
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          title="首页"
          selected={this.state.selectedTab === 'home'}
          renderIcon={() => <Image style={styles.iconStyle} source={{ uri: 'icon_tabbar_homepage' }} />}
          renderSelectedIcon={() => <Image style={styles.iconStyle} source={{ uri: 'icon_tabbar_homepage_selected' }} />}
          onPress={() => { this.setState({ selectedTab: 'home' }) }}>
          <Home />
        </TabNavigator.Item>
        <TabNavigator.Item
          title="商家"
          selected={this.state.selectedTab === 'shop'}
          renderIcon={() => <Image style={styles.iconStyle} source={{ uri: 'icon_tabbar_merchant_normal' }} />}
          renderSelectedIcon={() => <Image style={styles.iconStyle} source={{ uri: 'icon_tabbar_merchant_selected' }} />}
          onPress={() => { this.setState({ selectedTab: 'shop' }) }}>
          <Shop />
        </TabNavigator.Item>
        <TabNavigator.Item
          title="我的"
          selected={this.state.selectedTab === 'mine'}
          renderIcon={() => <Image style={styles.iconStyle} source={{ uri: 'icon_tabbar_mine' }} />}
          renderSelectedIcon={() => <Image style={styles.iconStyle} source={{ uri: 'icon_tabbar_mine_selected' }} />}
          onPress={() => { this.setState({ selectedTab: 'mine' }) }}>
          <Mine />
        </TabNavigator.Item>
        <TabNavigator.Item
          title="更多"
          selected={this.state.selectedTab === 'more'}
          renderIcon={() => <Image style={styles.iconStyle} source={{ uri: 'icon_tabbar_misc' }} />}
          renderSelectedIcon={() => <Image style={styles.iconStyle} source={{ uri: 'icon_tabbar_misc_selected' }} />}
          onPress={() => { this.setState({ selectedTab: 'more' }) }}>
          <More />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 30,
    height: 30,
  },
});
