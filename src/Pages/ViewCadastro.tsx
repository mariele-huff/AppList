import { SafeAreaView, View, StyleSheet, Text } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { CustomButton } from "../Components/Button/button"
import React from "react";
import { InputCusttom } from "../Components/Input/input";
import { ThemeDark } from "../Styles/themeDark";


export const ViewCadastro = () => {

    return (
        <SafeAreaView style={ThemeDark.containerCentral}>
            <View style={ThemeDark.forms}>
          
                <AntDesign name="adduser" size={56} color="#9333ea" />

                <Text
                    style={{ fontSize: 32, color: '#7C7C8A', marginTop: 20 }}
                >
                    Cadastro
                </Text>
                <InputCusttom
                   tamanho="small"
                   type="email-address"
                   placeholder="Nome Completo"
                    
               />

              
                <InputCusttom
                    tamanho="small"
                    type="email-address"
                    placeholder="E-mail"
                    
                />

          
                <InputCusttom
                    tamanho="small"
                    type="password"
                    secureTextEntry={true}
                    placeholder="Senha"
                   
                />

             <InputCusttom
                    tamanho="small"
                    type="password"
                    secureTextEntry={true}
                    placeholder="Confirme a sua senha"
                />

                <CustomButton
                    label="Entrar"
                    onPress={() => console.log('clicou')}
                    tamanho="small"
                    onLongPress={undefined}                />
            </View>
        </SafeAreaView>
    )
}

