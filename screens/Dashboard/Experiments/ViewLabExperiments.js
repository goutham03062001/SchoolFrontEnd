import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import {WebView} from "react-native-webview"
const ViewLabExperiments = ({route}) => {
    const {data} = route.params;
    console.log(data);
    return(
            <WebView source={{ uri : data}} />
    )

}

export default ViewLabExperiments