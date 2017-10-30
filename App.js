import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./components/Navbar";
import PlantCard from "./components/PlantCard";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Navbar 
          style={styles.navbar}
        />
        <PlantCard 
          style={styles.plantCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  navbar: {
    justifyContent: "flex-start",
    width: 100,
  },
  plantCard: {
    alignItems: 'center',
  }
});