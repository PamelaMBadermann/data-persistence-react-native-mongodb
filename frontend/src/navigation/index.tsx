import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductForm from '../screens/ProductForm';
import ProductList from '../screens/ProductsList';

export type RootStackParamList = {
  ProductList: undefined;
  ProductForm: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{
            title: 'Products',
          }}
        />

        <Stack.Screen
          name="ProductForm"
          component={ProductForm}
          options={{
            title: 'New Product',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}