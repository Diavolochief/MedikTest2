import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Avatar, TextInput, Button } from 'react-native-paper'
import style from '../css/GlobalStyles'
import LinearGradient from 'react-native-linear-gradient'
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'



const Formulario = () => {

    const [med, setmed] = useState({
medicamento:'',
dosis:'',
tipo:'',
date:''
    })
    
    const navigation = useNavigation()


    const addData =  () => {
        
          navigation.navigate('Muestra')

}


    return (
        <>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#BEE4DE', '#17A09E', '#2186A5', '#17A09E', '#BEE4DE']}
                style={{ flex: 1, zIndex: -1 }}
            >

                <View>

                    <Avatar.Text
                        style={style.ava}
                        size={50}
                        label="Er"
                    />
                    <View>

                        <TextInput
                            style={style.inpts}
                            placeholder='Paracetamol.. ej'
                            maxLength={20}
                            label='Medicamento'
                            onChangeText={(texto) =>setmed({...med,medicamento:texto})}
                        />


                        <TextInput
                            style={style.inpts}
                            placeholder='Dosis ej. 1 pastilla...'
                            keyboardType='number-pad'
                            maxLength={9}
                            label='Dosis recetada'
                            
                            onChangeText={(texto) =>setmed({...med, dosis:texto})}                        />

                        <Picker
                            onChangeText={(texto) =>setmed({...med,tipo:texto})}
                        >

                            <Picker.Item label="---Seleccione---" />
                            <Picker.Item label="Inyectable" value='inyectable' />
                            <Picker.Item label="Tableta" value='tableta' />
                            <Picker.Item label="Grajea" value='grajea' />
                            <Picker.Item label="Untable" value='untable' />
                            <Picker.Item label="Gotero" value='gotero' />
                            <Picker.Item label="Otros" value='otro  ' />

                        </Picker>

                        <TextInput
                            style={style.inpts}
                            placeholder='HOLA'
                            maxLength={9}
                            onChangeText={(texto) =>setmed({...med,date:texto})}

                        />
                    </View>

                    <Button
                        onPress={()=>addData(med)}>
                    <Text>CArgar</Text></Button>








                </View>
            </LinearGradient>
        </>
    )
}



export default Formulario