import { useState } from "react"
import { SafeAreaView, TextInput, StyleSheet, Text, Alert, KeyboardAvoidingView, Platform } from "react-native"
import {CustomButton} from "../Components/Button/button"
import { AntDesign } from '@expo/vector-icons'; 
import React from "react";
const base64 = require('base-64');

export const ViewLogin = (props:any) => {
    

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")


  async  function verificação (login: any) {
        

        if(login.email === usuario){
            props.navigation.navigate("ViewMenu")
        }
        else(
            Alert.alert('Email ou senha incorretos!')
           
        ) 
        setUsuario("")
        setSenha("")
    }

    async function Login () {
        console.log(usuario, senha)
        const response = await fetch('http://177.44.248.30:3333/auth',{
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + base64.encode(`${usuario}:${senha}`)
            }

        })
        const json = await response.json()
        verificação(json)

    }
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios'?'padding':"height"}
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
               value={usuario}
               onChangeText={(value) => setUsuario(value)}
               placeholderTextColor={'#7C7C8A'}
            
               

               >

               </TextInput>
               <TextInput
               style={styles.input}
               secureTextEntry={true}
               textContentType="password"
               placeholder="Senha"
               value={senha}
               onChangeText={(value) => setSenha(value)}
               placeholderTextColor={'#7C7C8A'}
               >
                
               </TextInput>
               
               <CustomButton
                    label="Entrar"
                    // onPress={() => props.navigation.navigate("ViewMenu")}
                    onPress={Login}
                    style={styles.button}               />
                <Text
                style={{fontSize:16, color:'#7C7C8A', marginBottom:16}}
                onPress={() => props.navigation.navigate("ViewCadastro")}
                >
                    Cadastrar-se
                </Text>

            </KeyboardAvoidingView>
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