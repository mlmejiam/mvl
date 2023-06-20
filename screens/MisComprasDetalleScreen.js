import React from 'react';
import { View, Text } from 'react-native';
import { NativeBaseProvider, Center } from 'native-base';

function MisComprasDetalle() {
  return (
    <View>
      <Text>MisComprasScreen</Text>
    </View>
  );
}

export default() =>{
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <MisComprasDetalle />
      </Center>
    </NativeBaseProvider>
  );
}
