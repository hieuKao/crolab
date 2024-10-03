import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { productName, productPrice } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{productName}</Text>
      <Text>{productPrice}</Text>
      <Button title="Add to Cart" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});

export default ProductDetailScreen;
