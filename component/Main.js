import React, { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    FlatList, 
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import Header from './Header'
import TodoItem from './TodoItem'
import Form from './Form'

export default function Main(){
    const [todos, setTodos] = useState([
        {key:'1', text:'find some food'},
        {key:'2', text: 'clean the ship'},
        {key:'3', text:'find some island'}
    ])
    
    const pressHandler = (key) => {
        setTodos(prevTodos => {
          return prevTodos.filter(todo => todo.key != key);
        });
    };

    const submitHandler = (text) => {
        setTodos((prevData)=>{
            return [
                ...prevData, 
                {text:text, key:Math.random().toString()}
            ]
        });
    
    }
      
    return (
        <TouchableWithoutFeedback onPress={ () => {
            Keyboard.dismiss();
            // console.log('dismiss keybaord')
        }}>
            <View style={css.container}>
                <Header />
                <View style={css.content}>
                    <Form submitHandler={submitHandler}/>
                    <View style={css.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem item={item} pressHandler={pressHandler} />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40,
        flex:1,
    },
    list: {
        marginTop: 20,
        flex:1,

    },
});
