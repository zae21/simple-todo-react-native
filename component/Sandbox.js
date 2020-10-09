import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Sandbox(){
    return (
      <View style={css.container}>
        <Text style={css.boxOne}>One</Text>
        <Text style={css.boxTwo}>Two</Text>
        <Text style={css.boxThree}>Three</Text>
        <Text style={css.boxFour}>Four</Text>
      </View>
    )
}

const css = StyleSheet.create({
  container:{
    // flex:1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'flex-end',
    paddingTop:40,
    backgroundColor:'#ddd',
  },
  boxOne:{
    backgroundColor:'red',
    padding:10
  },
  boxTwo:{
    backgroundColor:'yellow',
    padding:10
  },
  boxThree:{
    backgroundColor:'green',
    padding:10
  },
  boxFour:{
    backgroundColor:'blue',
    padding:10
  },
});
