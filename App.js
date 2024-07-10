import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import { CartProvider } from './context/CartContext';
import HomeStackNavigator from './HomeStackNavigator';
import LocationsScreen from './Screens/LocationsScreen';
import BlogScreen from './Screens/BlogScreen';
import ClothingScreen from './Screens/ClothingScreen';
import JewelryScreen from './Screens/JewelryScreen';
import ElectronicScreen from './Screens/ElectronicScreen';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import CartIcon from './cartIcon'

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
       <TouchableOpacity    onPress={() => navigation.navigate('Store')}>
        <Image source={require('./assets/Close.png')} />
      </TouchableOpacity>
      <Text style={styles.header}>
      <Text style={styles.headerText}>Eric Atsu</Text>
       {/* Red line */}
      </Text>
      <View style={styles.headerLine}></View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('Home');

  const handleDrawerOpen = (isOpen) => {
    setIsDrawerOpen(isOpen);
  };

  return (
    <CartProvider>
      <NavigationContainer
        style={styles.container}
        onStateChange={(state) => {
          const isDrawerOpen = state.index !== undefined; // Assuming drawer index indicates open state
          handleDrawerOpen(isDrawerOpen);
          const currentRoute = state.routes[state.index];
          setCurrentScreen(currentRoute.name);
        }}
      >
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Store" component={HomeStackNavigator} />
          <Drawer.Screen name="Locations" component={LocationsScreen} />
          <Drawer.Screen name="Blog" component={BlogScreen} />
          <Drawer.Screen name="Jewelry" component={JewelryScreen} />
          <Drawer.Screen name="Electronic" component={ElectronicScreen} />
          <Drawer.Screen name="Clothing" component={ClothingScreen} />
        </Drawer.Navigator>
        {!isDrawerOpen && (<View
        style={[
          styles.Logo,
          currentScreen === 'Cart' ? styles.logoCartStyle : styles.Logo,
        ]}
      >
        <Image source={require('./assets/Logo.png')} />
      </View>   
       )}
      <View
        style={[
          styles.Search,
          currentScreen === 'Cart' ? styles.searchCartStyle : styles.Search,
        ]}
      >
        <Image source={require('./assets/Search.png')} />
      </View>
      {currentScreen !== 'Cart' && <CartIcon />}
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    position: 'absolute',
    bottom: 880,
    left: 180,
    height: 50,
  },
  Search: {
    position: 'absolute',
    bottom: 905,
    left: 360,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 22,
  },
  headerLine: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    width: '60%', // Adjust width as needed
    marginTop: 5, // Adjust spacing from text
  },
});
