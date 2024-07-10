import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from '../context/CartContext';
import axios from 'axios';

const localProductsData = [
    {
        id: 1,
        image: require("../assets/dress1.png"),
        title: "Office Wear",
        description: "Office wear for you office",
        price: 120,
        detailDescription: 'Recycle Boucle Knit Cardigan Pink'
    },
    {
        id: 2,
        image: require("../assets/dress2.png"),
        title: "Black",
        description: "reversible angora cardigan",
        price: 120,
        detailDescription: 'Recycle Boucle Knit Cardigan Pink'
    },
    {
        id: 3,
        image: require("../assets/dress3.png"),
        title: "Church Wear",
        description: "reversible angora cardigan",
        price: 120,
        detailDescription: 'Recycle Boucle Knit Cardigan Pink'
    },
    {
        id: 4,
        image: require("../assets/dress4.png"),
        title: "Lamerei",
        description: "reversible angora cardigan",
        price: 120,
        detailDescription: 'Recycle Boucle Knit Cardigan Pink'
    },
    {
        id: 5,
        image: require("../assets/dress5.png"),
        title: "21WN",
        description: "reversible angora cardigan",
        price: 120,
        detailDescription: 'Recycle Boucle Knit Cardigan Pink'
    },
    {
        id: 6,
        image: require("../assets/dress6.png"),
        title: "Lopo",
        description: "reversible angora cardigan",
        price: 120,
        detailDescription: 'Recycle Boucle Knit Cardigan Pink'
    },
    {
        id: 7,
        image: require("../assets/dress7.png"),
        title: "21WN",
        description: "reversible angora cardigan",
        price: 120,
        detailDescription: 'Recycle Boucle Knit Cardigan Pink'
    },
    {
        id: 8,
        image: require("../assets/dress7.png"),
        title: "21WN",
        description: "reversible angora cardigan",
        price: 120,
        detailDescription: 'Recycle Boucle Knit Cardigan Pink'
    },
];

const HomeScreen = () => {
    const { addToCart } = useContext(CartContext);
    const navigation = useNavigation();
    const [products, setProducts] = useState(localProductsData);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://fakestoreapi.com/products')
            .then(res => {
                const fetchedProducts = res.data.map(product => ({
                    ...product,
                    isLocal: false,
                }));
                setProducts([...localProductsData, ...fetchedProducts]);
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false));
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.productCard}>
            <ProductCard
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                detailDescription={item.detailDescription}
                addCart={() => addToCart(item)}
                onPress={() => navigation.navigate('ProductDetail', { item })}
                isLocal={item.isLocal !== false}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.category}>
                <Text style={styles.story}>OUR STORY</Text>
                <Ionicons name="list-outline" size={30} color="black" style={styles.list} />
                <Ionicons name="filter-outline" size={30} color="red" style={styles.filter} />
            </View>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#000" />
                </View>
            ) : (
                <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item.id}-${index}`} // Ensure unique keys
                contentContainerStyle={[styles.productList, { flexWrap: 'wrap', flexDirection: 'row' }]}
            />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    productCard: {
        width: '50%',
        padding: 8,
    },
    category: {
        flexDirection: 'row',
    },
    story: {
        fontSize: 20,
        right: 105,
        fontWeight: 'bold',
    },
    list: {
        left: 110,
    },
    filter: {
        left: 120,
    },
    productList: {
        alignItems: 'center',
        paddingHorizontal: 20,
        left: 20,
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});

export default HomeScreen;
