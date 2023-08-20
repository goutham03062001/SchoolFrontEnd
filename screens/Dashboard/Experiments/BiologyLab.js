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
              title="Chloroplast - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/chloroplast-30bc55b2f763415f9222f876c564be97/embed"
                )
              }
            />
            <List.Item
              title="Human Digestive System"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/human-digestive-system-c98532301b3f42f8b5ecf2e0063e9d73/embed"
                )
              }
            />
            <List.Item
              title="Buccal Cavity of a Human"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/buccal-cavity-84ec38d195654d05bc9fe786d148e51f/embed"
                )
              }
            />
            <List.Item
              title="T-S of leaf - 3D View"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/leaf-anatomy-layers-structure-0121ce17e38d4d919a2e9f9b98a69af7/embed"
                )
              }
            />
            <List.Item
              title="Nutrition in Amoeba"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/leaf-anatomy-layers-structure-0121ce17e38d4d919a2e9f9b98a69af7/embed"
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
              title="Diaphragm 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/lung-animation-acbb5f0e16a14179ae4f63c5b6b83ad7/embed"
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
              title="Alveolus - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/alveolar-sacs-40634043de27416594be40876f65a955/embed"
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
              title="External Human Heart - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/realistic-human-heart-3f8072336ce94d18b3d0d055a1ece089/embed"
                )
              }
            />
            <List.Item
              title="Internal Human Heart - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/human-heart-interior-view-26adbbe9c3d34cb698b7f75d7bfb76a6/embed"
                )
              }
            />
            <List.Item
              title="Lymphatic System - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/male-complete-system-772aec14d5f54a0cb271d35846241918/embed"
                )
              }
            />
            <List.Item
              title="Flow of blood in Blood Vessels"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/arterial-vessel-tour-246576050a644cb4ae16840922385e39/embed"
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
              title="Nerve Cell - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/neuron-a6a64c81e44146469ccbadf3f01e84fe/embed"
                )
              }
            />
            <List.Item
              title="Brain Internal Structure - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/internal-brain-structures-456db0f24fbb4baf909767b9cdc59375/embed"
                )
              }
            />
            <List.Item
              title="Pancreas - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/pancreas-and-duodenum-b34ba50e38fd455bae43bd07b7ed2d3b/embed"
                )
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter -6   Reproduction">
            <List.Item
              title="Fission Video"
              // onPress={() =>
              //   LabHandler(
              //     "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
              //   )
              // }
            />
            <List.Item
              title="Fragmentation Video"
              // onPress={() =>
              //   LabHandler(
              //     "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
              //   )
              // }
            />
            <List.Item
              title="Human Embryo Stages Video"
              // onPress={() =>
              //   LabHandler(
              //     "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
              //   )
              // }
            />
            <List.Item
              title="Sperm Cell - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/sperm-spermatozoa-detail-labelled-825158260a7b4f118fdf46393fe4b835/embed"
                )
              }
            />
            <List.Item
              title="Mitosis & Meiosis"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/sperm-spermatozoa-detail-labelled-825158260a7b4f118fdf46393fe4b835/embed"
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
