import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Image,Pressable, Alert,ScrollView } from "react-native";
import { Card, Button } from "react-native-paper";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
const HomeWork = () => {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  const currClass =
    authContext.currentLoggedInStudent &&
    authContext.currentLoggedInStudent.className;

  useEffect(() => {
    console.log("Getting home works by class Name");
    authContext.getHomeWorkByClassName(currClass);
    console.log(authContext.homeWorksArr);
  }, [currClass]);

  function viewHomeWorkHandler(index){
    // return Alert.alert("hoell","asld");
    // return Alert.alert("name",index.subjectName);
    // console.log(index);
     navigation.navigate("viewing home work",{data : index});

  }
  return (
   <ScrollView>
     <View style={styles.rootContainer}>
      {authContext.homeWorksArr && (
        <>
          
            {authContext.homeWorksArr.length > 0 ? (
              <>
                <View>
                  {authContext.homeWorksArr.map(
                    (homeWork, key = homeWork._id) => (
                      <Card key={key} style={{marginVertical:10}}>
                        <Card.Content>
                          {/* <Text>Class - {homeWork.className}</Text> */}
                          {homeWork.homeWorks && (
                            <>
                              {/* <Text>{homeWork.homeWorks.length}</Text> */}
                              <>
                                {homeWork.homeWorks.map((item) => (
                                  <>
                                    {item && (
                                      <>
                                       {item && item.subject.map((index,key=index._id)=>(
                                        <>
                                           <View  key = {key} style={{width:"100%",flexDirection:"row",justifyContent:'space-around',alignItems:'center'}}>
                                           <Text>Subject - {index.subjectName}</Text>
                                            <Pressable style={{width:"55%"}}
                                            onPress = {(e)=>{viewHomeWorkHandler(index)}}>
                                            <Button mode="contained-tonal" style={{width:"100%",borderRadius:10,backgroundColor:"#9370db"}}><Text style={{color:"white"}}
                                            >View home work</Text></Button>
                                            </Pressable>
                                           </View>
                                        </>
                                       ))}
                                      </>
                                    )}
                                  </>
                                ))}
                              </>
                            </>
                          )}
                        </Card.Content>
                      </Card>
                    )
                  )}
                </View>
              </>
            ) : (
              <>
                
                    
                    <View
                  style={{ flex : 1, justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../../assets/empty.png")}
                    style={{ width: 100, height: 100 }}
                  />
                  <Text>No home works available now</Text>
                </View>
              </>
            )}
          
        </>
      )}
    </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    padding: 15,
  },
});

export default HomeWork;
