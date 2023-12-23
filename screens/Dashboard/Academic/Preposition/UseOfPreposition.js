import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const HelperComponent = ({inputText})=>{
  return(<>
    <Text style={{fontSize:16,lineHeight:25}}>{inputText}</Text>
  </>)
}

const UseOfPreposition = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:8}}>
      <Text style={{fontSize:16}}>Generally Prepositions are used before their objects.</Text>
    
      <View style={{marginVertical:15}}>
        <HelperComponent
          inputText="1. The book is on the table."
        />
         <HelperComponent
          inputText="2. He is in his office."
        />
         <HelperComponent
          inputText="3. He is fond of tea."
        />
         <HelperComponent
          inputText="4. She comes from Delhi."
        />
      <Text style={{fontSize:16,marginVertical:15,lineHeight:26,textAlign:"justify"}}>
      In the above sentences on, in, of, from are Prepositions and they have all been used before their objects (table, office, tea, Delhi). A Preposition may have two or more than two objects. The Preposition will be used before the first of all these objects. As—
      </Text>

      <HelperComponent
          inputText="1. The cattle graze in valleys and pastures."
        />

    <HelperComponent
          inputText="2. She is very fond of grapes, apples and oranges."
        />

        <Text style={{fontSize:16,marginVertical:8}}>
        But in the following conditions Preposition is used after the Object—
        </Text>
       <View>
       {/* I */}
       <HelperComponent
          inputText="(I) When the object is Relative Pronoun ‘that’, the Preposition is placed at the end of the sentence. As—"
        />
        <HelperComponent inputText="1. This is the book that you asked for."/>
        <HelperComponent inputText="2. That is the car that you travelled by."/>
        <HelperComponent inputText="3. I know the man that you were talking to."/>
      
       </View>


       <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          inputText="(II) Also when the object is some understood (hidden) Relative Pronoun, the Preposition
is placed at the end of the sentence. As—
"
        />
        <HelperComponent inputText="1. That is the house I lived in. (In this sentence Relative Pronoun ‘that’ or ‘which’ is understood at the point marked )"/>
        <HelperComponent inputText="2. That is the man (whom) I was speaking of."/>
        <HelperComponent inputText="3. There is the book (that) you were looking for."/>
      
       </View>

       <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          inputText="(III) When the object is an Interrogative Pronoun (who/whom/what/which), the Preposition is placed at the end of the sentence. As—
"
        />
        <HelperComponent inputText="1. What are you looking at ?"/>
        <HelperComponent inputText="2. What are you thinking of ?"/>
        <HelperComponent inputText="3. Which of these houses do you live in ?"/>
        <HelperComponent inputText="4. Whom are you going with ?"/>
      
       </View>


       <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          inputText="(IV) Sometimes for the sake of emphasis the object is placed at the beginning of the sentence.
In that case also the Preposition is placed at the end of the sentence. As—

"
        />
        <HelperComponent inputText="1. Him I depend on."/>
        <HelperComponent inputText="2. This I insist on."/>
        <HelperComponent inputText="3. That you must speak out."/>
      
       </View>


       <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          inputText="(V) In the Passive Voice also the Preposition is placed at the end of the sentence.

"
        />
        <HelperComponent inputText="1. He can be relied upon."/>
        <HelperComponent inputText="2. Was the proposal agreed to ?"/>
      
       </View>
      </View>
   
    </View>
    </ScrollView>
  )
}

export default UseOfPreposition

const styles = StyleSheet.create({})