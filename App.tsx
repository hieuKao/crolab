// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './android/app/src/screen/LoginScreen'; 
// import RegisterScreen from './android/app/src/screen/RegisterScreen';
// import HomeScreen from './android/app/src/screen/HomeScreen';
// import ProductDetailScreen from './android/app/src/screen/ProductDetailScreen';
// // Nhập khẩu các màn hình khác...

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Register" component={RegisterScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//         {/* Thêm các màn hình khác vào đây */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text>Demo hinh anh</Text>

      {/* Image from local source */}
      <Image
        source={require('./DemoCRO101/4316904.jpg')}
        style={{ width: 200, height: 200, borderWidth: 1, borderColor: 'red' }}
        resizeMode="cover"
      />

      {/* Image from remote URL */}
      <Image
        source={{ uri: 'https://www.brookstropicals.com/wp-content/uploads/2020/04/halfwholepieces2.jpg' }}
        style={{ width: 200, height: 200, borderWidth: 1, borderColor: 'blue' }}
        resizeMode="center"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
