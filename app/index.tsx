import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Fundo from '../assets/images/fundo.jpg'

const Login = () => {
  return (
    <>
      <View>
        <Image source={Fundo} style={{ height: 600, width: 540 }}></Image>
      </View>
      <View style={style.card}>
        <Text style={{ padding: 10, fontSize: 20, color: '#F9CC7Dff' }}>
          Seja Bem-vindo ao Nox!
        </Text>
        
        <View style={{justifyContent:'space-evenly', alignItems:'flex-end'}} >
          <TouchableOpacity style={{ backgroundColor: '#F9CC7Dff', borderRadius: 5 }}>
            <Text style={{ fontSize: 20, color: '#070A07ff', width: 150, textAlign: 'center' }}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: '#F9CC7Dff', borderRadius: 5 }}>
            <Text style={{ fontSize: 20, color: '#070A07ff', width: 150, textAlign: 'center' }}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>

  )
}


export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Login />

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: '#070A07ff',
    width: 400,
    height: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    position: 'relative',
    top: -70
  }
})