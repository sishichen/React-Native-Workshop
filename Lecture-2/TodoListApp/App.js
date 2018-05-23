import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Expo from 'expo';
import ListItem from './components/ListItem';

export default class App extends React.Component {
  renderItem = (element) => (
    <ListItem
      item={element.item}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[{ key: 'item 1' }, { key: 'item 2' }]}
          renderItem={(element) => this.renderItem(element)}
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
