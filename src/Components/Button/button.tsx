import React from 'react';
import { TouchableOpacity, Text } from 'react-native'

interface ButtonProps{
  label: string, 
  onPress: any, 
  onLongPress?: any,
  style: any
}

export function CustomButton({ label, onPress, onLongPress ,style}: ButtonProps) {
  return (
    <TouchableOpacity 
    style={style}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{textAlign:'center', color: '#202024', fontSize:18}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}


