import { View, Text,StyleSheet,Image,Pressable } from 'react-native'
import React from 'react'
import {Card} from "react-native-paper"
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Dashboard = () => {
    const navigation = useNavigation();
    function CompetitiveNavFun(){
        navigation.navigate("Competitive")
    }
    function AcademicNavFun(){
        navigation.navigate("Academic")
    }
  return (
    <View style={styles.rootContainer}>
        <Pressable
        onPress={AcademicNavFun}>
        <Card style={styles.cardStyle}>
            <Card.Content style={styles.cardInnerStyle}>
            <Image source={require("../../assets/academic.jpg")}
                    style={{width:"99%",height:"99%",borderRadius:10}}
                />
            </Card.Content>
        </Card>
        </Pressable>

       <Pressable
       onPress={CompetitiveNavFun}>
       <Card style={[styles.cardStyle,{backgroundColor:"#662549"}]}>
            <Card.Content style={styles.cardInnerStyle}>
                <Image source={require("../../assets/Competitive.jpg")}
                    style={{width:"99%",height:"99%",borderRadius:10}}
                />
            </Card.Content>
        </Card>
       </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:"center",
        gap:30
    },
    cardStyle:{
        width:(Dimensions.get('window').width - 20),
        height:200,
        backgroundColor:"#27005D"
    },
    cardInnerStyle:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Dashboard