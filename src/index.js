import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from './styles';
import {Input, Lista} from './components/index';

export default function App() {
    const [text, setText] = useState('');
    const [lista, setLista] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const onAddItem = () => {
        if (text.length === 0) return;
        setLista([
            ...lista,
            {
                id: lista.length,
                value: text
            }
        ]);
        setText('');
    };

    const onHandlerItem = () => {
        console.warn('holi');
    };

    return (
    <View style={styles.container}>
         <Input 
            placeholder = "Ingrese su producto"
            buttonTitle = "Add"
            buttonColor = "#408521"
            value = {text}
            onChangeText = {(text)=>setText(text)}
            onHandlerButton = {onAddItem}
         />
         <Lista lista = {lista} onSelectItem = {onHandlerItem}/>
    </View>
  );
}