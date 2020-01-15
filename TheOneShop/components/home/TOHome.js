import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppRegistry,
  TextInput,
  Image,
} from 'react-native';

export default class Home extends Component {
  renderToolbar() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text>广州</Text>
        <TextInput placeholder="输入商家、品类、商圈"/>
        <View>
          <Image source={{ uri: 'icon_homepage_message' }}/>
          <Image source={{ uri: 'icon_homepage_scan' }}/>
        </View>
      </View>
    );
  }

  render() {
    return <View style={styles.container}>{this.renderToolbar()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Home', () => Home);
