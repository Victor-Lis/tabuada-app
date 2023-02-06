import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import Tabuada from './src/Components/Tabuada';

export default function App() {

  const [valor, setValor] = useState(0);
  const [vezes, setVezes] = useState(0)

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <TextInput style={styles.input1} keyboardType='numeric' placeholder='Escreva seu número aqui!' placeholderTextColor={"#9850E6"} onChangeText={setValor}/>
      <TextInput style={styles.input2} keyboardType='numeric' placeholder='Escreva quantas vezes!' placeholderTextColor={"#9850E6"} onChangeText={setVezes}/>
      {valor > 0 && vezes > 0 && <Tabuada valor={valor} vezes={vezes}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input1: {
    borderColor: "black",
    paddingHorizontal: 15,
    borderWidth: 2,
    backgroundColor: "#000",
    color: "#fff",
    width: "80%",
    textAlign: "center",
    paddingVertical: "02.5%",
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  input2: {
    borderColor: "black",
    paddingHorizontal: 15,
    borderWidth: 2,
    backgroundColor: "#000",
    color: "#fff",
    width: "80%",
    textAlign: "center",
    paddingVertical: "02.5%",
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }

});
