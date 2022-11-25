import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'


const Formulario = () => {
  return (
   <view>
    <View>

        <Text>Altura (m)</Text>
        <TextInput 
        placeholder="Ex: 1.72"
        keyboardType="numeric"
        />
        <text>Peso (kg)</text>
        <TextInput 
        placeholder="Ex: 80.5"
        keyboardType="numeric"
        />

    </View>
   </view>
  )
}

export default Formulario

const styles = StyleSheet.create({})