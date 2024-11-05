import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Fundo from '../assets/images/fundo04.jpg'
import Font from '../assets/fonts/SpaceMono-Regular.ttf'
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <>
      <View>
        <Image source={Fundo} style={{ height: 600, width: 540, }}></Image>
      </View>
      <View style={style.card}>
        <Text style={{ fontSize: 20, color: '#F9CC7Dff' }}>
          Seja Bem-vindo ao Nox!
        </Text>
        <TouchableOpacity style={{ backgroundColor: '#F9CC7Dff', borderRadius: 15, }}>
         <Link push href={'/login'} style={style.textButton}>Entrar</Link>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: '#F9CC7Dff', borderRadius: 15, }}>
          <Text style={style.textButton}>Cadastrar</Text>
        </TouchableOpacity>


      </View>
    </>

  )
}


export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', }}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: '#070A07ff',
    width: 400,
    height: 255,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    position: 'relative',
    top: -70,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  textButton: {
    fontSize: 20,
    color: '#070A07ff',
    width: 150,
    height: 40,
    textAlign: 'center',
    padding:5
  }

})