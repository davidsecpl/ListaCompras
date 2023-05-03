import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import {styles} from './styles';

const Item = ({item, onSelectItem}) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onSelectItem(item.id)} >
            <Text style={styles.item}>{item.value}</Text>
        </TouchableOpacity>        
    )
};

export default Item;