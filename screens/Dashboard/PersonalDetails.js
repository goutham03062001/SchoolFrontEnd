import { View, Text } from "react-native";
import React, { useState } from "react";
import { Card, List } from "react-native-paper";
const PersonalDetails = ({ route }) => {
  const { data } = route.params;


  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={{ marginTop: 10 }}>
      {/* <Text>PersonalDetails</Text> */}
      {data && (
        <>
          <List.Section title="">
            <List.Accordion
              title="Personal Details"
              // expanded={expanded}
              left={(props) => <List.Icon {...props} icon="account" />}
            >
              <List.Item title={`Name  - ${data.Name}`} />
              <List.Item title={`Name  - ${data.FatherName}`} />
              <List.Item title={`Name  - ${data.MotherName}`} />
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
              left={(props) => <List.Icon {...props} icon="folder" />}
              expanded={expanded}
              onPress={handlePress}
            >
              <List.Item
                title={`Admission Date  - ${new Date(
                  data.AdmissionDate
                ).toLocaleDateString()}`}
              />

              <List.Item title={`Class  - ${data.className}`} />
            </List.Accordion>
          </List.Section>
        </>
      )}
    </View>
  );
};

export default PersonalDetails;
