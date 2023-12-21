import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";

const AdverbsOfTime = () => {
  return (
    <View style={{paddingHorizontal:7}}>
      <View>
        {/* collective noun */}
        <Text style={{fontSize:17,marginVertical:20}}>Adverbs of Time</Text>

        <Text style={{fontSize:16,marginVertical:15}}>(When) An adverb used to show when an action is down is known as an adverb of time.</Text>
        <Text style={{fontSize:16,marginVertical:15}}>**Adverb of time answers the question when?	**</Text>
        
        <Text style={{fontSize:16,marginVertical:15}}>
        <BoldTextHelper
          text="Ex: Now, then, today, tomorrow, day after tomorrow, early, soon, still, yet, before, late, ago, lately, daily, already, never, since, formerly, yesterday, presently, instantly, immediately, afterwards, when, whenever"
        />
        </Text>


        <Text style={{fontSize:16}}>1. He came very late..</Text>
        <Text style={{fontSize:16}}>2. I shall go there tomorrow.</Text>
        <Text style={{fontSize:16}}>3. You must get up early.</Text>
        <Text style={{fontSize:16}}>4. I have seen him before.</Text>
        <Text style={{fontSize:16}}>5. She went a movement ago.</Text>
        <Text style={{fontSize:16}}>6. . Let him start now.</Text>
        <Text style={{fontSize:16}}>7. He comes here daily.</Text>
        <Text style={{fontSize:16}}>8. I have told him already.</Text>
        <Text style={{fontSize:16}}>9. He will come soon.</Text>
        <Text style={{fontSize:16}}>10. They always go to church.</Text>
        <Text style={{fontSize:16}}>11. He kicked me yesterday.</Text>
        <Text style={{fontSize:16}}>12. She is doing her work then.</Text>
        <Text style={{fontSize:16}}>13. That day he arrived late.</Text>
        <Text style={{fontSize:16}}>14. Wasted time never returns.</Text>
 
        
      </View>
    </View>
  );
};

export default AdverbsOfTime;

const styles = StyleSheet.create({});
