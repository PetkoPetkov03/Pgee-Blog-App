import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header'
import Articles from './components/Articles';

const App = () => {
  return(
    <View style={styles.app} >
      <Header title="Pgee Blog" />
      <Articles />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})

export default App