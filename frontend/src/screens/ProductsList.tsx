import React, { useCallback, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import ProductItem from '../components/ProductItem';
import { Product } from '../models/Product';
import { styles } from '../styles/app.styles';
import DataManager from '../data/DataManager';

type Props = {
  navigation: any;
};

export default function ProductList({
  navigation,
}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const dataManager = new DataManager();

  const loadProducts = async () => {
    const list = await dataManager.getAll();
    setProducts(list);
  };

  useFocusEffect(
    useCallback(() => {
      loadProducts();
    }, [])
  );

  const deleteProduct = async (id: string) => {
    await dataManager.remove(id);
    loadProducts();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductForm')}
      >
        <Text style={styles.buttonTextBig}>
          New Product
        </Text>
      </TouchableOpacity>

      <FlatList
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}
        data={products}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onDelete={() => deleteProduct(item.id!)}
          />
        )}
      />
    </View>
  );
}