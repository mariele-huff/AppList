import React from 'react';
import * as Animatable from 'react-native-animatable'
import LottieView from 'lottie-react-native';
import { CustomButton } from '../Components/Button/button';
import { ThemeDark } from '../Styles/themeDark';



export function ViewMenu(props) {

  return (
    <Animatable.View
      style={ThemeDark.containerCentral}
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
        tamanho='small'
        label={"Anotar tarefas"}
        onPress={() => props.navigation.navigate("ViewTarefas")} 
       />
    </Animatable.View>
  )
}



