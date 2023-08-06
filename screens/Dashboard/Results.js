import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
const Results = () => {
  return (
    <View style = {styles.rootContainer}>

        <View style={styles.cardContainer}>
           <View style={{width:"62%",flexDirection:'column',justifyContent:"space-evenly",gap:10}}>
           <Text style={{color:"white",}}>FA-1 RESULT</Text>
           <Text style={{color:"white"}}>Your marks will appear after your exams</Text>
           </View>
           <View>
            <Button mode='contained' style={{borderRadius:5}} buttonColor="#C05CD3">View Results</Button>
           </View>
        </View>

        {/* <View style={styles.cardContainer}>
           <View style={{flexDirection:'column',justifyContent:"space-evenly",gap:10}}>
           <Text style={{color:"white",}}>FA-2 RESULT</Text>
            <Text style={{color:"white",}}>Total Marks : 135/175</Text>
           </View>
           <View>
            <Button mode='contained' style={{borderRadius:5}} buttonColor="#C05CD3">View Results</Button>
           </View>
        </View> */}

        {/* <View style={styles.cardContainer}>
           <View style={{flexDirection:'column',justifyContent:"space-evenly",gap:10}}>
           <Text style={{color:"white",}}>SA-1 RESULT</Text>
            <Text style={{color:"white"}}>Total Marks : 135/175</Text>
           </View>
           <View>
            <Button mode='contained' style={{borderRadius:5}} buttonColor="#C05CD3">View Results</Button>
           </View>
        </View> */}

        {/* <View style={styles.cardContainer}>
           <View style={{flexDirection:'column',justifyContent:"space-evenly",gap:10}}>
           <Text style={{color:"white",}}>SA-2 RESULT</Text>
            <Text style={{color:"white"}}>Total Marks : 135/175</Text>
           </View>
           <View>
            <Button mode='contained' style={{borderRadius:5}} buttonColor="#C05CD3D3">View Results</Button>
           </View>
        </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    rootContainer:{flex:1, justifyContent: "flex-start", alignItems:"center", padding:5,marginTop:10},
    cardContainer:{
        width:"96%",
        height:130,
        backgroundColor:"white",
        elevation:10,
        padding:5,
        marginTop:8,
        borderRadius:8,
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:"#5C8CD3"
    }
})
export default Results