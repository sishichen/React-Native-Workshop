import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Expo from 'expo';
import ListItem from './components/ListItem';
import { asyncBrands } from './api';

export default class App extends React.Component {
  state = {
    brands: []
  }

  componentDidMount() {
    this.getBrands();
  }

  getBrands = async () => {
    const brands = await asyncBrands();
    this.setState({ brands });
  }

  renderItem = (element) => (
    <ListItem
      item={element.item}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.brands}
          renderItem={element => this.renderItem(element)}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Expo.Constants.statusBarHeight
  }
});
