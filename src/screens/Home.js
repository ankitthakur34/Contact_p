import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View  style={styles.mainConatiner}>
      <Text style={styles.mainHeader1}>Welcome To </Text>
      <Text style={styles.mainHeader2}>Redpositive Service (OPC) Private Limited </Text>
      <Text style={styles.mainHeader3}>to know more about us please feel free to contact</Text>
      <TouchableOpacity
      style={styles.mainBtn}
       onPress={()=> navigation.navigate('Contact')  } >
         <Text  style={styles.mainBtnText}>Contact US</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  mainConatiner:{
    margin:20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  mainHeader1:{
    fontSize:32,
    color:"#6A0888",
    fontWeight:"600",
  },
  mainHeader2:{
    marginVertical:10,
    textAlign:"center",
    fontSize:26,
    color:"white",
    backgroundColor:"#2F0B3A",
    fontWeight:"bold",
    padding:6,
  },
  mainHeader3:{
    marginTop:40,
    textAlign:"center",
    fontSize:22,
    color:"##B40431",
    fontWeight:"bold",
    textTransform:"capitalize",
  },
  mainBtn:{
    marginTop:20,
    width:140,
    height:40,
    backgroundColor:"#DF7401",
    borderRadius:6,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  mainBtnText:{
    textAlign:"center",
    fontWeight:"700",
    letterSpacing:1,
  }
})

export default Home

