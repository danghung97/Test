import React, {Component} from 'react';
import{
  Text,
  View,
  StyleSheet,
  TouchableOpacity, 
  FlatList,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const listDemo = [{name : 'cat'}, {name : 'dog'}, {name : 'car'}, {name : 'hourse'},{name :  'red'}, {name : 'yellow'}]
const listPeople = [{name: 'Dang Hung',star: '4',animal: <Icon name="github" size={17} color='black'/>}, 
{name: 'Khuong Duy', star: '4.5',animal:<Icon name="gitlab" size={17} color='black'/>},
 {name: 'Thanh Hoa',star: '5',animal:<Icon name="github" size={17} color='black'/>},
 {name: 'Tuong Vy', star:'3.5',animal:<Icon name="twitter" size={17} color='black'/>}]


export default class list extends Component{
    constructor(props) {
        super(props)

    }

    renderItem(item) {
        // <View style={{  borderRadius: 2, backgroundColor:'grey',
        //                             paddingBottom: 5, paddingLeft:5, paddingRight:5, paddingTop: 5
        //                     }}>
        //                             <Text style={{ fontSize: 13, color: 'red' }}>{item}</Text>
        //                     </View>
        return (
            <TouchableOpacity onPress={() => alert(item.item.name)} style={{  borderRadius: 5, height: 40, backgroundColor: 'grey',
                                    width:70 , justifyContent: 'center',
                                     marginLeft: 15, alignItems: 'center'
                            }}>
                                    <Text style={{ fontSize: 13, color: 'red' }}>{item.item.name}</Text>
                            </TouchableOpacity>
        );
    }
    renderPeople(item){
        return(
            <View style={{ flexDirection: 'row', marginLeft:50, marginTop:15}}>
                <View>
                <Image style={styles.avatar} source={require('./image/dota.jpg')}/>
            </View>
           <View style={{marginLeft:50}}>
            <Text style={{ fontSize: 15, color: 'red',paddingLeft:10 }}
            onPress={() => {this.props.navigation.navigate('Profile')}}>{item.item.name}</Text>
            <Text style={{ fontSize: 15, color: 'red',paddingLeft:10}}> <Icon name="star" size={15} color='black'/>
            {item.item.star}</Text>
            </View>
            <View>
                <Text style={{paddingLeft:15}}>{item.item.animal}</Text>
            </View>
            </View>        
        );
    }

    render(){
        return(
            <View >
                <FlatList
                    data={listDemo}
                    keyExtractor={(item, key) => item.id}
                    renderItem ={item => this.renderItem(item)}
                    horizontal
                />
                <FlatList style ={{marginTop:40}}
                data={listPeople}
                keyExtractor={(item, key) => item.id}
                 renderItem ={item => this.renderPeople(item)}
                />
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:1
      },
});

