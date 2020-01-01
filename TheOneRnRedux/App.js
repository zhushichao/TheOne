/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { connect, Provider } from 'react-redux';
import { plus } from './redux/action';
import { getStore } from './redux/configureStore';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      store: null,
    }
  }

  componentDidMount() {
    const store = getStore();
    this.setState({
      store: store
    });
  }

  render() {
    if (!this.state.store){
      return (
        <View>
          <Text>加载......</Text>
        </View>
      );
    }
    return (
      <Provider store={this.state.store}>
        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Counter1 />
          <Counter1 />
          <Counter1 />
        </View>
      </Provider>
    );
  }
};


class _Counter1 extends Component {

  addConuter() {
    this.props.dispatch(plus(1));
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, marginStart: 30 }}>计数器: {this.props.result.c}</Text>
        <Text style={{ fontSize: 20, marginStart: 30 }} onPress={this.addConuter.bind(this)}>点我点我</Text>
      </View>
    );
  }
}

//映射表
const mapStateToProps = state => {
  return {
    result: state.calculate
  }
}

let Counter1 = connect(mapStateToProps)(_Counter1);

export default App;
