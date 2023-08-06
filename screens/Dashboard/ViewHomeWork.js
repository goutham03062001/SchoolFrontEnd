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
        <Card.Content style = {{minHeight:200,justifyContent:"center",alignItems:"flex-start",gap:20}}>
            <Text>Subject Name - {data.subjectName}</Text>
            <Text>Home work - {data.description}</Text>
        </Card.Content>
      </Card>
     </>}
    </View>
  )
}

export default ViewHomeWork