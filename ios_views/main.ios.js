import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const background = require('../assets/purple_pink-gradient.png');

var backgrounds = {
  'bg1': require('../assets/purple_pink-gradient.png'),
  'bg2': require('../assets/green_blue-gradient.png'),
  'bg3': require('../assets/green_yellow-gradient.png'),
  'bg4': require('../assets/green-gradient.png')
}

type Props = {};
export default class Main extends Component<Props> {
  render() {

    var img = getRandomBg();

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.appName}>HappyDo</Text>
        </View>
        <ScrollView style={styles.listContainer}>
          <View style={styles.topWrap}>
            <View>
              <Text>
                Lägg till
              </Text>
            </View>
          </View>
          <View style={styles.listItem}>
            <Image source={getRandomBg()} style={styles.backgroundImage} />
            <Text style={styles.listItemText}>Titel</Text>
          </View>
          <View style={styles.listItem}>
            <Image source={getRandomBg()} style={styles.backgroundImage} />
            <Text style={styles.listItemText}>Titel</Text>
          </View>
          <View style={styles.listItem}>
            <Image source={getRandomBg()} style={styles.backgroundImage} />
            <Text style={styles.listItemText}>Titel</Text>
          </View>
          <View style={styles.listItem}>
            <Image source={getRandomBg()} style={styles.backgroundImage} />
            <Text style={styles.listItemText}>Titel</Text>
          </View>
          <View style={styles.listItem}>
            <Image source={getRandomBg()} style={styles.backgroundImage} />
            <Text style={styles.listItemText}>Titel</Text>
          </View>
          <View style={styles.listItem}>
            <Image source={getRandomBg()} style={styles.backgroundImage} />
            <Text style={styles.listItemText}>Titel</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function getRandomBg() {
  var keys = [];
  for (var prop in backgrounds) {
    if (backgrounds.hasOwnProperty(prop)) {
        keys.push(prop);
    }
  }

  var imageKey = keys[keys.length * Math.random() << 0];

  return backgrounds[imageKey];
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
    paddingBottom: 20,
  },
  appName: {
    alignSelf: 'center',
    fontSize: 20,
  },
  listContainer: {
    flexDirection: "column",
  },
  topWrap: {

  },
  listItem: {
    padding: 20,
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  listItemText: {
    color: '#FFF'
  },
  backgroundImage: {
    position: 'absolute',
    width: 300,
    height: 150,
    justifyContent: 'center'
  }
});
