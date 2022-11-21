import { useState } from "react"
import { SafeAreaView, TextInput, View, StyleSheet, Text } from "react-native"
import {CustomButton} from "../Components/Button/button"
import { AntDesign } from '@expo/vector-icons'; 


export const ViewLogin = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <SafeAreaView style={styles.container}>
            <View
             style={styles.formLogin}
            >
                <AntDesign name="login" size={64} color="#9333ea" />
                <Text
                style={{fontSize:32, color:'#7C7C8A',marginTop:16}}
                >
                    Login
                </Text>
                <Text
                style={{fontSize:16, color:'#7C7C8A', marginBottom:16}}
                >
                    Faça login e comece a usar!
                </Text>
              
               <TextInput
               style={styles.input}
               placeholder="E-mail"
               textContentType="emailAddress"
               placeholderTextColor={'#7C7C8A'}
               onValueChange

               >

               </TextInput>
               <TextInput
               style={styles.input}
               secureTextEntry={true}
               textContentType="password"
               placeholder="Senha"
               placeholderTextColor={'#7C7C8A'}
               >
                
               </TextInput>
               
               <CustomButton
               label="Entrar"
               onPress={() => props.navigation.navigate("ViewMenu")}
               style={styles.button}
               />
                <Text
                style={{fontSize:16, color:'#7C7C8A', marginBottom:16}}
                onPress={() => props.navigation.navigate("ViewCadastro")}
                >
                    Cadastrar-se
                </Text>

            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#18181b",
        
       
    },
    formLogin:{ 
        width:300,
        height:400,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'#012E40',
        borderRadius:16
    
    }, 
    button: {
        backgroundColor:'#9333ea',
        borderRadius:8,
        justifyContent:"center",
        height:50,
        width:200,
        margin:18

    }, 
    input:{
        height:50,
        width:200,
        borderRadius:8,
        color:'#7C7C8A',
        backgroundColor: "#262626",
        margin:16,
        padding: 16
        
    },
})