import React from "react"
import { TextInput, View, StyleSheet } from "react-native"


interface InputProps {
    placeholder: string,
    type:any,

}

export const Input = ({placeholder, type}:InputProps) => {
    return (
        <>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                textContentType={type}
                placeholderTextColor={'#7C7C8A'}

            />
        </>




    )
}

const styles = StyleSheet.create({

    input: {
        height: 50,
        width: 200,
        borderRadius: 8,
        color: '#7C7C8A',
        backgroundColor: "#262626",
        margin: 16,
        padding: 16

    },
})