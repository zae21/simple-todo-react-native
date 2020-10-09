import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header(){
    return (
        <View style={css.header}>
            <Text style={css.title}>Strawhat Todo!</Text>
        </View>
    )
}

const css = StyleSheet.create({
    header: {
      height:80,
      paddingTop:38,
      backgroundColor:'magenta',
    },
    title:{
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    }
  });
