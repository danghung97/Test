import React, {Component} from 'react';
import{
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableOpacity, 
  TextInput
} from 'react-native';
export default class LoginScreen extends Component{
  state={
    email: '',
    pass: ''
  }
  constructor(){
    super();
    this.state={hidePassword: true}
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }


  handleEmail = (text) => {
    this.setState({email: text})
  }
  handlePassword = (text) =>{
    this.setState({password: text})
  }
  login = (email,pass) =>{
    alert('email: '+ email +'  password: '+pass)
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.container}> 
          <View style={styles.part1}>
            <Text style={{color:'white', fontSize:40, color:'black'}}>Log in</Text>
          </View>
           <View style={[styles.container, {flex:2}]}>
             <View>
           <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = 'blue'
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = 'blue'
               autoCapitalize = "none"
               secureTextEntry = { this.state.hidePassword }
               onChangeText = {this.handlePassword}/>
            </View>
            <View style={{alignItems: 'center'}}>
            </View>
           </View>
          <View style={{flex:1}}></View> 
        </View>
        <View style={styles.part1}>
          <View style={styles.part1}>
          <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {this.props.navigation.navigate('Find')}}
               >
               <Text style = {styles.submitButtonText}> Log in </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:2}}>
          <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login('facebook cua ban: ', '')
               }>
               <Text style = {styles.submitButtonText}> Log in with facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 23,
  },
  part1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  input:{
    margin: 15,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    backgroundColor: 'pink',
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white'
 },
  text:{
    fontSize:20
  }
});
