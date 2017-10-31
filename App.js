import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default class App extends React.Component {
  state = {
    displaying: "Home"
  }

  Body = () => {
    if (this.state.displaying === "Home"){
      return <Text>Body Test</Text>
    }
  }

  render() {
    return (
      <View>
        <Navbar 
            style={styles.navbar}
          />
        {this.Body()}
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