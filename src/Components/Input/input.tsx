
import React from "react"
import { TextInput } from "react-native"
import { ThemeDark } from "../../Styles/themeDark"


interface InputProps {
    placeholder?: string,
    type: any,
    tamanho: string,
    value?:string,
    onChangeText?:any,
    autoCapitalize?:any,
    secureTextEntry?: boolean
}

export const InputCusttom = ({ placeholder, type, tamanho, value, onChangeText, autoCapitalize, secureTextEntry }: InputProps) => {
 
        return (
            <>
                <TextInput
                    style={tamanho==='large'?ThemeDark.inputLarge:ThemeDark.inputSmall}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    autoCapitalize={autoCapitalize}
                    textContentType={type}
                    placeholderTextColor="#bebebe"
                />
            </>
        )
    }
