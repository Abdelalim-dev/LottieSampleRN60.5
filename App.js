/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LottieView from 'lottie-react-native';

const loop_animation = require('./src/assets/loop_loading.json');


const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex:1 }}>
        <Text>Hello</Text>

        <LottieView
          style={{ width: 200, height: 200, backgroundColor: 'pink' }}
          source={loop_animation} autoPlay loop autoSize />
      </SafeAreaView>
    </Fragment>
  );
};


export default App;
