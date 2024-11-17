import React from 'react';
import {ScrollView,Text,View,Image,StyleSheet} from 'react-native';


const PersonData = ({Data}) =>{
  return(
    <View style = {style.container}>
        <View style = {style.img}>
    <Image style= {style.pic}
      source = {{
        uri:  Data.uri 
      }}
    />
          </View>
          <View style={style.box}>
          <Text style = {style.name}>{Data.name}</Text>
          <Text style={style.bio}>{Data.bio}</Text>
          </View>
    </View>
  );
};

const style = StyleSheet.create({
container:{
  flexDirection:'row',
    padding: 5,
    margin:5,
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
  borderRadius: 25,
},
box:{
flex:1,
paddingHorizontal:20,
marginTop:5
},
name:{
  fontWeight: 'bold',
  fontSize: 15,
},
bio:{
  color: '#666',
  // marginTop:3,
}
});

export default PersonData;