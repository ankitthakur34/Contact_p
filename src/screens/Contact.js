import { StyleSheet, Text, View,TextInput , TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Checkbox from 'expo-checkbox'

const Contact = ({navigation}) => { 
const [name,Setname] = useState("")
const [number,Setnumber] = useState("")
const [email,Setemail] = useState("")
const [message,Setmessage] = useState("")
 
const userinfo=[
  { 
    key:1,
    name : name,
    number : number,
    email : email,
    message : message,
  }
]
const submit=()=>{

if(!name || !number || !email || !message){
  alert('plz fill all the data')
} else{
  alert(` thankyou ${name} `)
  navigation.navigate('Home')
}
console.log(userinfo);
} 




  const [agree,Setagree] = useState(false)

  return (
    <View style={styles.mainConatiner} >
      <Text style={styles.mainHeader}>Contact Us</Text> 

      <View style={styles.fieldsConatiner}>
       <Text style={styles.inputText} >Enter Your Name -</Text>
      <TextInput style={styles.inputField}  
      autoCapitalize="none"
      autoCorrect={false}
      value={name}
      onChangeText={(name)=> Setname(name) }
       />
      </View>
      <View style={styles.fieldsConatiner}>
       <Text style={styles.inputText} >Enter Your Mobile no. -</Text>
      <TextInput style={styles.inputField} 
      keyboardType='number-pad'
       
      autoCapitalize="none"
      autoCorrect={false}
      value={number}
      onChangeText={(no)=> Setnumber(no) }
       />
      </View>
      <View style={styles.fieldsConatiner}>
       <Text style={styles.inputText} >Enter Your Email -</Text>
      <TextInput style={styles.inputField}
      keyboardType='email-address'
      autoCapitalize="none"
      autoCorrect={false}
      value={email}
      onChangeText={(email)=> Setemail(email) }
       />
      </View>
      <View style={styles.fieldsConatiner}>
       <Text style={styles.inputText} >Write A Message -</Text>
      <TextInput style={[styles.inputField, styles.msg ]}  
      autoCapitalize="none"
      autoCorrect={false}
      multiline={true}
      numberOfLines="6"
      value={message}
      onChangeText={(msg)=> Setmessage(msg) }
       />
      </View> 

      <View style={styles.checkConatiner} >
        <Checkbox style={styles.checkbox}
         value={agree}
         onChange={()=> Setagree(!agree) }
         /> 
         <Text style={styles.checktext}>I Agree with all Terms & Conditions</Text>
      </View> 

      <View style={styles.btnConatiner}>
        <TouchableOpacity style={[styles.btnstyle,{
          backgroundColor: agree?"#DF7401":"grey",
        }]} 
        onPress={submit}
        disabled={!agree}
         >
          <Text style={styles.btntext}>Submit</Text>
        </TouchableOpacity>
      </View>

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
  mainHeader:{
    fontSize:36,
    color:"#4C0B5F",
    fontWeight:"bold",
    letterSpacing:1.4,
    marginBottom:50,
  },
  fieldsConatiner:{
    marginVertical:10,

  },
  inputText:{
    fontWeight:"700",
    color:"#6A0888",
    letterSpacing:0.4,
    marginVertical:3,
    fontSize:15
  },
  inputField:{
    borderWidth:0.5,
    borderRadius:6,
    width:270,
    height:29,
    padding:10,

  },
  msg:{
    height:70,
  },
  checkConatiner:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    marginVertical:20,

  },
  checktext:{
    marginLeft:10,
  },
  btnConatiner:{
    marginTop:20,
  },
  btnstyle:{
    width:140,
    height:40,
    backgroundColor:"#DF7401",
    borderRadius:6,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  btntext:{
    textAlign:"center",
    fontWeight:"700",
    letterSpacing:1,
  }

})

export default Contact

