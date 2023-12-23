import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TransitiveVerbs = () => {
  return (
    <View style={{paddingHorizontal:8,marginTop:8}}>
      <Text style={{fontSize:17}}>TransitiveVerbs</Text>
      <Text style={{fontSize:16,marginVertical:10}}>
      A Verb is Transitive if the action does not stop with the agent, but passes from the agent to something else.” (J. C. Nesfield)
      </Text>
      <Text style={{fontSize:16}}>I read a book.</Text>

      <Text style={{fontSize:16,marginVertical:8}}>
      In this sentence the sense is not complete with ‘I read’ only, until it is known what I read. The sense is complete only when we say “I read a book”. The action, thus, passes on to the book. In this way the Person or Thing with which the action of the verb ends is called its Object. A Transitive Verb must have its Object.
      </Text>
    </View>
  )
}

export default TransitiveVerbs

const styles = StyleSheet.create({})