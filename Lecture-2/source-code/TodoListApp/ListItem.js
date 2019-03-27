import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListItem = props => {
  return (
    <View>
      <Text style={styles.text}>
        Item:
        <Text style={styles.blueText}>{props.title}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: 'red'
  },
  blueText: {
    color: 'blue'
  }
});

export default ListItem;
