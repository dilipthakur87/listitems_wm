import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MyComponents from './Components/MyComponent';
import {items} from './Utils/utils';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <MyComponents items={items} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
