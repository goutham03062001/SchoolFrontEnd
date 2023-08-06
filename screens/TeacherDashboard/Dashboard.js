import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React,{useContext,useEffect} from 'react'
import { styles } from '../Dashboard/css/DashboardStyling'
import {Card,Button} from "react-native-paper";
import { AuthContext } from '../../context/AuthContext';
const Dashboard = () => {
    const authContext = useContext(AuthContext);
    const currMobile = authContext.currentFacultyMobile;
    useEffect(()=>{
        authContext.getCurrentFacultyDetails(currMobile);
    },[currMobile])

  return (
    <SafeAreaView style = {styles.rootContainer}>
     <View style={{marginTop:40}}>
            <Card>
                <Card.Content>
                    {authContext.currentFacultyDetails && (
                        <>
                            {authContext.currentFacultyDetails.map((item,key=item.Name)=>(
                                <View key={key}>
                                    <Text>Name - {item.Name}</Text>
                                    <Text>Mobile - {item.mobile}</Text>
                                    <Text>Class Teacher - {item.classTeacher}</Text>
                                  <Text>{item.teachingClasses && item.teachingClasses.toString()}</Text>
                                </View>
                            ))}
                        </>
                    )}
                </Card.Content>
            </Card>

     </View>
      
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    rootContainer:{
        flex:1,
    }
})

export default Dashboard