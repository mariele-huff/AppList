import React from 'react';
import { TouchableOpacity, Text } from 'react-native'


export function CustomButton({ label, onPress, onLongPress ,style}) {
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


