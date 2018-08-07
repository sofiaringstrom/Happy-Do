import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Main extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.appName}>HappyDo</Text>
        </View>
        <ScrollView style={styles.listContainer}>
          <View style={styles.listItem}>
            <Text>Titel</Text>
          </View>
          <View style={styles.listItem}>
            <Text>Titel</Text>
          </View>
          <View style={styles.listItem}>
            <Text>Titel</Text>
          </View>
          <View style={styles.listItem}>
            <Text>Titel</Text>
          </View>
          <View style={styles.listItem}>
            <Text>Titel</Text>
          </View>
          <View style={styles.listItem}>
            <Text>Titel</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 25
  },
  top: {
    borderBottomWidth: 1,
    borderColor: '#000',
    alignSelf: 'stretch',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  appName: {
    alignSelf: 'center',
    fontSize: 20,
  },
  listContainer: {
    flexDirection: "column"
  },
  listItem: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#000',
    padding: 20,
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginTop: 50
  }
});
