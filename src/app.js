import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';
import TodoContextProvider from './hooks';
import HomeSection from './components/home-section';
import styles from './styles'


const App: () => React$Node = () => {
  return (
    <TodoContextProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.app}>
        <HomeSection />
      </SafeAreaView>
    </TodoContextProvider>
  );
};

export default App;
