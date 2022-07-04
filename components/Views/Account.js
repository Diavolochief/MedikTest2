import React from 'react'
import { SafeAreaView, View, ImageBackground, StyleSheet, Text, ScrollView, TouchableOpacity, } from 'react-native'
import { Avatar, Button, Card, TextInput } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'


const Account = () => {
  const navigation = useNavigation();

  const registrar = () => {
    navigation.navigate('Register')
  }

  const logIn = () => {
    navigation.navigate('login')
  }

  const imgd = require('../assets/jeringuilla.png')
  return (
    <View style={styles.container}>
      <ImageBackground imageStyle={{ height: 400 }} source={imgd} style={styles.image}>





      </ImageBackground>
      <View>


        <Card style={styles.card}>
          <Card.Actions>
            <View style={styles.btns}>
              <Button mode='outlined' color='white' style={styles.btn} onPress={() => registrar()}>Sign In</Button>
              <Button mode='outlined' color='white' style={styles.btn} onPress={() => logIn()}>Log In</Button>
            </View> 
          </Card.Actions>
          <View style={styles.txt}>
            <Text>Medikt</Text>
          </View>
        </Card>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    backgroundColor: '#fae4df'

  }, txt: {
    alignItems: 'center',
    justifyContent: 'center'
    ,
  },
  image: {
    flex: 1,
    top: 10,
    transform: [{ rotate: '15deg' }],
    marginLeft: 50

  },
  text: {
    color: "white",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  btns: {
    flexDirection: 'row',
    marginBottom: 50

  },
  btn: {
    textDecorationColor: 'white',
    top: 30,
    paddingHorizontal: 20,
    marginHorizontal: 20
  },
  card: {
    marginHorizontal: 5,
    height: 190,
    marginTop: 60,
    backgroundColor: '#ae6db490',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Account