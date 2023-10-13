import {View,StyleSheet} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
const Drawer = createDrawerNavigator();
import ArticlesStartingScreen from './Articles/ArticlesStartingScreen';
import PartsofSpeechStartingScreen from './PartsofSpeech/PartsofSpeechStartingScreen';
import { Card } from 'react-native-paper';
function StartingScreen(){
    return(<>
        <Card style={styles.cardStyle}>
            <Card.Content>
                <Text>
                    Articles
                </Text>

                <Text>
                    Parts of Speech
                </Text>

               
            </Card.Content>

        </Card>
    </>)
}

function  SixthStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Class - 6" component={StartingScreen} />
      <Drawer.Screen name = "Articles" component={ArticlesStartingScreen}/>
      <Drawer.Screen name = "Parts of Speech" component={PartsofSpeechStartingScreen}/>
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
    cardStyle:{
        padding:10
    }
})

export default SixthStartingScreen;