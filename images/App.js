import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return(
      <View style={styles.maincontainer}>
        <Image source={require()}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#f6f6e9',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
