import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image, View } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';


function Example() {

  
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('HomeScreen');
      };

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

  return <Center w="100%">
  <Image
        source={require('./../../assets/fondo.png')}
        alt="Fondo" // Ruta de la imagen de fondo
        style={{
          position: 'absolute',
          width: windowWidth,
          height: 900,
          resizeMode: 'cover',
        }} />
      <Box safeArea p="6" py="5" w="90%" maxW="290" bg="rgba(255, 255, 255, 0.6)" borderRadius={35}>
        <Image
          source={require('./../../assets/logo_pekokis.png')}
          alt="Fondo"
          m={10}
          style={{
          position: 'absolute',
          width: 200,
          height: 50,
          resizeMode: 'cover',
        }}
        />

        <VStack space={2} mt="5">
          <FormControl>
            <FormControl.Label >Correo Electronico</FormControl.Label>
            <Input bg="rgba(255, 255, 255, 0.6)" borderRadius={10}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" bg="rgba(255, 255, 255, 0.6)" borderRadius={10}/>
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Olvidaste tu Contraseña?
            </Link>
          </FormControl>
          <Button mt="2" bg={"#D32485"} onPress={handlePress}>
            Iniciar Sesion
          </Button>
          {/* Línea horizontal */}
        <View
          style={{
            borderBottomColor: '#1F3658',
            borderBottomWidth: 1,
            marginVertical: 10,
          }}
        />

          <TouchableOpacity
          style={{
            backgroundColor: '#db4a39', // Color de fondo de Google
            borderRadius: 0, // Forma cuadrada
            flexDirection: 'row', // Alinear el ícono y el texto horizontalmente
            alignItems: 'center', // Centrar verticalmente
            paddingHorizontal: 10, // Espacio horizontal
            paddingVertical: 5, // Espacio vertical
          }}
          >
          <Image
            alt="google"
            source={require('./../../assets/google.png')}
            style={{
              width: 24, // Ancho del ícono
              height: 24, // Alto del ícono
              marginRight: 10, // Espacio entre el ícono y el texto
            }}
          />
          <Text style={{ color: 'white' }}>Iniciar sesión con Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log('Iniciar sesión con Facebook')}
          style={{
            backgroundColor: '#4267B2', // Color de fondo de Facebook
            borderRadius: 0, // Forma cuadrada
            flexDirection: 'row', // Alinear el ícono y el texto horizontalmente
            alignItems: 'center', // Centrar verticalmente
            paddingHorizontal: 10, // Espacio horizontal
            paddingVertical: 5, // Espacio vertical
            marginTop: 10, // Espacio superior entre los botones
          }}
        >
          <Image
            alt="facebook"
            source={require('./../../assets/facebook.png')}
            style={{
              width: 24, // Ancho del ícono
              height: 24, // Alto del ícono
              marginRight: 10, // Espacio entre el ícono y el texto
            }}
          />
          <Text style={{ color: 'white' }}>Iniciar sesión con Google</Text>
        </TouchableOpacity>


          <HStack mt="2" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              Si eres nuevo.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Registrate
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };