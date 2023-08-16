import { View, Text } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
const BiologyLab = () => {
  const navigation = useNavigation();
  function LabHandler(inputLink){
    navigation.navigate("Virtual Lab",{data : inputLink});

  }
  return (
    <View>
      <List.Section title="Biology Lab Experiments" style={{gap:5}}>
        <List.Accordion title="Chapter -1   Human Body Parts">
          <List.Item title = "Human Brain"
            onPress = {()=>LabHandler("https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed")}
          />
          <List.Item title = "Human Heart"
            onPress = {()=>LabHandler("https://sketchfab.com/models/3f8072336ce94d18b3d0d055a1ece089/embed")}
          />
        </List.Accordion>

        <List.Accordion title="Chapter -2   Human Respiratory System">
          <List.Item title = "Lungs"
            onPress = {()=>LabHandler("https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed")}
          />
          <List.Item title = "Human Heart"
            onPress = {()=>LabHandler("https://sketchfab.com/models/3f8072336ce94d18b3d0d055a1ece089/embed")}
          />
        </List.Accordion>


        <List.Accordion title="Chapter -3   Digestive System">
          <List.Item title = "Stomach"
            onPress = {()=>LabHandler("https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed")}
          />
         
        </List.Accordion>
      </List.Section>
    </View>
  )
}

export default BiologyLab