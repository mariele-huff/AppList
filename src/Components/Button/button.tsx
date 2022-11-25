import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { ThemeDark } from '../../Styles/themeDark';

interface ButtonProps{
  label: string, 
  onPress: any, 
  onLongPress?: any,
  tamanho: string
}

export function CustomButton({ label, onPress, onLongPress ,tamanho}: ButtonProps) {
  return (
    <TouchableOpacity 
    style={tamanho==='large'?ThemeDark.buttonLarge:ThemeDark.buttonSmall}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{textAlign:'center', color: '#202024', fontSize:18}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}


