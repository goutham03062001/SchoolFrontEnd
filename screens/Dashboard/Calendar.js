import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import {Card,Button} from "react-native-paper";

function CardComponent({title,event,bgColor}){
    return(<>
<Card style={{marginVertical:5, backgroundColor:bgColor, borderRadius:2}}>
      <Card.Title title={title}/>
        <Card.Content>
           <Text style={{color:"#001",fontWeight:300}}>Events - {event}</Text>
        </Card.Content>
      </Card>
    </>)
}
const Calendar = () => {
  return (
    <ScrollView>
        <View style={styles.rootContainer}>
      
      <CardComponent title="June" event="School Opening on 12" bgColor="#cdb4db"/>
      <CardComponent title="July" event="Mahankali Festival " bgColor="#00b4d8"/>
      <CardComponent title="August" event="FA-1 Exams & Independence Day on 15" bgColor="#b8c0ff"/>
      <CardComponent title="September" event="Teacher's Day" bgColor="#a9def9"/>
      <CardComponent title="October" event="FA-II Exams & Gandhi Jayanthi & Dussera" bgColor="#ffe45e"/>
      <CardComponent title="November" event="Children's Day, Diwali" bgColor="#ffb5a7"/>
      <CardComponent title="December" event="Christamas" bgColor="#a09abc"/>
      <CardComponent title="January" event="Sankranthi" bgColor="#e0aaff"/>
      <CardComponent title="February" event="Shivarathri" bgColor="#bfdbf7"/>
      <CardComponent title="March" event="Ugadi" bgColor="#ff5e5b"/>
      <CardComponent title="April" event="Annual Exams, Half days" bgColor="#d8d8d8"/>
    
  </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    rootContainer:{
        padding:10
    }
})
export default Calendar