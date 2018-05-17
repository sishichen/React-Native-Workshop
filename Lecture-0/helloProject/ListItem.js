import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false
    };
    this.name = 'sishi'
  }

  render() {
    return (
      <TouchableOpacity
        style={this.state.isPressed ? styles.pressed : styles.cell}
        onPress={() => {
          this.setState({
            isPressed: !this.state.isPressed
          })
        }}
      >
        <Text>{this.props.item.key + this.name}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  cell: {
    height: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pressed: {
    height: 100,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    alignItems: 'center'
  }
});