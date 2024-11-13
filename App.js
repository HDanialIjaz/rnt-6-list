import React from 'react';
import {ScrollView,Text,View,Image,StyleSheet} from 'react-native';


const PersonData = () =>{
  return(
    <View style = {style.container}>
        <View style = {style.img}>
    <Image style= {style.pic}
      source = {{
        uri:  'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
      }}
    />
          </View>
          <View style={style.box}>
          <Text style = {style.name}>John Doe</Text>
          <Text style={style.bio}>hajhg djh bjbd</Text>
          </View>
    </View>
  );
};

const style = StyleSheet.create({
container:{
  flexDirection:'row',
 marginTop: 60,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Android shadow
    elevation: 10,
},

pic: {
  width : 45,
  height : 45,
  borderRadius: 30,
},
box:{
flex:1,
paddingHorizontal:20,
},
name:{
  fontWeight: 'bold',
  fontSize: 15,
},
bio:{
  color: '#666',
  marginTop:3,
}
});

export default PersonData;