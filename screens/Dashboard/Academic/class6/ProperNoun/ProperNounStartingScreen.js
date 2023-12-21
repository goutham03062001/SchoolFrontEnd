import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import BoldTextHelper from '../../Adverb/BoldTextHelper';
const ArticlesStartingScreen = () => {
 
  return (
    <View style={styles.rootContainer}>
     
     <Text style={{textAlign:"center",fontSize:18,color:"red"}}>Reading</Text>

      <Text style={{fontSize:16,lineHeight:25,textAlign:"justify",padding:6}}>Special names given to <BoldTextHelper text="people"/>,  <BoldTextHelper text="places"/>,  <BoldTextHelper text="pets"/>, <BoldTextHelper text="days"/>, <BoldTextHelper text="months"/> and <BoldTextHelper text="organizations,"/> etc are called proper nouns.</Text>

      <View style={{marginVertical:20,gap:10}}>
      <Text style={{fontSize:16,fontFamily:"Arial"}}>1. <BoldTextHelper text="Venkatadri"/> sir and <BoldTextHelper text="Mathin"/> sir are my English gurus.</Text>
      <Text style={{fontSize:16}}>2. <BoldTextHelper text="Delhi"/> is the capital of India</Text>
      <Text style={{fontSize:16}}>3. <BoldTextHelper text="Tommy"/> is my pet dog.</Text>
      <Text style={{fontSize:16}}>4. Today is <BoldTextHelper text="Sunday"/></Text>
      <Text style={{fontSize:16}}>5.I work in  <BoldTextHelper text="Spring Fields High School."/></Text>
      <Text style={{fontSize:16}}>6. My friend Raju lives in <BoldTextHelper text="New Zealand"/></Text>
      <Text style={{fontSize:16}}>7. The  <BoldTextHelper text="Ganges"/> is a river.</Text>
      <Text style={{fontSize:16}}>8. My School is on  <BoldTextHelper text="Rastrapathi Road"/></Text>
      <Text style={{fontSize:16}}>9. My friend Raju lives in <BoldTextHelper text="New Zealand"/></Text>
      <Text style={{fontSize:16}}>10. The  <BoldTextHelper text="Everest"/> is a mountain</Text>
      <Text style={{fontSize:16}}>11.  <BoldTextHelper text="Dasera"/> falls in october</Text>
      
      </View>
    </View>
  )
}

export default ArticlesStartingScreen

const styles = StyleSheet.create({
    rootContainer:{
        padding:5,
        flex:1,
        
    }
})