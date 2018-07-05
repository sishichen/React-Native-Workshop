

import React from 'react';
import { StyleSheet, FlatList, View, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import Expo from 'expo';
import { connect } from 'react-redux';
import { startLoading, endLoading, fetchBrandList } from './ducks/brands';
import ListItem from './components/ListItem';

class BrandScreen extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    fetchBrandList: PropTypes.func,
    brands: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    isLoading: false
  }

  componentDidMount() {
    this.onRefresh();
  }

  onRefresh = () => {
    this.props.fetchBrandList();
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
          refreshControl={
            <RefreshControl
              refreshing={this.props.isLoading}
              onRefresh={this.onRefresh}
            />
              }
          data={this.props.brands}
          renderItem={element => this.renderItem(element)}
          keyExtractor={item => `${item.id}`}
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

const mapStateToProps = (state) => ({
  isLoading: state.brand.isLoading,
  brands: state.brand.brandList
});

const mapDispatchToProps = {
  startLoading,
  endLoading,
  fetchBrandList
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandScreen);
