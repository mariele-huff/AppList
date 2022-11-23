import React from 'react';
import { StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable'
import LottieView from 'lottie-react-native';
import { CustomButton } from '../Components/Button/button';



export function ViewMenu(props) {

  return (
    <Animatable.View
      style={styles.container}
    >


<LottieView
    autoPlay
    loop={true}
    style={{
        width: 200,
        height: 200,

    }}

    source={require('../Assets/animations/hello.json')}
/>

      <CustomButton
        style={styles.button}
        label={"Anotar tarefas"}
        onPress={() => props.navigation.navigate("ViewTarefas")} onLongPress={undefined}      />
    </Animatable.View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18181b",


  },
  button: {
    backgroundColor: '#9333ea',
    borderRadius: 8,
    justifyContent: "center",
    height: 50,
    width: 250,
    margin: 18

  },

})