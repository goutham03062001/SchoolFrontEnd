import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PartsofSpeechStartingScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>
        Parts of Speech Content
      </Text>
    </View>
  )
}

export default PartsofSpeechStartingScreen

const styles = StyleSheet.create({
    rootContainer:{
        padding:8
    }
})