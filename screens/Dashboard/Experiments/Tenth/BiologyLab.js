import { View, Text } from "react-native";
import React,{useContext} from "react";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../../../../context/AuthContext";

const BiologyLab = () => {
  const navigation = useNavigation();
  const authContext = useContext(AuthContext);
  function LabHandler(inputLink) {
    navigation.navigate("Virtual Lab", { data: inputLink });
  }
  return (
    <ScrollView>
      <View>
       {authContext && authContext.currentLoggedInStudent && (<>
        {authContext.currentLoggedInStudent.className === 10 ? <>
          <List.Section title="Biology" style={{ gap: 5 }}>
          <List.Accordion title="Chapter -1   Nutrition"
          titleStyle={{color:"yellow"}}
        
          style={{backgroundColor:"#974EA3"}}>
            <List.Item
              title="Chloroplast - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/chloroplast-30bc55b2f763415f9222f876c564be97/embed"
                )
              }
              titleStyle={{color:"#191D88"}}
            />
            <List.Item
              title="Human Digestive System"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/human-digestive-system-c98532301b3f42f8b5ecf2e0063e9d73/embed"
                )
              }
              titleStyle={{color:"#79155B"}}
            />
            <List.Item
              title="Buccal Cavity of a Human"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/buccal-cavity-84ec38d195654d05bc9fe786d148e51f/embed"
                )
              }
              titleStyle={{color:"#BB2525"}}
            />
            <List.Item
              title="T-S of leaf - 3D View"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/leaf-anatomy-layers-structure-0121ce17e38d4d919a2e9f9b98a69af7/embed"
                )
              }
              titleStyle={{color:"#793FDF"}}

            />
            <List.Item
              title="Nutrition in Amoeba"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/figure-65-a5600992292e4e3ea998d8537e1dfb53/embed"
                )
              }
              titleStyle={{color:"#0F2C59"}}
              
            />
          </List.Accordion>

          <List.Accordion title="Chapter -2   Respiration"
          titleStyle={{color:"black"}}
          style={{backgroundColor:"#E4E4D0"}}>
            <List.Item
              title="Human Respiratory System 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/250911151757489da1cf5501b791f363/embed"
                )
              }
              titleStyle={{color:"#191D88"}}
            />
            <List.Item
              title="Diaphragm 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/lung-animation-acbb5f0e16a14179ae4f63c5b6b83ad7/embed"
                )
              }
              titleStyle={{color:"#79155B"}}
            />
            <List.Item
              title="Movement of rib cage during inhale and exhale"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/103c2e6837194277ae6529a4f4f4aa01/embed"
                )
              }
              titleStyle={{color:"#BB2525"}}
            />
            <List.Item
              title="Alveolus - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/alveolar-sacs-40634043de27416594be40876f65a955/embed"
                )
              }
              titleStyle={{color:"#793FDF"}}
            />
            <List.Item
              title="Mitochondria"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/397631a85faa487ba1f1cc4fe5e1b7e3/embed"
                )
              }
              titleStyle={{color:"#191D88"}}
            />
          </List.Accordion>

          <List.Accordion title="Chapter -3   Transportation" style={{backgroundColor:"#8ECDDD"}}
          titleStyle={{color:"black"}}>
            <List.Item
              title="External Human Heart - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/realistic-human-heart-3f8072336ce94d18b3d0d055a1ece089/embed"
                )
              }
              titleStyle={{color:"#191D88"}}
            />
            <List.Item
              title="Internal Human Heart - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/human-heart-interior-view-26adbbe9c3d34cb698b7f75d7bfb76a6/embed"
                )
              }
              titleStyle={{color:"#79155B"}}
            />
            <List.Item
              title="Lymphatic System - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/male-complete-system-772aec14d5f54a0cb271d35846241918/embed"
                )
              }
              titleStyle={{color:"#BB2525"}}
            />
            <List.Item
              title="Flow of blood in Blood Vessels"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/arterial-vessel-tour-246576050a644cb4ae16840922385e39/embed"
                )
              }
              titleStyle={{color:"#793FDF"}}
            />
          </List.Accordion>

          <List.Accordion title="Chapter -4   Excretion" style={{backgroundColor:"#B9B4C7"}} titleStyle={{color:"#191D88"}}>
            <List.Item
              title="External Features of Kidney"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/770456dfc5f443aa951d037c9c0f2b4b/embed"
                )
              }
              titleStyle={{color:"#191D88"}}
            />
            <List.Item
              title="Internal Features of Kidney"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/0dea52d6f6a848ab8f2cdc3f5b3ba212/embed"
                )
              }
              titleStyle={{color:"#79155B"}}
            />
               <List.Item
              title="Nephron 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/898146d60a0741c6ac9910210e4eac20/embed"
                )
              }
              titleStyle={{color:"#BB2525"}}
            />

            <List.Item
              title="Position Of Kidneys"
              onPress={() =>
                LabHandler(
                  ""
                )
              }
              titleStyle={{color:"#793FDF"}}
            />

            <List.Item
              title="Formation Of Urine 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/a9aae9da3a06475b862315393814c77d/embed"
                )
              }
              titleStyle={{color:"#0F2C59"}}
            />

            <List.Item
              title="Dialysis Machine"
              onPress={() =>
                LabHandler(
                  ""
                )
              }
              titleStyle={{color:"#191D88"}}
            />
            <List.Item
              title="Kidney Transpilation"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/dfffd86f197949d6b47eee29de228de5/embed"
                )
              }
              titleStyle={{color:"#79155B"}}
            />


            <List.Item
              title="Lungs 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/ce09f4099a68467880f46e61eb9a3531/embed"
                )
              }
              titleStyle={{color:"#BB2525"}}
            />
            <List.Item
              title="Skin 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/8c2b71daaad547c794334daa82acecb2/embed"
                )
              }
              titleStyle={{color:"#793FDF"}}
            />

            <List.Item
              title="Liver 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/d0bce1a8e16a4b69b5b235e4248b2d19/embed"
                )
              }
              titleStyle={{color:"#0F2C59"}}
            />  

            <List.Item
              title="Large Intestine"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/8a1ca8e3ca224cdeb9264674416bde38/embed"
                )
              }
              titleStyle={{color:"#79155B"}}
            />
          </List.Accordion>

          <List.Accordion title="Chapter -5   Coordination" style={{backgroundColor:"#337CCF"}} titleStyle={{color:"white"}}>
            <List.Item
              title="Nerve Cell - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/neuron-a6a64c81e44146469ccbadf3f01e84fe/embed"
                )
              }
              titleStyle={{color:"#191D88"}}
            />
            <List.Item
              title="Brain Internal Structure - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/internal-brain-structures-456db0f24fbb4baf909767b9cdc59375/embed"
                )
              }
              titleStyle={{color:"#79155B"}}
            />
            <List.Item
              title="Pancreas - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/pancreas-and-duodenum-b34ba50e38fd455bae43bd07b7ed2d3b/embed"
                )
              }
              titleStyle={{color:"#BB2525"}}
            />
          </List.Accordion>

          <List.Accordion title="Chapter -6   Reproduction" style={{backgroundColor:"#ffb5a7"}} titleStyle={{color:"black"}}>
            <List.Item
              title="Fission Video"
              // onPress={() =>
              //   LabHandler(
              //     "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
              //   )
              // }
              titleStyle={{color:"#191D88"}}
            />
            <List.Item
              title="Fragmentation Video"
              // onPress={() =>
              //   LabHandler(
              //     "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
              //   )
              // }
              titleStyle={{color:"#79155B"}}
            />
            <List.Item
              title="Human Embryo Stages Video"
              // onPress={() =>
              //   LabHandler(
              //     "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
              //   )
              // }
              titleStyle={{color:"#BB2525"}}
            />
            <List.Item
              title="Sperm Cell - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/sperm-spermatozoa-detail-labelled-825158260a7b4f118fdf46393fe4b835/embed"
                )
              }
              titleStyle={{color:"#793FDF"}}
            />
            <List.Item
              title="Mitosis & Meiosis"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/sperm-spermatozoa-detail-labelled-825158260a7b4f118fdf46393fe4b835/embed"
                )
              }
              titleStyle={{color:"#0F2C59"}}
            />
          </List.Accordion>

          <List.Accordion title="Chapter -7   Coordination in life processes" style={{backgroundColor:"#a09abc"}} titleStyle={{color:"#191D88"}}>
            {/* <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            /> */}
          </List.Accordion>

          <List.Accordion title="Chapter -8   Heredity" style={{backgroundColor:"#e0aaff"}} titleStyle={{color:"black"}}>
            {/* <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            /> */}
          </List.Accordion>

          <List.Accordion title="Chapter -9   Our Environment" style={{backgroundColor:"#bfdbf7"}} titleStyle={{color:"black"}}>
            {/* <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            /> */}
          </List.Accordion>

          <List.Accordion title="Chapter -10   Natural Resources" style={{backgroundColor:"#A2678A"}} titleStyle={{color:"white"}}>
            {/* <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            /> */}
          </List.Accordion>
        </List.Section>
        </> : <></>}

        {authContext.currentLoggedInStudent.className === 9 ? <>
          <List.Section title="Biology" style={{ gap: 5 }}>
          
          <List.Accordion title="Chapter -1   Cell its structure and functions">
            <List.Item
              title="Plant Cell - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/plant-cell-cell-structure-1c5ce80d03d149208d30cc5aeb6e42fb/embed"
                )
              }
            />
            <List.Item
              title="Animal Cell - 3D View"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/animal-cell-6fa345b905904e3f96b4707dfba6ea4c/embed"
                )
              }
            />
            <List.Item
              title="Cell Wall - 3D View"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/buccal-cavity-84ec38d195654d05bc9fe786d148e51f/embed"
                )
              }
            />
            <List.Item
              title="Nucleus - 3D View"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/nucleus-cell-organelles-7e01bff42b2d47fab640503bcef071e6/embed"
                )
              }
            />
            <List.Item
              title="Lysosomes - 3D View"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/lysosome-ac57a5cb72484600a9826d66c556d377/embed"
                )
              }
            />
            <List.Item
              title="Mitochondria - 3D View"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/mitochondria-7445a425050e49daa881070ca6917a91/embed"
                )
              }
            />
            <List.Item
              title="Ribosomes - 3D View"  
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/ribosomes-cell-organelles-cadffb81851341728dc0f37c49946fdf/embed"
                )
              }
            />
            <List.Item
              title="Where do cells come from - VIDEO"  
              // onPress={() =>
              //   LabHandler(
              //     "https://sketchfab.com/3d-models/leaf-anatomy-layers-structure-0121ce17e38d4d919a2e9f9b98a69af7/embed"
              //   )
              // }
            />
          </List.Accordion>

          <List.Accordion title="Chapter -2   Plant tissues">
            {/* <List.Item
              title="Human Respiratory System 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/250911151757489da1cf5501b791f363/embed"
                )
              }
            /> */}
            {/* <List.Item
              title="Diaphragm 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/lung-animation-acbb5f0e16a14179ae4f63c5b6b83ad7/embed"
                )
              }
            /> */}
            {/* <List.Item
              title="Movement of rib cage during inhale and exhale"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/103c2e6837194277ae6529a4f4f4aa01/embed"
                )
              }
            /> */}
            {/* <List.Item
              title="Alveolus - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/alveolar-sacs-40634043de27416594be40876f65a955/embed"
                )
              }
            /> */}
            {/* <List.Item
              title="Mitochondria"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/397631a85faa487ba1f1cc4fe5e1b7e3/embed"
                )
              }
            /> */}
          </List.Accordion>

          <List.Accordion title="Chapter -3   Animal tissues">

            <List.Item
              title="Bone - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/realistic-human-heart-3f8072336ce94d18b3d0d055a1ece089/embed"
                )
              }
            />
            <List.Item
              title="Adipose - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/adipocyte-fat-cell-anatomy-dd065f0b9f4040358278b577774b1b5a/embed"
                )
              }
            />
            <List.Item
              title="Epithelial - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/human-heart-interior-view-26adbbe9c3d34cb698b7f75d7bfb76a6/embed"
                )
              }
            />
            <List.Item
              title="Cartilage - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/knee-anatomy-bones-and-cartilage-1e947b39c2e545128dad5d66b391b4d8/embed"
                )
              }
            />
            <List.Item
              title="Ligament - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/knee-anatomy-capsula-and-ligaments-efd5b74b3c7046bf93d6dcafcd88c0a7/embed"
                )
              }
            />
            <List.Item
              title="Muscle Tissues"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/arterial-vessel-tour-246576050a644cb4ae16840922385e39/embed"
                )
              }
            />
            <List.Item
              title="Nerve Cell -3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/neuron-a6a64c81e44146469ccbadf3f01e84fe/embed"
                )
              }
            />
            <List.Item
              title="LAB - Blood Group Identification"
              // onPress={() =>
              //   LabHandler(
              //     "https://sketchfab.com/3d-models/neuron-a6a64c81e44146469ccbadf3f01e84fe/embed"
              //   )
              // }
            />
          </List.Accordion>

          <List.Accordion title="Chapter -4   Plasma membrane">
            <List.Item
              title="Filtration  - VIDEO"
              // onPress={() =>
              //   LabHandler(
              //     "https://sketchfab.com/models/770456dfc5f443aa951d037c9c0f2b4b/embed"
              //   )
              // }
            />
            <List.Item
              title="Diffusion  - VIDEO"
              // onPress={() =>
              //   LabHandler(
              //     "https://sketchfab.com/models/0dea52d6f6a848ab8f2cdc3f5b3ba212/embed"
              //   )
              // }
            />
               <List.Item
              title="Osmosis  - VIDEO"
              onPress={() =>
                LabHandler(
                  "https://media.istockphoto.com/id/1405152539/video/osmosis-process-animation-diagram.mp4?s=mp4-640x640-is&k=20&c=OJsc36bV40dT-0NnZPe0MV6wJCWLFBLW3AgOqBYAp00="
                )
              }
            />

          </List.Accordion>

          <List.Accordion title="Chapter -5   Diversity in living organisms">
            {/* <List.Item
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
            /> */}
            {/* <List.Item
              title="Pancreas - 3D View"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/3d-models/pancreas-and-duodenum-b34ba50e38fd455bae43bd07b7ed2d3b/embed"
                )
              }
            /> */}
          </List.Accordion>

          <List.Accordion title="Chapter -6   Sense organs">
            {/* <List.Item
              title="Fission Video"
              // onPress={() =>
              //   LabHandler(
              //     "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
              //   )
              // }
            /> */}
            {/* <List.Item
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
            /> */}
          </List.Accordion>

          <List.Accordion title="Chapter -7   Animal behavior">
            {/* <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            /> */}
          </List.Accordion>

          <List.Accordion title="Chapter -8   Challenges in improving agricultural products">
            {/* <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            /> */}
          </List.Accordion>

          <List.Accordion title="Chapter -9   Adaptions in different ecosystems">
            {/* <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            /> */}
          </List.Accordion>

          <List.Accordion title="Chapter -10   Soil Pollution">
            {/* <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            /> */}
          </List.Accordion>
          <List.Accordion title="Chapter -11  Bio-geo-chemical cycles">
            {/* <List.Item
              title="Stomach"
              onPress={() =>
                LabHandler(
                  "https://sketchfab.com/models/7a27c17fd6c0488bb31ab093236a47fb/embed"
                )
              }
            /> */}
          </List.Accordion>
        </List.Section>
        </> : <></>}
       </>)}
       {authContext.currentLoggedInStudent.className ===8 ? <>
          <Text>Currently Not available. Coming soon</Text>
        </> : <></>}
        {authContext.currentLoggedInStudent.className ===7 ? <>
          <Text>Currently Not available. Coming soon</Text>
        </> : <></>}
        {authContext.currentLoggedInStudent.className ===6 ? <>
          <Text>Currently Not available. Coming soon</Text>
        </> : <></>}
      </View>
    </ScrollView>
  );
};

export default BiologyLab;
