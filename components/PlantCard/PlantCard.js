import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

  const PlantCard = (props) => {
    return (
      <View
        style={styles.parentView}
      >
        <Image
          style={styles.logo}
          source={{uri: props.item.imageURL }}
        />
        <Text style={styles.title}>{props.item.title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    justifyContent: 'space-between',
  },
  parentView: {
    height: 50,
    padding: 35,
  },
});

export default PlantCard;