import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Home extends Component {
  handleButtonPress() {
    this.props.navigation.navigate('Browser1');
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.text}>Home Screen</Text> */}
        <TouchableOpacity
          onPress={() => this.handleButtonPress()}
          style={styles.button}>
          <Text>Connect to Webview</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#333',
    textAlign: 'center',
  },
  button: {
    margin: 10,
    backgroundColor: '#356bca',
    borderRadius: 5,
    padding: 10,
  },
});

export default Home;
