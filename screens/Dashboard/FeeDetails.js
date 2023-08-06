import { View, Text, StyleSheet, ScrollView } from "react-native";
import React,{useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
export default function FeeDetails() {

  const authContext = useContext(AuthContext);
 console.log("Fee Details Component");
 console.log(authContext.currStudentDetails); 

 const feesObj = [
  {
    class : {className : 1, fees : 10450, examFee : 1000},
  },
  {
    class : {className : 2, fees : 1100,examFee :1000 },
  },
  {
    class : {className : 3, fees : 11500,examFee :1100},
  },
  {
    class : {className : 4, fees : 12100,examFee :1100},
  },
  {
    class : {className : 5, fees : 14300,examFee :1200},
  },
  {
    class : {className : 6, fees : 15400,examFee :1400},
  },
  {
    class : {className : 7, fees : 17600,examFee :1500},
  },
  {
    class : {className : 8, fees : 19800,examFee :1500},
  },
  {
    class : {className : 9, fees : 24200,examFee :1800},
  },
  {
    class : {className : 10, fees : 26400,examFee :2200},
  },

]
   return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View style={styles.topContainer}>
          <View style={styles.topContainer}>
            <Text style={{ color: "#fffcf6", fontSize: 20 }}>
            <>{feesObj.map((item)=> {return item.class.className === authContext.currentLoggedInStudent.className ? <Text style={{color:"white"}}>Total Fee - {item.class.fees+item.class.examFee}/-</Text> : '' } )}</>
 
            </Text>
            <Text style={{ color: "white" }}>Present Class - {authContext.currentLoggedInStudent && authContext.currentLoggedInStudent.className}</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.examFeeCard}>
            <Text style={{ color: "white" }}>Exam Fee</Text>
            <>{feesObj.map((item)=> {return item.class.className === authContext.currentLoggedInStudent.className ? <Text style={{color:"white"}}>{item.class.examFee}/-</Text> : '' } )}</>
          </View>
          <View style={styles.TuitionFeeCard}>
            <Text style={{ color: "white" }}>Tuition Fee</Text>
            <>{feesObj.map((item)=> {return item.class.className === authContext.currentLoggedInStudent.className ? <Text style={{color:"white"}}>{item.class.fees}/-</Text> : '' } )}</>
          </View>
          <View style={styles.vanFeeCard}>
            <Text style={{ color: "white" }}>Monthly Fee</Text>
            <>{feesObj.map((item)=> {return item.class.className === authContext.currentLoggedInStudent.className ? <Text style={{color:"white"}}>{Math.round((item.class.fees)/11)}/-</Text> : '' } )}</>
          </View>
        </View>
        <View style={styles.recentPaymentsContainer}>
          <Text
            style={{
              textAlign: "center",
              color: "green",
              fontSize: 15,
              marginBottom: 5,
            }}
          >
            Your Recent Payments
          </Text>
          {/* <Text style = {{fontSize:20,textAlign:"center"}}>Your recent payment appear here.</Text> */}
          <View style={styles.recentPaymentCard}>
            <Text>Tuition Fee</Text>
            <Text>&#8377;0/-</Text>
            <Text> -- </Text>
          </View>

          <View style={styles.recentPaymentCard}>
            <Text>Van Fee</Text>
            <Text>&#8377;0/-</Text>
            <Text> -- </Text>
          </View>

          <View style={styles.recentPaymentCard}>
            <Text>Exam Fee</Text>
            <Text>&#8377;0/-</Text>
            <Text> -- </Text>
          </View>
          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({  
  rootContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    height:"100%"
  },
  topContainer: {
    height: 180,
    width: "96%",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#6495ed",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  bottomContainer: {
    height: 100,
    backgroundColor: "white",
    width: "96%",
    padding: 5,
    flexDirection: "row",
    gap: 10,
  },
  examFeeCard: {
    width: 100,
    height: 80,
    backgroundColor: "#6495ed",
    elevation: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  TuitionFeeCard: {
    width: 100,
    height: 80,
    backgroundColor: "#bf94e4",
    elevation: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  vanFeeCard: {
    width: 100,
    height: 80,
    backgroundColor: "#9370db",
    elevation: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  recentPaymentsContainer: {
    flex: 1,
    width: "96%",
    padding: 5,
    justifyContent: "center",
    backgroundColor:"white"
  },
  recentPaymentCard: {
    width: "100%",
    height: 80,
    backgroundColor:"white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 5,
    elevation: 5,
    marginTop: 3,
  },
});