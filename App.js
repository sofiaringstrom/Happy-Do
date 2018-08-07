'use strict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './ios_views/main.ios.js'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Main />
    );
  }
}