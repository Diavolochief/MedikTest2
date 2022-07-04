import { View, Text, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Register = () => {
    const navigation=useNavigation();


    registerComplete=()=>{

        navigation.navigate('login')
        

    }

    return (
        <View style={style.container}>
            <View>
                <Text style={style.titles}>Registrate</Text>
                <View style={style.register}>

                    <View style={style.reg}>
                        <TextInput
                            style={style.inpts}
                            placeholder='Ej...Maria'
                            maxLength={15}
                            label='Nombre'
                            placeholderTextColor={'black'}
                        // onChangeText={(texto) => setmed({ ...med, medicamento: texto })}
                        />
                        <TextInput
                            style={style.inpts}
                            placeholder='Ej...Maria'
                            maxLength={15}
                            label='Apellidos'
                            placeholderTextColor={'black'}
                        // onChangeText={(texto) => setmed({ ...med, medicamento: texto })}
                        />
                        <TextInput
                            style={style.inpts}
                            placeholder='Ej...Maria@Gmail.com'
                            maxLength={15}
                            keyboardType='email-address'
                            placeholderTextColor={'black'}
                            label='Correo'
                            lineColor='red'
                        // onChangeText={(texto) => setmed({ ...med, medicamento: texto })}
                        />
                        <TextInput
                            style={style.inpts}
                            placeholder='33135246656'
                            maxLength={10}
                            keyboardType='name-phone-pad'
                            placeholderTextColor={'black'}
                            label='Telefono'
               
                        // onChangeText={(texto) => setmed({ ...med, medicamento: texto })}
                        />

                    </View>
                    <Button style={style.btn} color='#ae6db499' mode="contained" onPress={() => registerComplete()}>
                        Registrarme
                    </Button>

                </View>


            </View>
        </View>
    )
}
const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fae4df',

    },
    titles: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    register: {
        width: '95%',
        height: '85%',
        backgroundColor: '#ae6db499',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 20


    },
    reg: {
        marginTop: 50,
        marginBottom:50
    },
    inpts: {
        marginHorizontal: 40,
        marginBottom: 10,
        color:'black',
        borderRadius:3,
        height:50
    },
    btn:{
        
        marginHorizontal:50
    }

})


export default Register