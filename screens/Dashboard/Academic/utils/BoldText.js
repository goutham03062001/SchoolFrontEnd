import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoldTextHelper = ({text,fontSize}) => {
  return (
    
      <Text style={{fontWeight:"bold"}}>{text}</Text>
    
  )
}

export default BoldTextHelper

const styles = StyleSheet.create({})