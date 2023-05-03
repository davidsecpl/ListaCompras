import React from "react";
import { View, FlatList } from 'react-native';
import Item from './item';
import {styles} from './styles';

const Lista = ({lista, onSelectItem}) => {
    
    const renderItem = ({item}) => (
        <Item item={item} onSelectItem={onSelectItem} />
    );

    const keyExtractor = (item) => item.id;

    return (
        <View styles={styles.listContainer}>
            <FlatList
                data={lista}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                alwaysBounceVertical={false}
            />
        </View>
    )
};

export default Lista;