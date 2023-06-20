import React from 'react';
import { View, Text, NativeBaseProvider, Center, Box, HStack, Badge, Spacer, Flex, FavouriteIcon } from 'native-base';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    "id": 1,
    "producto": "Pack Kinder",
    "numPedido": "10001",
    "Descripcion": "Contiene 95 etiquetas para objetos y 20 etiquetas termo-adhesivas para ropa y 5 etiquetas adhesivas para cuaderno.",
    "Campos": "Alcides Leguia",
    "Precio": "95.00",
    "Estado": "Pendiente a Diseño",
    "Fecha_ingreso": "10/06/2023",
    "Pekokipuntos": "10 puntos",
    "imagen":"https://pekokis.com/wp-content/uploads/2023/02/P.-Kinder.jpg"
  },
  {
    "id": 2,
    "producto": "Pack Hermanos",
    "numPedido": "10002",
    "Descripcion": "Pack dirigido para papás que tienes dos hijos. Contiene (20 etiquetas de ropa + 93 etiquetas para objetos super resistentes) por cada hermano.",
    "Campos": "Christian Chavez",
    "Precio": "150.00",
    "Estado": "Entregado",
    "Fecha_ingreso": "10/06/2023",
    "Pekokipuntos": "15 puntos",
    "imagen" : "https://pekokis.com/wp-content/uploads/2022/09/etiquetas_escolares__-personalizadas_pack_hermanos.jpg" 
  }
];

function MiCompra() {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('');
  };
  
  return <Box alignItems="center">
  {data.map(item => (       
  <Pressable key={item.id} maxW="96" paddingTop={5} onPress={() => handlePress()}>
    {({
    isHovered,
    isFocused,
    isPressed
  }) => {
    return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
      transform: [{
        scale: isPressed ? 0.96 : 1
      }]
    }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
          <HStack alignItems="center">

             
            <Badge colorScheme="darkBlue" _text={{
          color: "white"
        }} variant="solid" rounded="4">
              {item.numPedido}
            </Badge>
            <Spacer />
            <Text fontSize={12} color="coolGray.800">
              {item.Fecha_ingreso}
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
              {item.producto} 
            </Text>
            <Spacer />
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize={18}>
              {item.Campos} 
            </Text>
          </HStack>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            {item.Descripcion}
          </Text>
          <Flex>
            {isFocused ? <Text mt="2" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
                {item.Estado}
              </Text> : <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
              {item.Estado}
              </Text>}
              <HStack space={2}>
                 
                  <Text fontSize={12} color="coolGray.800">
                  {item.Pekokipuntos}
                  </Text>
            </HStack>
          </Flex>
        </Box>;
  }}
  
  </Pressable>
  
  ))}
  
</Box>;
}
    

function MisComprasScreen() {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <MiCompra />
      </Center>
    </NativeBaseProvider>
  );
}

export default MisComprasScreen;
