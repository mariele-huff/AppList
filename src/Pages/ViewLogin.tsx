import { useState } from "react"
import React from "react";
import { SafeAreaView, StyleSheet, Text, Alert, KeyboardAvoidingView, Platform, ActivityIndicator } from "react-native"

import { AntDesign } from '@expo/vector-icons';

import { InputCusttom } from "../Components/Input/input";
import { CustomButton } from "../Components/Button/button"
import { ThemeDark } from "../Styles/themeDark";
const base64 = require('base-64');


export const ViewLogin = (props: any) => {

    const [loading, setLoading] = useState(false)
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")


    async function verificação(login: any) {


        if (login.email === usuario) {
            props.navigation.navigate("ViewMenu")
        }
        else (
            Alert.alert('Email ou senha incorretos!')

        )
        setUsuario("")
        setSenha("")
    }

    async function Login() {
        setLoading(true)
        console.log(usuario, senha)
        
        const response = await fetch('http://177.44.248.30:3333/auth', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + base64.encode(`${usuario}:${senha}`)
            }

        })
        const json = await response.json()
        setLoading(false)
        verificação(json)

    }
    return (
    
        <SafeAreaView style={ThemeDark.containerCentral}>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : "height"}
                style={ThemeDark.formLogin}
            >


                {loading ?
                    <ActivityIndicator size="large" />
                    :
                    <>
                        <AntDesign
                            name="login"
                            size={64}
                            color="#9333ea" />
                        <Text
                            style={{ fontSize: 32, color: '#7C7C8A', marginTop: 16,}}
                        >
                            Login
                        </Text>
                        <Text
                            style={{ fontSize: 16, color: '#7C7C8A', marginBottom: 16,}}
                        >
                            Faça login e comece a usar!
                        </Text>
                        <InputCusttom
                            tamanho='small'
                            placeholder="E-mail"
                            type="emailAddress"
                            autoCapitalize="none"
                            value={usuario}
                            onChangeText={(value: React.SetStateAction<string>) => setUsuario(value)}
                           />

                        <InputCusttom
                            tamanho='small'
                            secureTextEntry={true}
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChangeText={(value: React.SetStateAction<string>) => setSenha(value)}
                           
                       />

                    

                        <CustomButton
                            label="Entrar"
                            onPress={props.navigation.navigate("ViewMenu")}
                            tamanho='small' />
                        <Text
                            style={{ fontSize: 16, color: '#7C7C8A', marginBottom: 16}}
                            onPress={() => props.navigation.navigate("ViewCadastro")}
                        >
                            Cadastrar-se
                        </Text>
                    </>

                }


            </KeyboardAvoidingView>
        </SafeAreaView>
 
    )
}

