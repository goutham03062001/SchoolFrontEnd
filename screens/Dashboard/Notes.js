import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import {Button,Card} from "react-native-paper"
const Notes = () => {
    return (
        <View style={styles.rootContainer}>
            <Text>Hello Quiz available now</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        padding:20
    }
})

export default Notes;
