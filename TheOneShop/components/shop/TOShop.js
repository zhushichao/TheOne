import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry } from 'react-native';

export default class Shop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Shop..</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('Shop', () => Shop);