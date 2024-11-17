import React from 'react';
import { FlatList, Text, View, Image, StyleSheet } from 'react-native';
import PersonData from './PersonCard';

const DATA = [
  {
    id: '1',
    uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    name: 'Hafiz Muhammad Danial',
    bio: 'hajhg djh bjbd',
  },
  {
    id: '',
    uri: 'https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75',
    name: 'Hafiz Muhammad Muzamil ',
    bio: 'A short bio here.',
  },
  {
    id: '',
    uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    name: 'Jane Doe ',
    bio: 'A short bio here.',
  },
  {
    id: '',
    uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    name: 'Jane Doe ',
    bio: 'A short bio here.',
  },
  // Add more objects as needed
];

const App = () => {
  const renderItem = ({ item }) => <PersonData Data={item} />;

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default App;
    