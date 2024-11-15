import React from 'react';
import { Text, View, Image, StyleSheet ,FlatList } from 'react-native';
import PersonData  from './List';
const Data = {
  uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  name: 'John Doe',
  bio: 'hajhg djh bjbd',
};

const App = () => (
    <FlatList 
  <PersonData Data={Data} />

    />
);

export default App;
