import { View, Text,StyleSheet,Image,Alert, Pressable } from 'react-native'
import React,{useContext,useEffect} from 'react'
import { AuthContext } from '../../context/AuthContext';
import {Card,Button,List} from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
    const authContext = useContext(AuthContext);
    // for(let i =0; i<authContext.currentLoggedInFaculty.teachingClasses.length; i++){
    //   classes.push(authContext.currentLoggedInFaculty.teachingClasses[i]);
    // }
   const navigation = useNavigation();
   useEffect(()=>{
    async function loadFun(){
      const currFacMobile = await AsyncStorage.getItem("FacultyMobileNumber");
      authContext.getCurrentFacultyDetails(currFacMobile);
    }
    loadFun();
   },[]);
   function ViewStudentDetailsHandler(){

    navigation.navigate("Student Details");
   }
  return (
    <View style = {styles.rootContainer}>
      {/* <Text>Dashboard</Text>
      <Text>{authContext.currentLoggedInStatus}</Text>
      <Text>{authContext.currentLoggedInFaculty.Name}</Text>
      <Button onPress= {authContext.logout}>Logout</Button> */}
      <Card>
        <Card.Content style={styles.cardContentContainer}>
        <Image source={{ uri : "https://img.icons8.com/color/96/circled-user-male-skin-type-1-2--v1.png"}} style={{ width:80,height:80}}/>

          
        {/* {
          authContext.currentLoggedInFaculty && authContext.currentLoggedInFaculty.map((item)=>(
            <>
           {item && (<>
            <Text>{item.Name} | {authContext.currentLoggedInStatus}</Text>
            <Text>{item.mobile} | Class - {item.classTeacher}</Text>
           </>)}
            </>
            ))
        } */}
        {
          authContext.currentLoggedInFaculty && (<>
            <Text>{authContext.currentLoggedInFaculty.Name} | {authContext.currentLoggedInStatus}</Text>
            <Text>{authContext.currentLoggedInFaculty.mobile} | Class Teacher - {authContext.currentLoggedInFaculty.classTeacher}</Text>
          </>)
        }
        </Card.Content>
      </Card>

        <List.Section style = {{gap:10}}>
          <List.Accordion title = "Classes"
          left={props => <List.Icon {...props} icon="folder" />}>
          {
            authContext.currentLoggedInFaculty.teachingClasses && (authContext.currentLoggedInFaculty.teachingClasses.map((item)=>(
              <List.Item title = {item.className}/>
            )))
          } 
          </List.Accordion>
         
        <List.Accordion title = {
            authContext.currentLoggedInFaculty && (<Text>View  Class {authContext.currentLoggedInFaculty.classTeacher} Details </Text>)
          }> 
         <List.Item title = {<Pressable><Button mode="contained-tonal" onPress = {ViewStudentDetailsHandler}>View Class - {authContext.currentLoggedInFaculty.classTeacher} Details</Button></Pressable>}/>
        </List.Accordion>
        </List.Section>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer:{
    flex : 1,
    padding: 20,
    gap:10
  },
  cardContentContainer:{
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    gap:10
  }
})

export default Dashboard


