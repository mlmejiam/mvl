import { View ,NativeBaseProvider, Center, Text, Box, Pressable, HStack, VStack, Badge, Button, Spacer, Image } from 'native-base';
import React from 'react'

const data = [
  {
    "id": 1,
    "producto": "Pack Kinder",
    "Descripcion": "Contiene 95 etiquetas para objetos y 20 etiquetas termo-adhesivas para ropa y 5 etiquetas adhesivas para cuaderno.",
    "Precio": "S/. 95.00",
    "descuento": "10%",
    "Pekokipuntos": "10 puntos",
    "imagen":"https://pekokis.com/wp-content/uploads/2023/02/P.-Kinder.jpg"
  },
  {
    "id": 2,
    "producto": "Pack Hermanos",
    "Descripcion": "Pack dirigido para papás que tienes dos hijos. Contiene (20 etiquetas de ropa + 93 etiquetas para objetos super resistentes) por cada hermano.",
    "Precio": "S/. 150.00",
    "descuento": "15%",
    "Pekokipuntos": "15 puntos",
    "imagen" : "https://pekokis.com/wp-content/uploads/2022/09/etiquetas_escolares__-personalizadas_pack_hermanos.jpg" 
  }
];



function Misbeneficios() {
  return (
    <Box alignItems="center">
  {data.map(item => (
    <Pressable key={item.id} maxW="96" paddingTop={5}>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"}
            style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
            p="5"
            rounded="8"
            shadow={3}
            borderWidth="1"
            borderColor="coolGray.300"
          >
            <HStack>
              <Box>
                <VStack alignItems="flex-start">
                  <Badge colorScheme="darkBlue" _text={{ color: "white" }} variant="solid" rounded="4">
                    {item.producto}
                  </Badge>
                  <HStack alignItems="center">
                    <Text fontSize={12} color="coolGray.800" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                      {item.Precio}
                    </Text>
                    <Text fontSize={12} color="coolGray.800" textDecorLine="line-through">
                      {" - " + item.descuento}
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
                  <Button>Comprar</Button>
                </VStack>
              </Box>
              <Box>
                <Image source={{ uri: item.imagen }} alt="Imagen" size="xl" mt={50} />
              </Box>
            </HStack>
          </Box>
        );
      }}
    </Pressable>
  ))}
</Box>
);
}

function MisbeneficiosScreen() {
    return (
      <NativeBaseProvider>
        <Center flex={1} px="3">
          <Misbeneficios />
        </Center>
      </NativeBaseProvider>
    );
  }
  
  export default MisbeneficiosScreen;
  