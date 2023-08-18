import { View, Text } from "react-native";
import React from "react";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
const BiologyLab = () => {
  const navigation = useNavigation();
  function LabHandler(inputLink) {
    navigation.navigate("Virtual Lab", { data: inputLink });
  }
  return (
    <ScrollView>
      <View>
        <List.Section title="Biology" style={{ gap: 5 }}>
          <List.Accordion title="Chapter -1   Nutrition">
            <List.Item
              title="Human Brain"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            />
            <List.Item
              title="Human Heart"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/3f8072336ce94d18b3d0d055a1ece089/embed"
                )
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter -2   Respiration">
            <List.Item
              title="Human Respiratory System 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/250911151757489da1cf5501b791f363/embed"
                )
              }
            />
            <List.Item
              title="Movement of rib cage during inhale and exhale"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/103c2e6837194277ae6529a4f4f4aa01/embed"
                )
              }
            />
            <List.Item
              title="Mitochondria"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/397631a85faa487ba1f1cc4fe5e1b7e3/embed"
                )
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter -3   Transportation">
            <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter -4   Excretion">
            <List.Item
              title="External Features of Kidney"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/770456dfc5f443aa951d037c9c0f2b4b/embed"
                )
              }
            />
            <List.Item
              title="Internal Features of Kidney"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/0dea52d6f6a848ab8f2cdc3f5b3ba212/embed"
                )
              }
            />
               <List.Item
              title="Nephron 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/898146d60a0741c6ac9910210e4eac20/embed"
                )
              }
            />

            <List.Item
              title="Position Of Kidneys"
              onPress={() =>
                LabHandler(
                  ""
                )
              }
            />

            <List.Item
              title="Formation Of Urine 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/a9aae9da3a06475b862315393814c77d/embed"
                )
              }
            />

            <List.Item
              title="Dialysis Machine"
              onPress={() =>
                LabHandler(
                  ""
                )
              }
            />
            <List.Item
              title="Kidney Transpilation"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/dfffd86f197949d6b47eee29de228de5/embed"
                )
              }
            />


            <List.Item
              title="Lungs 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/ce09f4099a68467880f46e61eb9a3531/embed"
                )
              }
            />
            <List.Item
              title="Skin 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/8c2b71daaad547c794334daa82acecb2/embed"
                )
              }
            />

            <List.Item
              title="Liver 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/d0bce1a8e16a4b69b5b235e4248b2d19/embed"
                )
              }
            />  

            <List.Item
              title="Large Intestine"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/8a1ca8e3ca224cdeb9264674416bde38/embed"
                )
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter -5   Coordination">
            <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter -6   Reproduction">
            <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter -7   Coordination in life processes">
            <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter -8   Heredity">
            <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter -9   Our Environment">
            <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter -10   Natural Resources">
            <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            />
          </List.Accordion>
        </List.Section>
      </View>
    </ScrollView>
  );
};

export default BiologyLab;
