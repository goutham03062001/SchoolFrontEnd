import { View, Text ,ScrollView,Dimensions,SafeAreaView} from 'react-native'
import React,{useEffect} from 'react'
import {WebView} from "react-native-webview";

const ViewExams = ({route}) => {
    const {data,inputText} = route.params;
    return(
           
                <View style={{flex:1}}>
                
               <WebView source={{ uri : data}}/>
              

            </View>
    )

}

export default ViewExams