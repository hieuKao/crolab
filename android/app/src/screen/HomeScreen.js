import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Product 1', price: '$10' },
  { id: '2', name: 'Product 2', price: '$20' },
  // Thêm sản phẩm khác ở đây
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - {item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { padding: 10, borderWidth: 1, borderColor: 'gray', marginBottom: 10 },
});

export default HomeScreen;
