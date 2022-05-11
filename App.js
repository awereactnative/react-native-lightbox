import React, { Component } from 'react';

import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';

import Lightbox from 'react-native-lightbox';


export default class App extends Component {

  render() {
    return (

      <ScrollView style={styles.container} >

          <View style={styles.text}>
            <Text>Hello Guys, Welcome to ReactNativeCode.com, Today we are going to learn about Lightbox in React Native. </Text>
          </View>

          <Lightbox underlayColor="white">
            <Image
              style={styles.contain}
              resizeMode="contain"
              source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/06/sample_image.png' }}
            />
          </Lightbox>

        </ScrollView>

            
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  contain: {
    flex: 1,
    height: 200,
  },
  text: {
    marginVertical: 20,
    textAlign: 'center'
  },
});