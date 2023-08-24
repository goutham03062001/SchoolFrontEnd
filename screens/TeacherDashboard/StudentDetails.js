import { ScrollView, Text,StyleSheet} from "react-native";
import React, { useEffect,useContext } from "react";
import { DataTable } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/AuthContext";
const StudentDetails = () => {
  const authContext = useContext(AuthContext);
  useEffect(()=>{
    async function getStudentDetailsHandler(){
      const currentClassTeacher = authContext.currentLoggedInFaculty && authContext.currentLoggedInFaculty.classTeacher
      authContext.getStudentDetailsByClassName(currentClassTeacher);

    }
    getStudentDetailsHandler();
  },[]);
  return (
    <ScrollView horizontal={true}>
      <DataTable style={styles.tableRow}>
          <DataTable.Header style={styles.tableRow}>
            <DataTable.Title style={{width:80}}><Text style={{color:"brown"}}>S.No</Text></DataTable.Title>
            <DataTable.Title style={{width:180}}><Text style={{color:"brown"}}>Name</Text></DataTable.Title>
            <DataTable.Title style={{width : 80}}><Text style={{color:"brown"}}>ID</Text></DataTable.Title>
            <DataTable.Title style={{width:100}}><Text style={{color:"brown"}}>Mobile </Text></DataTable.Title>
          </DataTable.Header>
         
          { authContext && authContext.currentLoggedInStudent && authContext.currentLoggedInStudent ? <>
          {authContext.currentLoggedInStudent.map((item,key=item._id)=>(<>
              {item && item.students && item.students.map((student)=>(<>
                {student && (<>
                  <DataTable.Row>
                    <DataTable.Cell style={{width:50}}>
                      <Text>{student && item.students.indexOf(student)+1}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width:180}}>
                      <Text>{student.Name}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width : 65}}>
                      <Text>{student.AdmissionNumber}</Text>
                    </DataTable.Cell>

                    <DataTable.Cell style={{width:90}}>
                      <Text>{student.MobileNumber === "" ? "NA" : student.MobileNumber}</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                </>)}
              </>))}
          </>))}
        </> : <></>}
        </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

 
 
});

export default StudentDetails;
