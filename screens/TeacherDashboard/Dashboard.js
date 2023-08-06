import { View, Text, Button } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'
const Dashboard = () => {
    const authContext = useContext(AuthContext);
  return (
    <View>
      <Text>Dashboard</Text>
      <Text>{authContext.currentLoggedInStatus}</Text>
      <Button title = "Logout" onPress= {authContext.logout}/>
    </View>
  )
}

export default Dashboard