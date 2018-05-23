import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Expo from 'expo';
import ListItem from './components/ListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ key: 'item 1' }, { key: 'item 2' }]
    };
  }

  deleteItem = key => {
    this.setState({
      items: this.state.items.filter(item => item.key !== key)
    });
  };

  renderItem = (element) => (
    <ListItem
      item={element.item}
      deleteItem={this.deleteItem}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
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
