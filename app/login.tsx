import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Fundo from '../assets/images/fundo04.jpg'
import Font from '../assets/fonts/SpaceMono-Regular.ttf'
import { Link } from "expo-router";

const Login = () => {
  return (
    <>
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: 'white', fontSize: 30, }}>
          Acessar conta
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          <Text style={{ fontSize: 25, color: 'white' }}>Email</Text>
          <TextInput style={{ backgroundColor: '#070A07ff', width: 300, height: 40, borderRadius: 10, color: 'white' }} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25, color: 'white' }}>Senha</Text>
          <TextInput style={{ backgroundColor: '#070A07ff', width: 300, height: 40, borderRadius: 10, color: 'white' }} />
        </View>
        <View style={{ marginTop: 20, alignItems:'center' }}>
          <TouchableOpacity style={{backgroundColor:'#F9CC7Dff', borderRadius:10, alignItems:'center', width:150}}>
            <Text style={style.textButton}>
              Entrar
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </>






  )
}

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#282828' }}>
      <Login />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  textButton: {
    fontSize: 20,
    color: '#070A07ff',
    width: 150,
    height: 40,
    textAlign: 'center',
    padding: 5
  }

})