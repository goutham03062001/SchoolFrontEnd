import { View, Text, ScrollView,Alert } from 'react-native'
import React,{useEffect,useState} from 'react';
import { List } from 'react-native-paper';
import {WebView} from "react-native-webview";
import ViewLabExperiments from './ViewLabExperiments';
import { useNavigation } from '@react-navigation/native';
const PhysicsLab = () => {
    // const[labLink,setLabLink] = useState("https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html");
    const navigation = useNavigation();


      
    function LabHandler(inputLink){
        // updateLink(inputLink)
        navigation.navigate("Virtual Lab",{data : inputLink});
    }
  return (
    <ScrollView>
        <View>
        <List.Section title='Physics Lab Experiments' style={{gap:5}}>
            <List.Accordion
            title="Chapter-1    Reflection Of Light At Curved Surfaces">
                <List.Item title="Observing the types of images & measuring of object distances"
                    onPress = {(e)=>LabHandler("https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html")}
                />
                <List.Item title="6 Ray Diagrams"/>
                <List.Item title="Solar Cooker"/>
            </List.Accordion>

            <List.Accordion
            title="Chapter-2    Refraction Of Light At Curved Surfaces">
                <List.Item title="Types Of Lens"/>
                <List.Item title = "Refraction Experiment"
                    onPress = {(e)=>LabHandler("https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_all.html")}
                />
            </List.Accordion>

            <List.Accordion
            title="Chapter-3    Chemical Equations">
                <List.Item title="Balancing Chemical Equations"/>
            </List.Accordion>

            <List.Accordion
            title="Chapter-4    Acid Bases Salts">
                <List.Item title="Acids"/>
                <List.Item title="Bases"/>
                <List.Item title="Salts"/>
                <List.Item title = "Experiment"
                    onPress = { (e)=>LabHandler("https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_all.html") }
                />
            </List.Accordion>

            <List.Accordion
            title="Chapter-5    ElectroMagnetism">
                <List.Item title="Electric Motor"/>
                <List.Item title="Electric Generator"
                    onPress={LabHandler}
                />
                <List.Item title="Solenoid"/>
            </List.Accordion>

        </List.Section>
    </View>
    </ScrollView>
  )
}

export default PhysicsLab