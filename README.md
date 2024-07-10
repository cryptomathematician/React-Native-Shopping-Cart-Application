## Shopping Cart Application
This React Native application is a shopping cart system that allows users to view a list of products fetched from an external API, preview detailed information about each product, add products to their cart, and remove products from their cart. The selected items are stored locally on the device using AsyncStorage. The app includes a drawer navigation for easy access to different screens.

## Features
* HomeScreen: Displays a list of available products fetched from an external API.
* ProductDetailScreen: Shows detailed information about a selected product.
* CartScreen: Displays selected items in the cart.
* Drawer Navigation: Provides easy access to different screens through a swipe gesture or button.
* Add to Cart Button: Allows users to add products to their cart.
* Remove from Cart Button: Enables users to remove items from their cart.
* Data Storage: Uses AsyncStorage to store selected items locally on the device.


## Design Choices
1. Component Structure:

* HomeScreen: Renders a list of products.
* ProductDetailScreen: Renders detailed information about a product when a product is selected from the HomeScreen.
* CartScreen: Displays items added to the cart.
* Drawer Navigation: Provides a navigation menu accessible through a swipe gesture or button.

2. Data Fetching:
Used fetch to retrieve product data from an external API.
Managed asynchronous operations with async/await to ensure smooth data fetching and rendering.

3. State Management:
Utilized React's useState, useEffect, and useContext hooks for managing state across components.
Created a CartContext to handle cart state and actions like adding and removing items from the cart.

4. Local Storage:
Implemented AsyncStorage for persistent storage of cart items on the user's device.
Ensured that cart items are loaded from AsyncStorage when the app starts and saved whenever the cart is updated.

UI Design:
Designed a clean and user-friendly UI using React Native's StyleSheet.
Incorporated responsive design principles to ensure a consistent experience across different devices and screen sizes.



## Implementation Details
1. Fetching Data from API:
Used the useEffect hook to fetch data from an external API when the HomeScreen component mounts.
Stored the fetched data in a local state variable and rendered it using a FlatList.

2. Product Details:
Implemented navigation from HomeScreen to ProductDetailScreen when a product is selected.
Passed the selected product's data through React Navigation's route params to display detailed information.

4. Cart Functionality:
Created addToCart and removeFromCart functions within the CartContext.
Managed cart state using the useContext hook in the CartScreen component to display selected items.
Stored cart items in AsyncStorage and retrieved them on app startup to persist cart state.

## Screenshots

- ![Screenshot](https://github.com/cryptomathematician/rn-assignment7-11288689/blob/main/assets/screenshot3.png)
- ![Screenshot](https://github.com/cryptomathematician/rn-assignment7-11288689/blob/main/assets/screenshot2.png)
- ![Screenshot](https://github.com/cryptomathematician/rn-assignment7-11288689/blob/main/assets/screenshot1.png)
- ![Screenshot](https://github.com/cryptomathematician/rn-assignment7-11288689/blob/main/assets/screenshot4.png)
- ![Screenshot](https://github.com/cryptomathematician/rn-assignment7-11288689/blob/main/assets/screenshot5.png)
- ![Screenshot](https://github.com/cryptomathematician/rn-assignment7-11288689/blob/main/assets/screenshot6.png)
- ![Screenshot](https://github.com/cryptomathematician/rn-assignment7-11288689/blob/main/assets/screenshot7.png)
- ![Screenshot](https://github.com/cryptomathematician/rn-assignment7-11288689/blob/main/assets/screenshot8.png)
