import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo-vector-icons'
export default function TodoItem({ pressHandler, item }) {
    return (
      <TouchableOpacity onPress={() => pressHandler(item.key)} style={css.item}>
        <MaterialIcons name='delete' size={18} color='#333'/>
        <Text style={css.itemText}>{item.text}</Text>
      </TouchableOpacity>
    )
}
  
const css = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderRadius: 1,
        borderRadius: 10,
        borderColor: '#bbb',
        borderStyle: "dashed",
        flexDirection:'row'
    },
    itemText:{
      marginLeft:10,
    }
});
