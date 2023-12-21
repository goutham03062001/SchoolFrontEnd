import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const AdverbOfReason = () => {
  return (
    <>
      <View style={{paddingHorizontal:7}}>
      <View>
        {/* collective noun */}
        <Text style={{fontSize:17,marginVertical:20}}>Adverbs of Reason</Text>

        
        <Text style={{fontSize:16,marginVertical:15}}>
        <BoldTextHelper
          text="Ex: Owing to, due to, consequently, hence, therefore, "
        />
        </Text>


        <Text style={{fontSize:16}}>1. Due to bad weather, the match has been postponed.</Text>
        <Text style={{fontSize:16}}>2. Hence I request you to allow me to go home.</Text>
        <Text style={{fontSize:16}}>3. It was raining heavily; therefore, we stayed in the house.</Text>
        
        
      </View>
    </View>
    </>
  )
}

export default AdverbOfReason

const styles = StyleSheet.create({})