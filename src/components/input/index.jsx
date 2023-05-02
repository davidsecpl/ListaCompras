import React from "react";
import { TextInput, Button, View } from "react-native";
import {styles} from './styles';

const Input = ({placeholder,value, onChangeText,title, color,onHandlerButton}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
            <Button title={title} color={color} onPress={onHandlerButton}/>
        </View>
    )
}

export default Input;