import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';

export default class ListItem extends React.PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  };

  render() {
    return (
      <View>
        <View style={styles.image}>
          <Text style={styles.text}>圖片</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>{this.props.item.name}</Text>
          <Text style={styles.text2}>6%的反現</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    height: 40,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    height: 160,
    backgroundColor: 'yellow',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 1
  },
  text2: {
    borderWidth: 1
  }
});
