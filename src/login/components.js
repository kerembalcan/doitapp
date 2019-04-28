/* @flow */
import React from "react"
import type {CompleteProps} from "./containers";
import {Text, View, StyleSheet} from "react-native";

export default class LoginComponent extends React.Component<CompleteProps> {

  componentDidMount() {
    this.props.loadTasks();
  }
  render() {
    return <View style={styles.container}>
      <Text style={styles.welcome}>DENEME 1 2 3</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>kerem</Text>
    </View>;
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
});

