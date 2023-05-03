import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from './styles';
import {Input, Lista, CustomModal} from './components/index';

export default function App() {
    const [text, setText] = useState('');
    const [lista, setLista] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

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

    const onHandlerItem = (id) => {
        setModalVisible(!modalVisible);
        const selectedItem = lista.find(item => item.id === id);
        setSelectedItem(selectedItem);
    };

    const onHandlerCancelModal = () => {
        setModalVisible(!modalVisible);
        setSelectedItem(null);
    };

    const onHandlerDeleteItem = (id) => {
        setLista(lista.filter(item => item.id !== id))
        setModalVisible(!modalVisible);
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
        <CustomModal 
            isVisible={modalVisible} 
            animationType='slide' 
            item={selectedItem} 
            onCancel={onHandlerCancelModal} 
            onDelete={onHandlerDeleteItem}
        />
    </View>
  );
}