import React from 'react';
import { StyleSheet, FlatList, View, Button } from 'react-native';
import Expo from 'expo';
import ListItem from './ListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{
        id: 100,
        title: 'palm pasta'
      },
      {
        id: 101,
        title: 'solo pasta'
      },
      {
        id: 102,
        title: 'circle pasta'
      }]
    };
  }

  addItem = () => {
    this.setState({
      items: [
        ...this.state.items,
        {
          id: 103,
          title: 'new item'
        }
      ]
    });

    // wrong ex1
    // this.state.items = [{id: 101, title: 'title'}];

    // wrong ex2
    // const newItems = this.state.items.push({id: 103, title: 'title'})
    // this.setState({
    //   items: newItems
    // })

    // another correct example
    // const newItems = this.state.items.concat({ id: 103, title: 'title' })
    // this.setState({
    //   items: newItems
    // });
  };

  // mergeStates = (state, newState) => {
  //   return {
  //     ...state,
  //     ...newState
  //   };
  // }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
          renderItem={element => <ListItem title={element.item.title} />}
          keyExtractor={item => String(item.id)}
        />
        <Button
          title="Add Item"
          onPress={this.addItem}
        />
        <Button
          title="New Button"
          onPress={() => {
            this.setState({});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Expo.Constants.statusBarHeight
  }
});
