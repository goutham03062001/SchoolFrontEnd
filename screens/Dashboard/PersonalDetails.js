import { View, Text ,Image,ScrollView} from "react-native";
import React, { useState } from "react";
import { Card, List } from "react-native-paper";

const PersonalDetails = ({ route }) => {
  const { data } = route.params;

  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
   <ScrollView>
     <View style={{ marginTop: 10, padding: 5 ,gap:9}}>
      {/* <Text>PersonalDetails</Text> */}
      {data && (
        <>
          {/* <List.Section title="" style={{gap:5}}>
            <List.Accordion
              title="Personal Details"
              // expanded={expanded}
              left={(props) => <List.Icon {...props} icon="account" color="black"/>}
              style={{backgroundColor:"orange"}}
            >
              <List.Item title={`Name  - ${data.Name}`} titleStyle={{color:"#0E21A0"}}/>
              <List.Item title={`Father Name  - ${data.FatherName}`} titleStyle={{color:"#793FDF"}}/>
              <List.Item title={`Mother Name  - ${data.MotherName}`} titleStyle={{color:"#793FDF"}}/>
              <List.Item
                title={`Date of Birth  - ${new Date(
                  data.Dob
                ).toLocaleDateString()}`}
              />
              <List.Item
                title={`Mobile Number  - ${
                  data.MobileNumber === "" ? "Not available" : data.MobileNumber
                }`}
              />
              <List.Item
                title={`Aadhar  Number  - ${
                  data.AadharNumber === "" ? "Not available" : data.AadharNumber
                }`}
              />
            </List.Accordion>

            <List.Accordion
              title="Academic Details"
              left={(props) => <List.Icon {...props} icon="folder" style={{color:"white"}} color="white"/>}
              expanded={expanded}
              onPress={handlePress}
              style={{marginTop:1,backgroundColor:"#3F1D38",paddingLeft:15}}
              titleStyle={{color:"white"}}
              
            >
              <List.Item
                title={`Admission Date  - ${new Date(
                  data.AdmissionDate
                ).toLocaleDateString()}`}
              />

              <List.Item title={`Class  - ${data.className}`} />
            </List.Accordion>
          </List.Section> */}
          <View
            style={{
              position: "relative",
              backgroundColor: "#ffff",
              elevation: 6,
              height: 55,
              borderRadius: 10,
              width:"100%",
              flexDirection:"row",
              justifyContent:"flex-start",
              alignItems:"center",
              gap:30
            }}
          >
            <View
              style={{
                width: 6,
                backgroundColor: "red",
                height: 55,
                position: "relative",
              }}
            ></View>
            <View style={{width:"100%",height:"100%",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:30}}>
              <Image source={{uri :"https://cdn3d.iconscout.com/3d/premium/thumb/graduate-student-6368706-5250853.png"}} style={{width:30,height:30}}/>
              <Text style={{color:"black",fontWeight:"500"}}>Name - {data.Name}</Text>
            </View>
          </View>

          <View
            style={{
              position: "relative",
              backgroundColor: "#ffff",
              elevation: 6,
              height: 55,
              borderRadius: 10,
              width:"100%",
              flexDirection:"row",
              justifyContent:"flex-start",
              alignItems:"center",
              gap:30
            }}
          >
            <View
              style={{
                width: 6,
                backgroundColor: "orange",
                height: 55,
                position: "relative",
              }}
            ></View>
            <View style={{width:"100%",height:"100%",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:30}}>
            <Image source={require("../../assets/Father.png")} style={{width:30,height:30}}/>
              <Text style={{color:"black",fontWeight:"500"}}>Father Name - {data.FatherName}</Text>
            </View>
          </View>


          <View
            style={{
              position: "relative",
              backgroundColor: "#ffff",
              elevation: 6,
              height: 55,
              borderRadius: 10,
              width:"100%",
              flexDirection:"row",
              justifyContent:"flex-start",
              alignItems:"center",
              gap:30
            }}
          >
            <View
              style={{
                width:6,
                backgroundColor: "green",
                height: 55,
                position: "relative",
              }}
            ></View>
            <View style={{width:"100%",height:"100%",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:30}}>
              <Image source={require("../../assets/Mother.png")} style={{width:30,height:30}}/>
              <Text style={{color:"black",fontWeight:"500"}}>Mother Name - {data.MotherName}</Text>
            </View>
          </View>



          <View
            style={{
              position: "relative",
              backgroundColor: "#ffff",
              elevation: 6,
              height: 55,
              borderRadius: 10,
              width:"100%",
              flexDirection:"row",
              justifyContent:"flex-start",
              alignItems:"center",
              gap:30
            }}
          >
            <View
              style={{
                width: 6,
                backgroundColor: "blue",
                height: 55,
                position: "relative",
              }}
            ></View>
            <View style={{width:"100%",height:"100%",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:30}}>
              <Image source={require("../../assets/Birthday.png")} style={{width:30,height:30}}/>
              <Text style={{color:"black",fontWeight:"500"}}>Date Of Birth - {`${new Date(
                  data.Dob
                ).toLocaleDateString()}`}</Text>
            </View>
          </View>


          <View
            style={{
              position: "relative",
              backgroundColor: "#ffff",
              elevation: 6,
              height: 55,
              borderRadius: 10,
              width:"100%",
              flexDirection:"row",
              justifyContent:"flex-start",
              alignItems:"center",
              gap:30
            }}
          >
            <View
              style={{
                width: 6,
                backgroundColor: "#974EC3",
                height: 55,
                position: "relative",
              }}
            ></View>
            <View style={{width:"100%",height:"100%",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:30}}>
             <Image source={require("../../assets/DateOfJoining.png")} style={{width:30,height:30}}/>
              <Text style={{color:"black",fontWeight:"500"}}>Date Of Admission  - {`${new Date(
                  data.AdmissionDate
                ).toLocaleDateString()}`}</Text>
            </View>
          </View>


          <View
            style={{
              position: "relative",
              backgroundColor: "#ffff",
              elevation: 6,
              height: 55,
              borderRadius: 10,
              width:"100%",
              flexDirection:"row",
              justifyContent:"flex-start",
              alignItems:"center",
              gap:30
            }}
          >
            <View
              style={{
                width: 6,
                backgroundColor: "#1450A3",
                height: 55,
                position: "relative",
              }}
            ></View>
            <View style={{width:"100%",height:"100%",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:30}}>
              <Image source={require("../../assets/Class.png")} style={{width:30,height:30}}/>
              <Text style={{color:"black",fontWeight:"500"}}>Present Class - {data.className}</Text>
            </View>
          </View>

          <View
            style={{
              position: "relative",
              backgroundColor: "#ffff",
              elevation: 6,
              height: 55,
              borderRadius: 10,
              width:"100%",
              flexDirection:"row",
              justifyContent:"flex-start",
              alignItems:"center",
              gap:30
            }}
          >
            <View
              style={{
                width: 6,
                backgroundColor: "#016A70",
                height:55,
                position: "relative",
              }}
            ></View>
            <View style={{width:"100%",height:"100%",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:30}}>
              <Image source={require("../../assets/AadharCard.png")} style={{width:30,height:30}}/>
              <Text style={{color:"black",fontWeight:"500"}}>{`Aadhar  Number  - ${
                  data.AadharNumber === "" ? "Not available" : data.AadharNumber
                }`}</Text>
            </View>
          </View>

          <View
            style={{
              position: "relative",
              backgroundColor: "#ffff",
              elevation: 6,
              height: 55,
              borderRadius: 10,
              width:"100%",
              flexDirection:"row",
              justifyContent:"flex-start",
              alignItems:"center",
              gap:30
            }}
          >
            <View
              style={{
                width: 6,
                backgroundColor: "#79155B",
                height: 55,
                position: "relative",
              }}
            ></View>
            <View style={{width:"100%",height:"100%",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:30}}>
             <Image source={require("../../assets/Mobile.png")} style={{width:30,height:30}}/>
              <Text style={{color:"black",fontWeight:"500"}}>{`Mobile  Number  - ${
                  data.MobileNumber === "" ? "Not available" : data.MobileNumber
                }`}</Text>
            </View>
          </View>
        </>
      )}
    </View>
   </ScrollView>
  );
};

export default PersonalDetails;
