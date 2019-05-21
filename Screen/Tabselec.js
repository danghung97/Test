import React, { Component } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
  
export default class TabSelector extends React.Component {
    render() {
      const {
        colorActivity, colorForums, onPressForums, colorArticles,onPressHome, onPressLogin
      } = this.props;
      return (
        <View style={styles.container}>
          <View style={styles.view_icons}>
            <TouchableOpacity
              style={styles.button}
              onPress={onPressHome}
            >
              <FontAwesome
                name="home"
                size={23.5}
                color={colorActivity || 'pink'}
              />
              <Text style={{ fontSize: 10, color: colorActivity || 'pink' }}>
                {'Home'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view_icons}>
            <TouchableOpacity
              style={styles.button}
              onPress={onPressForums}
            >
              <MaterialCommunityIcons
                name="forum-outline"
                size={23.5}
                color={colorForums || 'pink'}
              />
              <Text style={{ fontSize: 10, color: colorForums || 'pink' }}>
                {'Message'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view_icons}>
            <TouchableOpacity
              style={styles.button}
              onPress={onPressLogin}
            >
              <AntDesign
                name="login"
                size={23.5}
                color={colorArticles || 'pink'}
              />
              <Text
                style={{ fontSize: 10, color: colorArticles || 'pink' }}
              >
                {'Login'}
              </Text>
            </TouchableOpacity>
          </View>
                
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 50,
      flexDirection: 'row',
      backgroundColor: 'white',
      paddingTop: 5
    },
    view_icons: {
      alignItems: 'center',
      flex: 1
    },
    button: {
      alignItems: 'center',
      flex: 1
    }
  });