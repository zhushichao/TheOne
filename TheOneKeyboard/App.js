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
  View,
  Text,
  FlatList,
  TextInput,
  TouchableHighlight,
  Image,
  Button,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showKeyboard: false,
      h: 0,
      f: 1,
      data: [
        { key: '1', title: 'title 1' },
        { key: '2', title: 'title 2' },
        { key: '3', title: 'title 3' },
        { key: '4', title: 'title 4' },
        { key: '5', title: 'title 5' },
        { key: '6', title: 'title 6' },
        { key: '7', title: 'title 7' },
        { key: '8', title: 'title 8' },
        { key: '9', title: 'title 9' },
        { key: '10', title: 'title 10' },
        { key: '11', title: 'title 11' },
        { key: '12', title: 'title 12' },
        { key: '13', title: 'title 13' },
        { key: '14', title: 'title 14' },
        { key: '15', title: 'title 15' },
        { key: '16', title: 'title 16' },
        { key: '17', title: 'title 17' },
        { key: '18', title: 'title 18' },
        { key: '19', title: 'title 19' },
        { key: '20', title: 'title 20' },
        { key: '21', title: 'title 21' },
        { key: '22', title: 'title 22' },
        { key: '23', title: 'title 23' },
        { key: '24', title: 'title 24' },
        { key: '25', title: 'title 25' },
        { key: '26', title: 'title 26' },
        { key: '27', title: 'title 27' },
        { key: '28', title: 'title 28' },
        { key: '29', title: 'title 29' },
        { key: '30', title: 'title 30' },
        { key: '31', title: 'title 31' },
        { key: '32', title: 'title 32' },
        { key: '33', title: 'title 33' }
      ],
    }
  }

  _renderItem = (item) => {
    return (
      <View style={styles.sectionContainer}>
        <TouchableHighlight style={{ flexDirection: 'row', flex: 1 }} onPress={this._onChangeshowKeyboard}>
          <Text style={styles.sectionTitle}>{item.title}</Text>
        </TouchableHighlight>
      </View>
    );
  };

  _renderLeft = () => {
    const { showKeyboard } = this.state;
    return (
      <View style={styles.boxContainer}>
        <TextInput
          ref={(component) => {
            this.component = component;
          }}
          style={[styles.textBoxInput, { textAlignVertical: 'center' }]}
        />
      </View>
    );
  };

  _onChangeshowKeyboard = () => {
    const { showKeyboard, f , h} = this.state;
    this.setState({
      showKeyboard: !showKeyboard
    });
    if (!showKeyboard) {
      this.setState({
        f: 0,
        h: 1280
      })
    } else {
      this.setState({
        f: 0,
        h: 1280
      })
    }
    showKeyboard ?  this.component.blur() : this.component.focus();
  };

  _showPlus = () => {
    Keyboard.addListener()
  };

  _showInputSoft = () => {
    this.component.isFocused()
    this.component.focus();
  };


  _renderRight = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ padding: 10 }} onPress={this._onChangeshowKeyboard}>Emoji</Text>
        <Text style={{ padding: 10 }} onPress={() => this._showPlus}>Plus</Text>
      </View>
    );
  };


  _renderContent = () => {
    const { showKeyboard, h, f} = this.state;
    return (
      <View style={{ flexDirection: 'column' }}>
        <KeyboardAvoidingView style={[styles.textArea]}>
          {this._renderLeft()}
          {this._renderRight()}
        </KeyboardAvoidingView>
        {!showKeyboard && <View>
          <Text style={{fontSize: 30, color: '#000', padding: 15}}>吃饭</Text>
          <Text style={{fontSize: 30, color: '#000', padding: 15}}>睡觉</Text>
          <Text style={{fontSize: 30, color: '#000', padding: 15}}>打豆豆</Text>
        </View>}
      </View>
    );
  };

  render() {
    const { showKeyboard, h, f} = this.state;
    return (
      <>
        {/*<StatusBar barStyle="dark-content"/>*/}
        <SafeAreaView style={styles.root}>
          <Header/>
          <FlatList
            style={{flexGrow: f, height: h}}
            ref={(component) => {
              this.list = component;
            }}
            data={this.state.data}
            renderItem={({ item }) => this._renderItem(item)}/>
          {this._renderContent()}
        </SafeAreaView>

      </>
    );
  };
}

const styles = StyleSheet.create({
  actionButtonRight: {
    height: 50,
    width: 34,
    paddingLeft: 10,
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  actionButtonPlus: {
    height: 50,
    width: 46,
    paddingLeft: 12,
    paddingRight: 10,
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  sendButton: {
    width: 49,
    height: 32,
    backgroundColor: '#3E85F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 9,
    borderRadius: 2,
    alignSelf: 'flex-end'
  },

  sendText: {
    fontSize: 12,
    color: '#FFFFFF'
  },
  textArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  textBoxInput: {
    maxHeight: 80,
    minHeight: 34,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    paddingVertical: 3,
    color: '#212121'
  },
  boxContainer: {
    maxHeight: 80,
    minHeight: 34,
    flex: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    marginVertical: 7
  },
  root: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

