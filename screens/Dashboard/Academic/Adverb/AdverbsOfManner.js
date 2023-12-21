import { StyleSheet, Text, ScrollView,View } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
const AdverbsOfManner = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}
      <Text style={{fontSize:17,marginVertical:20}}>Adverbs of Manner: (How) </Text>

      <Text style={{fontSize:16,marginVertical:15}}>An adverb used to show how an action is done is known as an adverb of manner.</Text>
      <Text style={{fontSize:16,marginVertical:15}}>Adverb of manner answers the question ‘how’?</Text>
      
      <Text style={{fontSize:16,marginVertical:15}}>
      <BoldTextHelper
        text="Quickly, bravely, clearly, soundly, probably, happily, possibly, evidently, unfortunately, luckily, sadly, gracefully, beautifully, cheerfully, unwillingly, strongly, cowardly, slowly, nobly, lovingly, actively, "
      />
      </Text>


      <Text style={{fontSize:16}}>1. She wrote it well.</Text>
      <Text style={{fontSize:16}}>2. He fought bravely.</Text>
      <Text style={{fontSize:16}}>3. She is seriously ill.</Text>
      <Text style={{fontSize:16}}>4. I told him thus.</Text>
      <Text style={{fontSize:16}}>5. Rani smiles beautifully.</Text>
      <Text style={{fontSize:16}}>6. Do you think so?</Text>
      <Text style={{fontSize:16}}>7. She spent happily.</Text>
      <Text style={{fontSize:16}}>8. He reads clearly.</Text>
      <Text style={{fontSize:16}}>9. The story is well written.</Text>
      <Text style={{fontSize:16}}>10. The child slept soundly.</Text>
      <Text style={{fontSize:16}}>11. Is that so?</Text>
      <Text style={{fontSize:16}}>12. The boy works hard.</Text>
      <Text style={{fontSize:16}}>13. Thus only, you will succeed.	</Text>
      <Text style={{fontSize:16}}>14. She is extremely angry with me.</Text>

      <Text style={{fontSize:16}}>
      NOTE: This class includes nearly all those Adverbs which are derived from Adjectives and end in   _”ly”.
      </Text>
    </View>
  </View>
    </ScrollView>
  );
};

// An adverb used to show how an action is done is known as an adverb of manner.

// Adverb of manner answers the question ‘how’?

// Ex: Quickly, bravely, clearly, soundly, probably, happily, possibly, evidently, unfortunately, luckily, sadly, gracefully, beautifully, cheerfully, unwillingly, strongly, cowardly, slowly, nobly, lovingly, actively,

export default AdverbsOfManner;

const styles = StyleSheet.create({});
