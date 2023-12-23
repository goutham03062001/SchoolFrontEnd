import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const DataComponent = ({first,second,third})=>{
  return(<>
    <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:5,alignItems:"flex-start",marginTop:15}}>
          {/* body content */}
          <View style={{fontSize:15,width:"28%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"}}>
            <Text>{first}</Text>
          </View>
          <View style={{fontSize:15,width:"28%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
            <Text>{second}</Text>
          </View>
          <View style={{fontSize:15,width:"30%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
            <Text>{third}</Text>
          </View>
        </View>
  </>)
}
const VerbForms = () => {
  return (
   <ScrollView>
     <View style={{paddingHorizontal:8,}}>
      <Text style={{fontSize:16,marginVertical:5}}>Base : Come</Text>
      <Text style={{fontSize:16,marginVertical:5}}>Present Form: Comes</Text>
      <Text style={{fontSize:16,marginVertical:5}}>Past Form: came</Text>
      <Text style={{fontSize:16,marginVertical:5}}>Past Participle : come</Text>
      <Text style={{fontSize:16,marginVertical:5}}>Present Participle : coming</Text>
   
      <View>
        <Text style={{fontSize:16,marginVertical:5}}>
        Below is a list of irregular verbs.
        </Text>
      </View>


      <View style={{marginVertical:15}}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          {/* headings */}
          <Text style={{fontSize:17,fontWeight:"500"}}>Base Form</Text>
          <Text style={{fontSize:17,fontWeight:"500"}}>Past Form</Text>
          <Text style={{fontSize:17,fontWeight:"500"}}>Past Participle</Text>
        </View>

      <DataComponent first="Arise" second="arose" third="arisen"/>
      <DataComponent first="Awake " second="awoke" third="awoken"/>
      <DataComponent first="Bear " second="bore" third="born"/>
      <DataComponent first="Beat " second="beat" third="beaten"/>
      <DataComponent first="Become " second="became" third="become"/>
      <DataComponent first="Begin " second="began" third="begun"/>
      <DataComponent first="Bite " second="bit" third="bitten"/>
      <DataComponent first="Blow" second="blew" third="blown"/>
      <DataComponent first="" second="" third=""/>
      <DataComponent first="" second="" third=""/>
      <DataComponent first="" second="" third=""/>
      <DataComponent first="" second="" third=""/>
      
      </View>
    </View>
   </ScrollView>
  )
}

export default VerbForms

const styles = StyleSheet.create({})