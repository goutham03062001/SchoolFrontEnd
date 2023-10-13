import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useContext} from 'react'
import { AuthContext } from '../../../../context/AuthContext'
const CurrentWeekExams = () => {
  const authContext = useContext(AuthContext);
  useEffect(()=>{
    authContext.getCurrentWeekExams();
  },[]);
  return (
    <View>
      <Text>CurrentWeekExams</Text>
    </View>
  )
}

export default CurrentWeekExams

const styles = StyleSheet.create({})