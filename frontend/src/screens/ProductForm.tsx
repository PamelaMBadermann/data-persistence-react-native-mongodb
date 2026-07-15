import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Product } from '../models/Product';
import DataManager from '../data/DataManager';
import { styles } from '../styles/app.styles';

type Props = {
  navigation: any;
};

export default function ProductForm({ navigation }: Props) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const dataManager = new DataManager();

  const save = async () => {
    const product: Product = {
      name,
      quantity: Number(quantity),
    };

    await dataManager.add(product);

    navigation.navigate('ProductList');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={save}
      >
        <Text style={styles.buttonTextBig}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
}