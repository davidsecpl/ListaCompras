import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        marginTop: 60,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        
    },
    detailContainer:{
        paddingVertical: 20,
    },
    detailMessage:{
        fontSize: 16,
        color: '#212121',
    },
    selectedItem:{
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginBottom: 20,
    },
    containerButton:{
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});