import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UnderlineTextHelper = ({text,fontSize}) => {
  return (
   
      <Text style={{textDecorationLine:"underline",fontWeight:"bold"}}>{text}</Text>
 
  )
}

export default UnderlineTextHelper

const styles = StyleSheet.create({})