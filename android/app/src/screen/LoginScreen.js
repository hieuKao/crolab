import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <View style={styles.container}>
      {/* Nếu bạn có logo, hãy bỏ dòng comment dưới đây */}
      {/* <Image source={require('./path/to/logo.png')} style={styles.logo} /> */}
      <TextInput 
        placeholder="Username" 
        style={styles.input} 
        value={username}
        onChangeText={setUsername}
      />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={styles.input} 
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox 
          value={rememberMe} 
          onValueChange={setRememberMe} 
        />
        <Text style={styles.label}>Remember Me</Text>
      </View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  logo: { width: 100, height: 100, alignSelf: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  label: { marginLeft: 8 },
});

export default LoginScreen;
