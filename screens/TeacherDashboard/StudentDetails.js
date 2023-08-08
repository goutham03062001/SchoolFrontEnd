import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { DataTable } from "react-native-paper";
const StudentDetails = () => {
  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title><Text style={{color:"brown"}}>S.No.</Text></DataTable.Title>
          <DataTable.Title><Text style={{color:"brown"}}>Name</Text></DataTable.Title>
          <DataTable.Title><Text style={{color:"brown"}}>ID</Text></DataTable.Title>
          <DataTable.Title><Text style={{color:"brown"}}>Mobile</Text></DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{color:"red"}}>1</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>Goutham</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>532</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>6300809076</Text>
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{color:"red"}}>2</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>ManiSai</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>532</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>6312345866</Text>
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{color:"red"}}>3</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>Anil</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>533</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>8794567812</Text>
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{color:"red"}}>4</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>Nikhil</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>534</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>9988546120</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{color:"red"}}>5</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>Sai Krishna</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>535</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>9988235120</Text>
          </DataTable.Cell>
        </DataTable.Row>

        
      </DataTable>
    </View>
  );
};

export default StudentDetails;
