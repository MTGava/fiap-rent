import { StyleSheet, View, Text } from "react-native";
import Input from "../components/input";
import Button from "../components/button";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Order({navigation}) {
    const {username} = useContext(AuthContext)
    return (
        <>     

        <View style={styles.header}>
                <MaterialIcons onPress={() => navigation.navigate("Login")} name="arrow-back" size={24} color="red" />
                <Text style={styles.text2}>Pedido</Text>
            </View>

        <View style={styles.container}>
            

            <View>
                <Text style={styles.text}>Olá,</Text>
                <Text style={styles.text2}>{username}</Text>
            </View>

            <View>
                <Input/>
                <Button onPress={() => navigation.navigate("Dvds")}>confirmar</Button>
            </View>

            <Text style={styles.text2}>
                Digite o código do Dvd para iniciar um pedido
            </Text>

            <TouchableOpacity>
                <Text style={styles.text} onPress={() => navigation.navigate("Login")}>sair</Text>
            </TouchableOpacity>

        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#950101',
        fontWeight: 'bold'
    },
    text2: {
        color: '#FFBA26',
        fontWeight: 'light'
    },
    header:{
        padding: 20,
        zIndex: 9999,
        position: 'fixed',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
  });
  