import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StartingScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Notifications Screen</Text>
    </View>
  )
}

export default StartingScreen

const styles = StyleSheet.create({
  rootContainer:{flex:1,justifyContent:"center",alignItems:"center"}
})