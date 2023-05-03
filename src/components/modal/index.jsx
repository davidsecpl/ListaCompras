import React from "react";
import { Modal, View, Text, Button } from "react-native";
import {styles} from './styles';

const CustomModal = ({isVisible, animationType, item, onCancel, onDelete}) => {
    return (
        <Modal visible={isVisible} animationType={animationType} >
            <View style={styles.container}>
                <Text style={styles.title}>Detalle del item</Text>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailMessage}>Are you sure to delete this item?</Text>
                    <Text style={styles.selectedItem}>{item?.value}</Text>
                </View>
                <View style={styles.containerButton}>
                    <Button title='Cancel' color='#52528C' onPress={onCancel}/>
                    <Button title='Delete' color='#52528C' onPress={()=>{onDelete(item.id)}}/>
                </View>
            </View>
        </Modal>
    )
};

export default CustomModal;