import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
const AdverbsOfPlace = () => {
  return (
    <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}
      <Text style={{fontSize:17,marginVertical:20}}>Adverbs of Place: (where) </Text>

      <Text style={{fontSize:16,marginVertical:15}}>An adverb used to show where an action is done is known as an Adverb of place.</Text>
      <Text style={{fontSize:16,marginVertical:15}}>Adverb of place answers the question where?	</Text>
      
      <Text style={{fontSize:16,marginVertical:15}}>
      <BoldTextHelper
        text="Ex: Here, there, up, down, near, far, below, above, away, out, in, everywhere, backward, within, by, where, hence, thence, hither, thither, inside, outside, "
      />
      </Text>


      <Text style={{fontSize:16}}>1. He lives here.</Text>
      <Text style={{fontSize:16}}>2. She looked for him everywhere.</Text>
      <Text style={{fontSize:16}}>3. They went out.</Text>
      <Text style={{fontSize:16}}>4. I saw inside.</Text>
      <Text style={{fontSize:16}}>5. She went a movement ago.</Text>
      <Text style={{fontSize:16}}>6. It will be somewhere.</Text>
      <Text style={{fontSize:16}}>7. I found him nowhere.</Text>
      <Text style={{fontSize:16}}>8. They all went away.</Text>
      <Text style={{fontSize:16}}>9. I searched for it up and down.</Text>
      <Text style={{fontSize:16}}>10. It is near the shop.</Text>
      <Text style={{fontSize:16}}>11. There is a snake beneath the stone.	</Text>
      <Text style={{fontSize:16}}>12. Is Raju within?</Text>
      <Text style={{fontSize:16}}>13. Come in.</Text>

      
    </View>
  </View>
  );
};

export default AdverbsOfPlace;

const styles = StyleSheet.create({});
