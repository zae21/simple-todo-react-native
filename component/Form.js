import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

export default function Form({ submitHandler }){
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
    const pressHandler = () => {
        if(text.length > 3){
            submitHandler(text)
            setText('')
        }else{
            Alert.alert('Oops!','todo is must over 3 chars long!',[
                {text:'Okey'},
                // {text:'Nahh!',onPress: () => Alert.alert('Heyyy!','todo is must over 3 chars long!') }
            ])
        }
    }
    return (
        <View>
            <TextInput 
                style={css.input}
                placeholder='New todo ...'
                onChangeText={(val)=>changeHandler(val)}
                value={text}
            />
            <Button title="Add Todo" onPress={pressHandler} color='magenta' />
        </View>
    )
}

const css = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        
    }
});
