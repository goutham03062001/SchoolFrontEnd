import { View, Text, ScrollView, Alert, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { List, Card } from "react-native-paper";
import { WebView } from "react-native-webview";
import ViewLabExperiments from "./ViewLabExperiments";
import { useNavigation } from "@react-navigation/native";
const PhysicsLab = () => {
  // const[labLink,setLabLink] = useState("https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html");
  const navigation = useNavigation();
  function LabHandler(inputLink,info) {
    // updateLink(inputLink)
    navigation.navigate("Virtual Lab", { data: inputLink ,inputText : info});
  }
  return (
    <ScrollView>
      <View>
        <List.Section title="Physics Lab Experiments" style={{ gap: 5 }}>
          <List.Accordion title="Chapter-1    Reflection Of Light At Curved Surfaces">
            <List.Item
              title="Observing the types of images & measuring of object distances"
              onPress={(e) =>
                LabHandler(
                  "https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html"
                )
              }
            />
            <List.Item
              title=" Concave And Convex Mirrors Ray Diagrams"
              onPress={(e) =>
                LabHandler(
                  "https://www.geogebra.org/material/iframe/id/4576/width/1098/height/505/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto"
                )
              }
            />

            <List.Item
              title="Formation of Image in plane mirrors"
              onPress={(e) =>
                LabHandler(
                  "https://www.geogebra.org/material/iframe/id/gncjry38/width/1088/height/561/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false",
                  `1. Click On Checkboxes to view experiments results. 
2. Click on clear All to reset experiment.
3. Move arrow to to perform your experiment.`
                )
              }
            />
            <List.Item title="Solar Cooker" />
          </List.Accordion>

          <List.Accordion title="Chapter-2    Chemical Equations">
            <List.Item title="Activity - Formation of Barium Sulphate Precipitate" />
            <List.Item
              title="Refraction Experiment"
              onPress={(e) =>
                LabHandler(
                  "https://amrita.olabs.edu.in/olab/html5/?sub=CHE&cat=INC&exp=Reactions_of_Sodium_Hydroxide_with_Aluminium_Metal_and_Hydrochloric_Acid&tempId=olab_ot&linktoken=33547428c516b18bd47a171539252b2d&elink_lan=en-IN&elink_title=Reactions of NaOH with Aluminium Metal and HCl"
                )
              }
            />
            <List.Item
              title="Balancing Chemical Equations"
              onPress={(e) =>
                LabHandler(
                  "https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_en.html"
                )
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter-3    Acids,Bases and Salts">
            <List.Item title="Balancing Chemical Equations" />
            <List.Item title="Neutralization " 
                onPress = { (e)=>LabHandler("https://javalab.org/en/neutralization_reaction_en/")}
            />
            <List.Item title="pH Scale " 
                onPress = { (e)=>LabHandler("https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_all.html")}
            />
          </List.Accordion>

          <List.Accordion title="Chapter-4    Refraction Of Light At Curved Surfaces">
          
            <List.Item
              title="Concave & Convex Lens Experiment"
              onPress={(e) =>
                LabHandler(
                  "https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html"
                )
              }
            />

          
            <List.Item
              title="Lens Maker Equation"
              onPress={(e) =>
                LabHandler(
                  "https://www.geogebra.org/material/iframe/id/7175/width/1100/height/600/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto"
                )
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter-5    Human Eye and Colorful world">
            <List.Item
              title="Experiment - Finding Refractive Index Of Prism"
              onPress={(e) =>
                LabHandler(
                  "https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_all.html"
                )
              }
            />

            <List.Item
              title="Eye Defects"
              onPress={(e) =>
                LabHandler(
                  "https://www.geogebra.org/material/iframe/id/685665/width/1300/height/700/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto"
                )
              }
            />
            <List.Item
              title="Dispersion Experiment"
              onPress={(e) =>
                LabHandler(
                  "https://www.geogebra.org/material/iframe/id/7165/width/953/height/457/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto"
                )
              }
            />
            <List.Item
              title="Formation of Rainbow"
              // onPress = {()=>Linking.openURL("https://www.youtube.com")}
              onPress={(e) =>
                LabHandler("https://simpop.org/convex-lens/convex-lens.htm")
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter-6    Structure of Atom">
            <List.Item
              title="Shape Of ElectroMagnetic Wave - 3D"
              onPress={(e) =>
                LabHandler(
                  "https://sketchfab.com/3d-models/an-electromagnetic-wave-a7e7f0e0b22d4828bbadf3717541d7d2/embed"
                )
              }
            />
            <List.Item
              title="S Orbitals - 3D View"
              onPress={(e) =>
                LabHandler(
                  "https://sketchfab.com/3d-models/s-orbital-75070c2d59464de787e0af30f944acc4/embed"
                )
              }
            />
            <List.Item
              title="P Orbitals - 3D View"
              onPress={(e) =>
                LabHandler(
                  "https://sketchfab.com/3d-models/p-orbitals-67f2823d10aa4ab09721665eb0b48ab8/embed"
                )
              }
            />
            <List.Item
              title="d Orbitals - 3D View"
              onPress={(e) =>
                LabHandler(
                  "https://sketchfab.com/3d-models/d-orbital-v2018-13e5c471bcde4e6f80ff0c1d0b308ce3/embed"
                )
              }
            />
            <List.Item
              title="Let's Build Atoms"
              onPress={(e) =>
                LabHandler(
                  "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_all.html"
                )
              }
            />
          </List.Accordion>

          <List.Accordion title="Chapter-7    Classification of Elements - The Periodic Table">
            {/* <List.Item title="Electric Motor" />
            <List.Item title="Electric Generator" onPress={LabHandler} />
            <List.Item title="Solenoid" /> */}
          </List.Accordion>

          <List.Accordion title="Chapter-8    Chemical Bonding">
            {/* <List.Item title="Electric Motor" />
            <List.Item title="Electric Generator" onPress={LabHandler} />
            <List.Item title="Solenoid" /> */}
          </List.Accordion>

          <List.Accordion title="Chapter-9    Electric Current">
            {/* <List.Item title="Electric Motor" />
            <List.Item title="Electric Generator" onPress={LabHandler} />
            <List.Item title="Solenoid" /> */}
          </List.Accordion>

          <List.Accordion title="Chapter-10    Electromagnetism">
            {/* <List.Item title="Electric Motor" />
            <List.Item title="Electric Generator" onPress={LabHandler} />
            <List.Item title="Solenoid" /> */}
          </List.Accordion>

          <List.Accordion title="Chapter-11    Principles of Metallurgy">
            {/* <List.Item title="Electric Motor" />
            <List.Item title="Electric Generator" onPress={LabHandler} />
            <List.Item title="Solenoid" /> */}
          </List.Accordion>

          <List.Accordion title="Chapter-12    Carbon and its Compounds">
            {/* <List.Item title="Electric Motor" />
            <List.Item title="Electric Generator" onPress={LabHandler} />
            <List.Item title="Solenoid" /> */}
          </List.Accordion>
        </List.Section>
      </View>
    </ScrollView>
  );
};

export default PhysicsLab;
