import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';

export default class ListItem extends React.Component {
  static propTypes = {
    deleteItem: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isPressed: false
    };
  }

  onLongPress = () => {
    Alert.alert(
      'Delete Item',
      'Are you sure?',
      [
        { text: 'Cancel' },
        {
          text: 'Delete',
          onPress: () => this.props.deleteItem(this.props.item.key)
        }
      ]
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={this.state.isPressed ? styles.pressed : styles.cell}
        onPress={() => {
          this.setState({
            isPressed: !this.state.isPressed
          });
        }}
        onLongPress={this.onLongPress}
      >
        <Text>{this.props.item.key}</Text>
      </TouchableOpacity>
    );
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