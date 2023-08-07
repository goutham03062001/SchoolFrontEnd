import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import {Button,Card} from "react-native-paper"
const Notes = () => {
    return (
        <View style={styles.rootContainer}>
            <Image source={require("../../assets/Nothing.png")} style = {{width : 100,height:100}}/>
            <Text>No Quiz available now</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        padding:20,
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    }
})

export default Notes;
