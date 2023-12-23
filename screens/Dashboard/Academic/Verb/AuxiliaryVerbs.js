import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const AuxiliaryVerbs = () => {
  return (
 <ScrollView>
     <View style={{paddingHorizontal:8,marginTop:8}}>
      <Text style={{fontSize:17}}>Auxiliary / Modal Verbs</Text>
      <Text style={{fontSize:16,marginVertical:10}}>
      Auxiliary or Modal Verbs are also called Helping Verbs because they help the Principal
verb.

      </Text>

      <Text style={{fontSize:16,marginVertical:10}}>
      “An Auxiliary Verb is one which (a) helps to form a tense or mood of some Principal Verb,
and (b) forgoes its own significance as a Principal Verb for that purpose.” (Nesfield)
As—

      </Text>
      <Text style={{fontSize:16}}>He has gone.</Text>

      <Text style={{fontSize:16,marginVertical:8}}>
      In this sentence has is auxiliary verb and gone Principal Verb. Here has has helped the Principal Verb in making its Present Perfect Tense, and in so doing it has lost its own identity as a Principal verb.
      </Text>


      <View style={{marginVertical:15}}>
      <Text style={{fontSize:17,fontWeight:"bold"}}>
      Number of Auxiliary / Modal Verbs
      </Text>

      <Text style={{fontSize:16,marginTop:12}}>
      Auxiliary or Modal Verbs are 27 in number. They are :
am, is, are, was, were, have, has, had, will, shall, can,  would, should, could, may, might, must, do, does, did, ought, need, dare, used, be, been, being.
These verbs (excluding be, been, being) are also called Anomalous Verbs.

      </Text>
      </View>


      <View style={{marginVertical:15}}>
      <Text style={{fontSize:17,fontWeight:"bold"}}>
      Modal auxiliary verbs: 
      </Text>

      <Text style={{fontSize:16,marginTop:12}}>
      will, shall, can, would, should, could, may, might, must

      </Text>
      </View>

      <View style={{marginVertical:15}}>
      <Text style={{fontSize:17,fontWeight:"bold"}}>
      Quasi - modal auxiliary verbs
      </Text>

      <Text style={{fontSize:16,marginTop:12}}>
      ought to, need to, needs to, have to, has to, had to

      </Text>
      </View>
    </View>
 </ScrollView>
  )
}

export default AuxiliaryVerbs

const styles = StyleSheet.create({})