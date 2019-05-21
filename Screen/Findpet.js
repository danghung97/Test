import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
export default class findScreen extends Component{

  state={
    name:''
  }
  handleName=(text)=>{
    this.setState({email: text})
  }
  find = (name) =>{
    alert('email: '+name)
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={{flex:1}}></View>
        <View style={[styles.part,{flex:2}]}>
          <Text style={{fontSize:30}}>
            Find a pet carer in
          </Text>
          <TextInput style={styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Name's carer"
            placeholderTextColor = 'blue'
            autoCapitalize = "none"
            onChangeText = {this.handleName}/>
            <TouchableOpacity
               style = {styles.findbutton}
               onPress = {() => {this.props.navigation.navigate('Discover')}}>
               <Text style = {styles.findbuttontext}> Go </Text>
        </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}


const styles=StyleSheet.create({
  container:{
    flex:1
  },
  part:{
    alignItems:'center',
  },
 input:{
   margin: 15,
   paddingBottom:0,
   borderBottomWidth: 1,
   borderBottomColor: 'grey'
 },
 findbutton:{
  justifyContent: 'center',
  alignItems: 'center',
  width: 200,
  backgroundColor: 'pink',
  margin: 15,
  height: 40,
 },
 findbuttontext:{
   color:'white'
 }
});