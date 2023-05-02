import { StyleSheet, Text, View } from 'react-native';
import {styles} from './styles';
import {Input} from './components/index';

export default function App() {
  return (
    <View style={styles.container}>
         <Input 
            placeholder="Ingrese su producto"
            title="Add"
            onChangeText={""}
            onHandlerButton={""}
         />
    </View>
  );
}