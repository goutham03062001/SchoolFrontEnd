import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
const HelperComponent = ({inputText})=>{
  return(<>
    <Text style={{fontSize:16,lineHeight:25}}>{inputText}</Text>
  </>)
}

const OmissionOfPreposition = () => {
  return (
    <ScrollView>
    <View style={{paddingHorizontal:8,marginTop:15}}>
    <Text style={{fontSize:16}}>
    In some situations the Preposition is not used. There either it is not required, or it is omitted.
    </Text>
    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          inputText="(I) No Preposition is required before the object of a Transitive verb. As—"
        />
        <HelperComponent inputText="1. I shall meet you again. (‘meet with you’ is wrong.)"/>
        <HelperComponent inputText="2. They caught the thief. (‘caught to the thief’ is wrong.)"/>
        <HelperComponent inputText="3. I read a book. (‘read of a book’ is wrong.)"/>
        <HelperComponent inputText="4. We have done our work. (‘have done of our work’ is wrong.)"/>
      
    </View>

    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          inputText="(II) Before expressions of Place and Time no Preposition (for, from, in, on) is used. As—"
        />
        <HelperComponent inputText="1. I came here last week.(Not, ‘in last week’)"/>
        <HelperComponent inputText="2. I am going abroad.(Not, ‘for abroad’)"/>
        <HelperComponent inputText="3. Please wait a minute. (Not, ‘wait for a minute’)"/>
        <HelperComponent inputText="4. She is waiting outside.(Not, ‘waiting on outside’)"/>
      
    </View>


    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          inputText="(III) When some expressions of Time (as morning, evening, day, night, month, year, etc.)
have some qualifying words as this, that, next, every, last, all used before them, no Preposition is needed before them. As—
"
        />
        <HelperComponent inputText="1. He went this morning."/>
        <HelperComponent inputText="2. He met me last evening."/>
        <HelperComponent inputText="3. He is coming again next Sunday."/>
      
    </View>

    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          inputText="Note—But if these expressions of Time have no qualifying words before them, they take necessary Prepositions before them. As—"
        />
        <HelperComponent inputText="1. He went this morning."/>
        <HelperComponent inputText="2. He met me last evening."/>
        <HelperComponent inputText="3. He is coming again on Sunday."/>
      
    </View>

    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          inputText="(IV) No Preposition is required before yesterday, today, tomorrow. As—"
        />
        <HelperComponent inputText="1. Please come tomorrow. (not ‘on tomorrow’)"/>
        <HelperComponent inputText="2. He is returning today. (not ‘on today’)"/>
        <HelperComponent inputText="3. He came yesterday also. (not ‘on yesterday’)"/>
      
    </View>


    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          inputText="(V) No Preposition is used before Home. As—"
        />
        <HelperComponent inputText="1. I am going home. (not ‘to home’)"/>
        <HelperComponent inputText="2. I go home every Sunday. (not ‘to home’)"/>
        <HelperComponent inputText="Note—But if there is a Possessive Adjective before Home, or if Home is used in the sense of House, we use appropriate Preposition before it."/>
      
    </View>


    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          inputText="(VI) If two Verbs are to be used in a sentence, and both the verbs have to take different Prepositions, we must use appropriate Preposition for each verb separately. As—"
        />
        <HelperComponent inputText="1. I have been thinking about and waiting for you since the morning."/>
        <HelperComponent inputText="2. He has been looking for and enquiring after you for a long time."/>
      
    </View>
    </View>
    </ScrollView>
  )
}

export default OmissionOfPreposition

const styles = StyleSheet.create({})