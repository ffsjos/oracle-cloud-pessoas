//rnfes

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PessoaAddComponent from '../componentes/PessoaAddComponent'

const PessoaAddTela = ({navigation}) => {
  return (
    <View>
      <PessoaAddComponent navigation={navigation}/>
    </View>
  )
}

export default PessoaAddTela

const styles = StyleSheet.create({})