import { View, Text,ScrollView,StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const Classes = () => {
  const navigation = useNavigation();
  return (
   <ScrollView style={{backgroundColor:"#DED0B6"}}>
     <View style={{flex:1,width:"100%",height:"100%",flexDirection:"column",justifyContent:"flex-start"}}>
     
       <View style={styles.rootContainer}>

        <Pressable onPress={()=>navigation.navigate("Noun's")}>
        <Card style={{backgroundColor:"#FFDE7D"}}>
        <Card.Content>
            <Text style={{color:"black",fontSize:16,textAlign:"center",textAlign:"center"}}>Noun</Text>
        </Card.Content>
      </Card>
        </Pressable>

     <Pressable onPress={()=>navigation.navigate("Pronoun")}>
     <Card style={{backgroundColor:"#435585"}}>
        <Card.Content>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Pronoun</Text>
        </Card.Content>
      </Card>
     </Pressable>

      <Pressable onPress={()=>navigation.navigate("Adjective")}>
      <Card style={{backgroundColor:"#6C5B7B"}}>
        <Card.Content>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Adjective</Text>
        </Card.Content>
      </Card>
      </Pressable>

      <Pressable onPress={()=>navigation.navigate("Adverb")}>
      <Card style={{backgroundColor:"#A084E8"}}>
        <Card.Content>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Adverb</Text>
        </Card.Content>
      </Card>
      </Pressable>
<Pressable onPress={()=>navigation.navigate("Preposition")}>
  
<Card style={{backgroundColor:"#00ADB5"}}>
        <Card.Content>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Preposition</Text>
        </Card.Content>
      </Card>
</Pressable>


      <Card style={{backgroundColor:"#6A2C70"}}>
        <Card.Content>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Conjunction</Text>
        </Card.Content>
      </Card>

      <Pressable onPress={()=>navigation.navigate("Verb")}>
      <Card style={{backgroundColor:"#0F4C75"}}>
        <Card.Content>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Verb</Text>
        </Card.Content>
      </Card>
      </Pressable>

      <Card style={{backgroundColor:"#594545"}}>
        <Card.Content>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Non-Finite Verbs</Text>
        </Card.Content>
      </Card>

      <Card style={{backgroundColor:"#40514E"}}>
        <Card.Content>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Question Tags</Text>
        </Card.Content>
      </Card>

      <Card style={{backgroundColor:"#2B2E4A"}}>
        <Card.Content>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Subject-Verb Agreement</Text>
        </Card.Content>
      </Card>

     <Pressable onPress={()=>navigation.navigate("Articles")}>
     <Card style={{backgroundColor:"#903749"}}>
        <Card.Content>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Articles</Text>
        </Card.Content>
      </Card>
     </Pressable>

      <Card style={{backgroundColor:"#53354A"}}>
        <Card.Content>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Determines</Text>
        </Card.Content>
      </Card>

      <Card style={{backgroundColor:"#6C5B7B"}}>
        <Card.Content>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Modifiers</Text>
        </Card.Content>
      </Card>

     <Pressable onPress={()=>navigation.navigate("Active And Passive Voice")}>
     <Card style={{backgroundColor:"#FFDE7D"}}>
        <Card.Content>
            <Text style={{color:"black",textAlign:"center",fontSize:16}}>Active Voice Passive Voice</Text>
        </Card.Content>
      </Card>
     </Pressable>
      <Card style={{backgroundColor:"#610C9F"}}>
        <Card.Content>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Question Tags</Text>
        </Card.Content>
      </Card>

      <Card style={{backgroundColor:"#435585"}}>
        <Card.Content>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Direct and Indirect Speech</Text>
        </Card.Content>
      </Card>

    </View>
       
    </View>
   </ScrollView>
  )
}

export default Classes

const styles = StyleSheet.create({
  rootContainer:{
      padding:10,
      gap:15,
  }
})