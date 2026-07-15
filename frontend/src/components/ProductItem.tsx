import { Text, View, TouchableOpacity } from 'react-native';

import { Product } from '../models/Product';
import { styles } from '../styles/app.styles';

type ProductItemProps = {
  product: Product;
  onDelete: () => void;
};

export default function ProductItem({
  product,
  onDelete,
}: ProductItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>
        {product.name}
      </Text>

      <Text style={styles.textItem}>
        Quantity: {product.quantity}
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={onDelete}
        >
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}