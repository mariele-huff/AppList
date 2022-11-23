import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';

import { ViewLogin } from './src/Pages/ViewLogin'
import { ViewCadastro } from './src/Pages/ViewCadastro';
import { ViewMenu } from './src/Pages/ViewMenu'
import { ViewTarefas } from './src/Pages/ViewTarefas';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <> 
   
    
      <StatusBar
        backgroundColor='#042940'
        translucent={false}
        style='auto' />

      <NavigationContainer>
        <Stack.Navigator
        initialRouteName='Login'
        >
          <Stack.Screen name="ViewLogin" component={ViewLogin} />
          <Stack.Screen name="ViewCadastro" component={ViewCadastro} />
          <Stack.Screen name="ViewMenu" component={ViewMenu} />
          <Stack.Screen name="ViewTarefas" component={ViewTarefas} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )

}
