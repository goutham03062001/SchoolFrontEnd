import { View, Text } from 'react-native'
import React from 'react'
import {Card} from "react-native-paper"
const ViewHomeWork = ({route}) => {
    const {data} = route.params;
  return (
    <View style={{marginTop:20,padding:10}}>
      {/* <Text>ViewHomeWork</Text> */}
     {data && <>
        <Card>
        <Card.Title
          title = {`Subject - ${data.subjectName}`}
          subtitle={`Date - ${new Date(data.date).toDateString()}`}
        />
        <Card.Content style = {{minHeight:100,justifyContent:"center",alignItems:"flex-start",marginTop:30}}>
           
            <Text style={{lineHeight:30,fontSize:16}}> {data.description}</Text>
            
        </Card.Content>
      </Card>
     </>}
    </View>
  )
}

export default ViewHomeWork