import { View, Text,ScrollView,StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const Classes = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1,backgroundColor:"brown"}}>
       <ScrollView>
       <View style={styles.rootContainer}>

        <Pressable onPress={()=>navigation.navigate("Class 6")}>
        <Card style={{backgroundColor:"yellow"}}>
        <Card.Content>
            <Text>CLASS - 6</Text>
        </Card.Content>
      </Card>
        </Pressable>

      <Card style={{backgroundColor:"#E4F1FF"}}>
        <Card.Content>
            <Text>CLASS - 7</Text>
        </Card.Content>
      </Card>

      <Card style={{backgroundColor:"#8CABFF"}}>
        <Card.Content>
            <Text style={{color:"white"}}>CLASS - 8</Text>
        </Card.Content>
      </Card>

      <Card style={{backgroundColor:"#A084E8"}}>
        <Card.Content>
            <Text style={{color:"white"}}>CLASS - 9</Text>
        </Card.Content>
      </Card>

      <Card style={{backgroundColor:"#61677A"}}>
        <Card.Content>
            <Text style={{color:"white"}}>CLASS - 10</Text>
        </Card.Content>
      </Card>
    </View>
       </ScrollView>
    </View>
  )
}

export default Classes

const styles = StyleSheet.create({
  rootContainer:{
      padding:10,
      gap:15,
  }
})