import React, {Component} from 'react';
import{
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class HomeScreen extends Component{
  render(){
      return(
          <View style={styles.container}>
              <View style={styles.part1}>
                  <Text style={{fontSize:30}}>Welcome to Pcare</Text>
              </View>
              <View style={styles.part1}>
                  <TouchableOpacity style={styles.buttonContainer}>
                      <Text>Sign Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonContainer}
                  onPress={() => {this.props.navigation.navigate('LoginScreen')}}
                  >
                      <Text>Log In</Text>
                  </TouchableOpacity>
                  <View style={styles.part2}></View>
              </View>
          </View>
      );
  }
}
const styles=StyleSheet.create({
  container:{
      flex:1,
  },
  part1:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  },
  part2:{
      flex:2,
  },
  
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: 'pink',
  }
});
