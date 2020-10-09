import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './component/Main'

export default function App() {
  return (
      <View style={css.wrapper}>
        <Main />
      </View>
  )
}

const css = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
