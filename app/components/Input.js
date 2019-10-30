import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

export default function Input({value, changeText, addTodoItem}) {
    return (
        <TextInput
            value = {value}
            onChangeText = {changeText}
            onEndEditing = {addTodoItem}

            style = {styles.input}
            placeholder = {"write your tasks"}
            maxLength = {30}
            returnKeyType = "done"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000000',
        margin: 15,
    },
})
