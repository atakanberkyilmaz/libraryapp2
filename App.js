import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from 'C:\\Users\\ultra\\KutuphaneUygulamasi2\\src\\store';
import BookListScreen from 'C:\\Users\\ultra\\KutuphaneUygulamasi2\\src\\screens\\BookListScreen.tsx';
import BookDetailScreen from 'C:\\Users\\ultra\\KutuphaneUygulamasi2\\src\\screens\\BookDetailScreen.tsx';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Kitap Listesi" component={BookListScreen} />
          <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

AppRegistry.registerComponent('main', () => App);

export default App;
