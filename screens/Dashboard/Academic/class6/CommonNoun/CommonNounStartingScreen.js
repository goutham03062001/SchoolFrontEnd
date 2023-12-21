import { StyleSheet, Text, View,Dimensions ,Image} from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import BoldText from "../../utils/BoldText";
import UnderlineTextHelper from '../../Adverb/UnderlineTextHelper';
import { ScrollView } from 'react-native-gesture-handler';
const CommonNounStartingScreen = () => {
  return (
    <ScrollView>

    <View style={{paddingHorizontal:6,marginVertical:8}}>
      <Text style={{fontSize:16,lineHeight:26}}>The general name of a <BoldText text="person"/>,<BoldText text="animal"/>,<BoldText text="place"/> or <BoldText text="thing,"/> etc. is known as Common Noun </Text>

      <View style={{marginVertical:19,paddingHorizontal:8}}>
        <Text style={{fontSize:16,lineHeight:25}}>1. I am a <UnderlineTextHelper text="teacher"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>2. It is a <UnderlineTextHelper text="dog"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>3. This is a  <UnderlineTextHelper text="city"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>4. That's a  <UnderlineTextHelper text="laptop"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>5. Bring some <UnderlineTextHelper text="water"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>6. I joined a  <UnderlineTextHelper text="university"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>7. I'm going <UnderlineTextHelper text="home"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>8. Srimukhi has <UnderlineTextHelper text="courage"/></Text>
      </View>

      <View>
        <Text style={{fontSize:17,marginBottom:20}}>Types of Common Nouns: (Based on form)</Text>
        <Text style={{fontSize:16,marginBottom:20}}>Based on form, common nouns are classified into two categories:</Text>

      <Text style={{lineHeight:27,fontSize:16}}>  <BoldText text="1. Countable Nouns" fontSize={16}/></Text>
      <Text style={{lineHeight:27,fontSize:16}}>  <BoldText text="2. Uncountable Nouns" fontSize={16}/></Text>
     
      </View>

      <View>
        <Text style={{fontSize:17,marginBottom:20}}>Countable Nouns</Text>
        <Text style={{fontSize:16}}>Countable nouns have singular and plural forms</Text>

        <Text style={{fontSize:16,marginVertical:15}}>Examples</Text>
        <Text style={{fontSize:16}}>man - men</Text>
        <Text style={{fontSize:16}}>foot – feet</Text>
        <Text style={{fontSize:16}}>woman – women</Text>
        <Text style={{fontSize:16}}>mouse – mice</Text>
        <Text style={{fontSize:16}}>girl – girls</Text>
        <Text style={{fontSize:16}}>tooth – teeth</Text>
      </View>

      <View>
        <Text style={{fontSize:17,marginBottom:20}}>Uncountable Nouns</Text>
        <Text style={{fontSize:16}}>Uncountable nouns have no plural forms</Text>

        <Text style={{fontSize:16,marginVertical:15}}>Examples</Text>
        <Text style={{fontSize:16}}>rice</Text>
        <Text style={{fontSize:16}}>sand</Text>
        <Text style={{fontSize:16}}>oil</Text>
        <Text style={{fontSize:16}}>water</Text>
        <Text style={{fontSize:16}}>milk</Text>
        
      </View>
      <View style={{marginVertical:20}}>
      <Text style={{fontSize:17,marginBottom:20}}>Types of Common Nouns: (Based on meaning)</Text>
      <Text style={{fontSize:16,marginBottom:20}}>Based on the meaning, common nouns are classified into four categories</Text>

      <View style={{marginVertical:20}}>
        {/* Concrete noun */}
        <Text style={{fontSize:16}}>A concrete noun is a name of the thing that can be touched, seen, heard, tasted or smelled.</Text>
        <Text style={{marginTop:20,fontSize:16}}>1.There is a table.</Text>
        <Text style={{fontSize:16}}>2.The sun is very hot today.</Text>
        <Text style={{fontSize:16}}>3.Blow the horn please.</Text>
        <Text style={{fontSize:16}}>4.Have a coffee.</Text>
        <Text style={{fontSize:16}}>5.I like laddu.</Text>
      </View>

      <View>
        {/* Abstract Noun */}
        <Text style={{fontSize:17,marginBottom:20}}>Abstract Noun</Text>

        <Text style={{fontSize:16,marginVertical:15}}>An abstract noun is a name of the thing that can not be touched, seen, heard, smelled or tasted.</Text>

        <Text style={{fontSize:16,marginVertical:15}}>1. Death is inevitable.</Text>
        <Text style={{fontSize:16}}>2. Love is blind.</Text>
        <Text style={{fontSize:16}}>3. I have great faith in you.</Text>
        <Text style={{fontSize:16}}>4. They laughed at my idea.</Text>
        <Text style={{fontSize:16}}>5. Luck is the lost door to be opened by itself.</Text>
        <Text style={{fontSize:16}}>6. He struggled to find happiness in his life.</Text>
        <Text style={{fontSize:16}}>7. He was blessed with vivid imagination.</Text>
        <Text style={{fontSize:16}}>8. Are you suffering from pain?</Text>
        <Text style={{fontSize:16}}>9. We don’t have much sympathy for them.</Text>
        <Text style={{fontSize:16}}>10. Strength is life, weakness is death.</Text>
        
     
      </View>

      <View>
        {/* material noun */}
        <Text style={{fontSize:17,marginVertical:20}}>Material  Noun</Text>

        <Text style={{fontSize:16,marginVertical:15}}>A material Noun is the name of a material or substance out which things are made.</Text>

        <Text style={{fontSize:16,marginVertical:15}}>1. I have a cricket bat. (made of wood from the tree)</Text>
        <Text style={{fontSize:16}}>2. My brother has a mobile phone. (made of plastic and metal)</Text>
        <Text style={{fontSize:16}}>3. Your shirt has a button short.</Text>
        <Text style={{fontSize:16}}>4. The pen is out of ink.</Text>
        <Text style={{fontSize:16}}>5. This bottle is made of glass.</Text>
        <Text style={{fontSize:16}}>6. This sweater is made of wool.</Text>
        <Text style={{fontSize:16}}>7. He was blessed with vivid imagination.</Text>
        <Text style={{fontSize:16}}>8. A huge amount of meat is required for the wedding.</Text>
        <Text style={{fontSize:16}}>9. That nose pin is made of gold.</Text>
        <Text style={{fontSize:16}}>10. She spilled the milk by mistake. </Text>
        
      </View>

      <View>
      <View>
        {/* collective noun */}
        <Text style={{fontSize:17,marginVertical:20}}>Collective  Noun</Text>

        <Text style={{fontSize:16,marginVertical:15}}>A collective noun is the name of the collection of things or persons.</Text>

        <Text style={{fontSize:16,marginVertical:15}}>1. He ate a full bunch of grapes.</Text>
        <Text style={{fontSize:16}}>2. A huge crowd attended the concert</Text>
        <Text style={{fontSize:16}}>3. A flock of sheep is approaching.</Text>
        <Text style={{fontSize:16}}>4. A herd of elephants crossed the road.</Text>
        <Text style={{fontSize:16}}>5. We’re taking the whole brood to the movie tonight.</Text>
        <Text style={{fontSize:16}}>6. There was an angry mob outside the court</Text>
        <Text style={{fontSize:16}}>7. A pack of journalists was waiting outside.</Text>
 
        
      </View>
      </View>
      </View>
      </View>



      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Concrete Noun</Text>

            {/* <Image source={{uri:"https://img.icons8.com/ios-glyphs/30/FFFFFF/arrow.png"}} style={{width:20,height:16}}/> */}
        </Card.Content>
      </Card>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Abstract Noun</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Material Noun</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Collective Noun</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
    </ScrollView>
  )
}

export default CommonNounStartingScreen

const styles = StyleSheet.create({
    cardStyle:{
        marginVertical:10,
        width:"95%",
        marginHorizontal:(Dimensions.get("screen").width)/50,
        borderRadius:10,
        elevation:5
    },
    contentStyle:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around"
    }
})