import { TextInput, SafeAreaView, View, StyleSheet, Text } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { CustomButton } from "../Components/Button/button"


export const ViewCadastro = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.forms}>
                <AntDesign name="adduser" size={56} color="#9333ea" />

                <Text
                    style={{ fontSize: 32, color: '#7C7C8A', marginTop: 20 }}
                >
                    Cadastro
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome Completo"
                    placeholderTextColor={'#7C7C8A'}
                >

                </TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor={'#7C7C8A'}
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
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    textContentType="password"
                    placeholder="Confirme a sua senha"
                    placeholderTextColor={'#7C7C8A'}
                >

                </TextInput>
                <CustomButton
                    label="Entrar"
                    onPress={() => console.log('clicou')}
                    style={styles.button}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#18181b",


    },
    forms: {
        width: 300,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'#012E40',
        borderRadius: 16

    },
    button: {
        backgroundColor: '#9333ea',
        borderRadius: 8,
        justifyContent: "center",
        height: 50,
        width: 250,
        margin: 18

    },
    input: {
        height: 50,
        width: 250,
        borderRadius: 8,
        color: '#7C7C8A',
        backgroundColor: "#262626",
        margin: 16,
        padding: 16

    },
})