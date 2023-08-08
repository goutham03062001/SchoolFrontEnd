import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DataTable } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
const ViewResults = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    let examName = "Formative Assessment - 1";
    let className = authContext.currentLoggedInStudent.className;
    let admissionId = authContext.currentLoggedInId;
    let studentName = authContext.currentLoggedInStudent.Name;
    authContext.getExamMarks(examName, className, admissionId, studentName);
  }, []);
const totalOptedMarksArr = [];
authContext.currentStudentMarks.subjects && authContext.currentStudentMarks.subjects.map((sub)=>{
  return totalOptedMarksArr.push(sub.optedMarks);
})
 const totalMarks = totalOptedMarksArr.reduce((prev,marks)=> {return prev+marks},0)
  console.log("TOTAL MARKS : "+totalMarks);
  return (
    <ScrollView>
      <View>
        {authContext.currentStudentMarks && (
          <>
            <Text
              style={{
                marginVertical: 20,
                textAlign: "center",
                fontSize: 20,
                color: "green",
              }}
            >
              Your FA-1 RESULTS
            </Text>

            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={{ color: "brown" }}>Subject Name</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={{ color: "brown" }}>Opted Marks </Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={{ color: "brown" }}>Max. Marks</Text>{" "}
                </DataTable.Title>
              </DataTable.Header>

              {authContext.currentStudentMarks.subjects &&
                authContext.currentStudentMarks.subjects.map((subject) => (
                  <>
                    <DataTable.Row
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DataTable.Cell
                        style={{
                          flex: 0.6,
                          width: "80%",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Text style={{ color: "blue" }}>
                          {subject.subjectName}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{
                          flex: 1,
                          width: "100%",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ color: "red" }}>
                          {subject.optedMarks}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{
                          flex: 1.1,
                          width: "100%",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ color: "green" }}>25</Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                  </>
                ))}
            </DataTable>

            <View style={{width:"100%",justifyContent:"center",alignItems:'center',marginTop:30}}>
              
               <View style={{flexDirection:"row",justifyContent:'center'}}>
               <Text style={{fontSize:18,color:"red"}}>Percentage - </Text> 
               <Text style={{fontSize:18,color:"red"}}>{Math.round(totalMarks/175)*100}%</Text>
                </View>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default ViewResults;
