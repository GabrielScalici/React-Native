/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import MapView from 'react-native-maps';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
          <MapView
              region={{
                  latitude: 59.999999,
                  longitude: 49.999999,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1,
              }}

          />
        </View>

    );
  }
}

const styles = StyleShee.create({
   container:{
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center'
   },
   map:{
     position: 'absolute',
       top:0,
   }

});