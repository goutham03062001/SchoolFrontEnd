import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
const ArticlesStartingScreen = () => {
  return (
    <View style={styles.rootContainer}>
     <Card>
        <Card.Content>
            <Text>A</Text>
        </Card.Content>
     </Card>

     <Card>
        <Card.Content>
            <Text>An</Text>
        </Card.Content>
     </Card>

     <Card>
        <Card.Content>
            <Text>THE</Text>
        </Card.Content>
     </Card>
    </View>
  )
}

export default ArticlesStartingScreen

const styles = StyleSheet.create({
    rootContainer:{
        padding:5,
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"flex-start",
        marginTop:50,
        gap:10
    }
})