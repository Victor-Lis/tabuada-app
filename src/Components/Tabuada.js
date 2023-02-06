import React, {useEffect} from 'react';
import { StyleSheet, ScrollView, View , Text, Vibration } from 'react-native';

export default function Tabuada({valor, vezes}) {

    const tabuada = []

    function padronizar(valor){

        if(valor < 10){

            return "0"+valor

        }else{

            return valor

        }

    }

    function definirVezes(vezes){

        vezes = Number(vezes)

        vezes++

        for(var i = 1; i < vezes; i++){

            tabuada.push(i)

        }

    }

    useEffect(() => {

        definirVezes(vezes)

    }, [])

 return (
   <ScrollView style={styles.tabuadaArea} horizontal={false}>

        <View style={styles.container}>

            {tabuada.length == 0 && vezes < 1001 && definirVezes(vezes)}
            {valor > 0 && valor < 10000000 && tabuada.map(numero => <Text key={numero} style={styles.tabuadaText}> {valor} X {padronizar(numero)} = {padronizar(valor * numero)} </Text>)}
            {valor >= 10000000 && <Text style={{color: "red"}}> Número muito grande! </Text>}
            {vezes > 1000 && <Text style={{color: "red"}}> Número de vezes muito grande! </Text>}

        </View>

   </ScrollView>
  );
}

const styles = StyleSheet.create({

    tabuadaArea: {

        backgroundColor: "#2C2C2C",
        width: "80%",
        textAlign: "center",
        paddingVertical: "07.5%",
        borderRadius: 20,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingVertical: 15,
        borderColor: "black",
        borderWidth: 2,
        borderTopWidth: 0,
        marginTop: -20,
        zIndex: -1,
        maxHeight: "37.5%",
        paddingTop: 29,

    },
    container: {

        flex: 1,
        alignItems: "center",
        marginBottom: "15%",
        justifyContent: "center",

    },
    tabuadaText: {

        color: "#ECECEC",
        fontSize: 17,

    }

})