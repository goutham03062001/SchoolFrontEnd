import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'

const IntransitiveVerbs = () => {
  return (
   <ScrollView>
     <View style={{paddingHorizontal:8,marginTop:8}}>
      <Text style={{fontSize:17}}>Intransitive Verbs</Text>
      <Text style={{fontSize:16,marginVertical:10}}>
      “A Verb is Intransitive when the action stops with the agent, and does not pass from the agent to
anything else.” (Nesfield)

      </Text>
      <Text style={{fontSize:16}}>I sleep.</Text>

      <Text style={{fontSize:16,marginVertical:8}}>
      The sense of this sentence is complete. Its action does not pass on to any other thing. Therefore
it needs no object. An Intransitive Verb has no object.

      </Text>

      <View>
      <Text style={{fontSize:17}}>Transitive and Intransitive Verbs</Text>
      <Text style={{fontSize:16,marginVertical:10}}>
      Regarding Transitive and Intransitive verbs it is necessary to remember that most verbs are neither Transitive nor Intransitive in themselves.

      </Text>
      <Text style={{fontSize:16}}>
      This distinction depends upon their use. A Transitive verb can be used as an Intransitive verb, and an Intransitive verb can be used as a Transitive verb. Therefore Wren and Martin observe :
      </Text>

      <Text style={{fontSize:16,marginVertical:8}}>
      “Most Verbs can be used both as Transitive and as Intransitive Verbs. It is, therefore, better to say that a Verb is used Transitively or Intransitively rather than that it is Transitive or Intransitive.”

      </Text>
      </View>



      <View>
      <Text style={{fontSize:17}}>Transitive and Intransitive Use</Text>
      <Text style={{fontSize:16,marginVertical:10}}>
      As we have said above, most verbs can be used both as Transitive and Intransitive verbs. As—
      </Text>
      <Text style={{fontSize:18,fontWeight:"bold"}}>
Kinds of Verbs      </Text>

      <Text style={{fontSize:17,marginVertical:8}}>
      Transitive Use 
      </Text>

      <View>
        <Text  style={{fontSize:16}}>1. He speaks the truth. 	</Text>
        <Text style={{fontSize:16}}>2. I feel a severe pain in my backbone.	</Text>
        <Text style={{fontSize:16}}>3. He can drive any car. 	</Text>
        <Text style={{fontSize:16}}>4. Please ring the bell. 	</Text>
        <Text style={{fontSize:16}}>5. He stopped the bus. 	</Text>
        <Text style={{fontSize:16}}>6. They fought the enemy back.		</Text>
        <Text style={{fontSize:16}}>7. I read a book. 	</Text>
        <Text style={{fontSize:16}}>8. They drink country liquor. 	</Text>
        <Text style={{fontSize:16}}>9. Change your clothes. 	</Text>
        <Text style={{fontSize:16}}>10. He invited you. 		</Text>
      </View>



      <Text style={{fontSize:17,marginVertical:8}}>
      Intransitive Use 
      </Text>

      <View>
        <Text style={{fontSize:16}}>1. He speaks softly	</Text>
        <Text style={{fontSize:16}}>2. How does he feel now ?</Text>
        <Text style={{fontSize:16}}>3. He drives very cautiously.	</Text>
        <Text style={{fontSize:16}}>4. The bell rings.	</Text>
        <Text style={{fontSize:16}}>5. The bus stopped.</Text>
        <Text style={{fontSize:16}}>6. They fought bravely.</Text>
        <Text style={{fontSize:16}}>7. I read slowly.	</Text>
        <Text style={{fontSize:16}}>8. They drink country liquor. 	</Text>
        <Text style={{fontSize:16}}>9. They will never change.	</Text>
        <Text style={{fontSize:16}}>10. I was not invited		</Text>
      </View>
      </View>
    </View>
   </ScrollView>
  )
}

export default IntransitiveVerbs

const styles = StyleSheet.create({})