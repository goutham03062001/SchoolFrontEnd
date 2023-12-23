import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';

const HelperComponent = ({sentence})=>{
  const sen = sentence.split(")");
  return(<>
  {sen.map((word,index)=>{
    return(<>
      <Text key={index} style={{fontSize:16}}>{index!== sen.length-1 ? word+")" : word}</Text>
    </>)
  })}
  </>)
}
const WrongUseOfPreposition = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:8}}>
      <Text style={{fontSize:16,lineHeight:25,textAlign:"justify"}}>
      There are some Verbs which take no Preposition after them. They are—
attack, await, accompany, assist, request, investigate, inform, obey, comprise, order, reach, resemble, resist, violate.

      </Text>
      <Text style={{fontSize:16,lineHeight:25,textAlign:"justify"}} >
      It is wrong to use any Preposition after the above noted verbs, but this error is often committed.
      </Text>

      <HelperComponent
        sentence="1. America attacked on Iraq. (no ‘on’)
2. I await for your instructions. (no ‘for’)
3. I shall accompany with you. (no ‘with’)
4. I shall assist to you. (no ‘to’)
5. I request to you. (no ‘to’)
6. We shall investigate into the case. (no ‘into’)
7. I shall inform to you. (no ‘to’)
8. I shall obey to you. (no ‘to’)
9. The group comprises of ten boys. (no ‘of’)
10. I order to you. (no ‘to’)
11. I reached at the station. (no ‘at’)
12. He resembles to you. (no ‘to’)
13. He will resist to you. (no ‘to’)
14. He violated to the rule. (no ‘to’)
"
      />
    </View>
    </ScrollView>
  )
}

export default WrongUseOfPreposition

const styles = StyleSheet.create({})