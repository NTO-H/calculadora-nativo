import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Boton } from './Atomicos';

const  imc=() =>{
  const [peso,setPeso]=useState=(0)
  const [altura,setAltura]=use
  return (
    <View>
      <Text>Calculadora imc</Text>
      <Text>Captura el peso</Text>
      <TextInput placeholder='Peso en kg'></TextInput>
  <Text>Captura estatura</Text>  <TextInput placeholder='Estatura en M'></TextInput>
<Boton
texto={'Calcular'}
/>
    </View>
  )
}

export default imc;