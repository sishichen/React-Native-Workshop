import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class ListItem extends React.PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        key: PropTypes.string
      })),
      estimatedDeliveryTime: PropTypes.number
    })
  };

  getTag = (tags) => {
    let result = '';
    tags.forEach(tag => {
      result += `${tag.key} `;
    });
    return result;
  }

  getDeliveryTime = (time) => `${time}-${time + 10}mins`

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: `https://assets-staging.honestbee.com/banners/mobile/android/${this.props.item.slug}.png` }} />
          <Text style={styles.min}>{this.getDeliveryTime(this.props.item.estimatedDeliveryTime)}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>{this.props.item.name}</Text>
          <Text style={styles.text2}>{this.getTag(this.props.item.tags)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 6
  },
  cell: {
    height: 40,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  imageContainer: {
    height: 160
  },
  image: {
    height: 160,
    borderRadius: 8
  },
  min: {
    fontSize: 16,
    color: 'white',
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: 'black'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  text2: {
    fontSize: 14,
    color: 'gray'
  }
});
