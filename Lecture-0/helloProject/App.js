import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} serviceType={'food'}>
        <View style={styles.header}></View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={function(element) {
            return <TouchableOpacity style={styles.cell} onPress={() => {
              console.log(element)
            }}><Text>{element.item.key}</Text></TouchableOpacity> 
          }}
        >
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 64
  },
  cell: {
    height: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
