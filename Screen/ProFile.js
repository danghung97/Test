import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AppRegistry
} from 'react-native';
import TabSelec from "./Tabselec";

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('./image/nvm.jpg')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Dang Hung</Text>
              <Text style={styles.info}>22, Dong Nai</Text>
              <View>       
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Call</Text>  
              </TouchableOpacity>      
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Book</Text> 
              </TouchableOpacity>
              </View>
            </View>
        </View>
        </View>
        <TabSelec
          onPressHome = {() =>this.props.navigation.navigate('HomeScreen')}
          onPressLogin={()=>this.props.navigation.navigate('LoginScreen')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end'
  },
  header:{
    backgroundColor: "#00BFFF",
    height:100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:20,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:150,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});

AppRegistry.registerComponent('Profile', () => Profile);
