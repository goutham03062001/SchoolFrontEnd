import { View, Text ,ScrollView,Dimensions,SafeAreaView} from 'react-native'
import React,{useEffect} from 'react'
import {WebView} from "react-native-webview";

const ViewLabExperiments = ({route}) => {
    const {data,inputText} = route.params;
    return(
           
                <View style={{flex:1}}>
                
               <WebView source={{ uri : data}} 
                    
                    />
                

               {inputText && (<>
                <Text style={{color:"red",fontSize:18,marginLeft:10}}>Instructions </Text>
            
            <Text style={{lineHeight:30,marginLeft:10,color:'green'}}>{inputText}</Text>
               </>)}
            
            </View>
    )

}

export default ViewLabExperiments