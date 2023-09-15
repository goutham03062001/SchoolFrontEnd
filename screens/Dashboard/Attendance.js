import { View, StyleSheet, ScrollView } from "react-native";
import React,{useContext} from "react";
import { Card, Button, List, Avatar, Text } from "react-native-paper";
import { AuthContext } from '../../context/AuthContext';

function CardComponent({ month, percentage, d, p, a }) {
  return (
    <>
      <Card style={{ marginTop: 6 }}>
        
        <Card.Content>
         <View style={{width:"100%",height:45,flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
         <View style = {{width:"45%"}}>
          <Text>{month}</Text>
         </View>
         <View style={{width:"55%",height:"100%",flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
          <Text style={{color:"blue",fontWeight:'800'}}>D - {d}</Text>
          <Text style={{color:"green",fontWeight:"800"}}>P - {p}</Text>
          <Text style={{color:"red",fontWeight:"900"}}>A - {a}</Text>
         </View>
         </View>
        </Card.Content>
      </Card>
    </>
  );
}
const Attendance = () => {
  const authContext = useContext(AuthContext);
  return (
    <ScrollView>
      <View style={styles.rootContainer}>

       {authContext && authContext.currentLoggedInStudent.Attendance.length>0 ? (<>
        <View>
          {
            authContext.currentLoggedInStudent.Attendance.map((item,key=item._id)=>(<>
             <CardComponent key={item._id} month = {item.month} d = {item.workingDays} p = {item.presentDays} a = {item.absentDays}/>
            </>))
          }
        </View>
       </>) : <Text>Your Attendance is not yet uploaded</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 10,
  },
});

export default Attendance;
