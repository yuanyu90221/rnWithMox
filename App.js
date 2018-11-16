/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

type Props = {};
@observer
export default class App extends Component<Props> {
  @observable boxVisible = true;
  toggleBox = () => {
    this.boxVisible = !this.boxVisible;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>MobX Demo</Text>
        <Button onPress={this.toggleBox} title={"Toggle Box"} />
        {this.boxVisible && <View style={styles.box}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  box: {
    margin: 10,
    height: 200,
    width: 200,
    backgroundColor: "red"
  }
});
